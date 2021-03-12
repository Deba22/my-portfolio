// export default function handler(req, res) {
//     res.status(200).json({ user: 'Ada Lovelace' })
//     const email = req.body.email
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer keyfk9N6xZALtPjLK' },
//         body: JSON.stringify({"fields":{ Name: name,Email:email,Message:message }})
//     };
//     const response = await fetch('https://api.airtable.com/v0/appa9ziCwEDhZSTmQ/Queries', requestOptions)
//     .then(async response => {
//         const data = await response.json();

//         // check for error response
//         if (!response.ok) {
//             // get error message from body or default to response status
//             const error = (data && data.message) || response.status;
//             return Promise.reject(error);
//         }
//         console.log('There was an success!');
//        //success
//     })
//     .catch(error => {
      
//         console.error('There was an error!', error);
//     });
//   }