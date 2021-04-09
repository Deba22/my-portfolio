
export default function handler(req, res) {
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appa9ziCwEDhZSTmQ');
    base('Queries').create([
        {
            "fields": req.body
        }
    ], function (err, records) {
        if (err) {
            console.error(err);
            res.status(err.statusCode).json({ message: err.message });
        }
        else {
            res.status(200).json({ message: 'success' });
        }
    });
}
