const ContentTable = require('../types/database/table/content-table');
const ContentRecord = require('../types/database/records/content');

const mime = require('node-mime');

/**
 * content json description
 * @typedef {{
 *   id: number,
 *   title: string,
 *   description: string,
 *   file_name: string,
 *   created_at: Object,
 *   author: Object
 * }} ContentRecordInfoJson
 */

/**
 *
 * @param expressInit
 * @param {ContentTable} contentTable
 */
module.exports = async (expressInit, contentTable) => {
    expressInit.get('/content/:id/info', (req, res) => {
        res.setHeader('content-type', 'application/json');

        let record;

        try
        {
            record = contentTable.getRecord(req.params.id);
        }
        catch (e)
        {
            res.status(404);
            return;
        }

        let content : ContentRecordInfoJson = {
            id: record.propertyGetters.id(),
            title: record.propertyGetters.title(),
            description: record.propertyGetters.description(),
            file_name: record.propertyGetters.file_name(),
            created_at: record.propertyGetters.created_at(),
            author: record.propertyGetters.author()
        };

        res.end(JSON.stringify(content));
    });

    expressInit.get('/content/:id', (req, res) => {
        let record;

        try
        {
            record = contentTable.getRecord(req.params.id);
        }
        catch (e)
        {
            res.status(404);
            return;
        }

        let fileName = record.propertyGetters;
        let fileNameExtension = fileName.substring(fileName.lastIndexOf(".")).toLowerCase();

        res.setHeader('content-type', mime.lookUpExt(fileNameExtension));
        res.end(record.propertyGetters.file_binary())
    });
};