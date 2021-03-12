import { airtableApiKey } from '../../config'
export default function handler(req, res) {
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: airtableApiKey }).base('appa9ziCwEDhZSTmQ');
    //var httpsStatusCode;
    //var Message;
    base('Queries').create([
        {
            "fields": req.body
        }
    ], function (err, records) {
        if (err) {
            console.error(err);
           // httpsStatusCode=err.statusCode;
           // Message=err.message;
            res.status(err.statusCode).json({ message: err.message });
        }
        else {
            res.status(200).json({ message: 'success' });
        }
    });
}
