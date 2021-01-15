require('dotenv').config();
const fetch = require('node-fetch');

const { EMAIL_TOKEN } = process.env;
exports.handler = async (event) => {
  const { payload } = JSON.parse(event.body);
  console.log('payload: ', payload);
  console.log(`Recieved a submission: ${payload.email}`);

  return fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: payload.emailAddress }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Submitted to Buttondown:`);
      console.table(data);
    })
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};

// console.log(`Recieved a submission: ${email}`);
// return fetch('https://api.buttondown.email/v1/subscribers', {
//   method: 'POST',
//   headers: {
//     Authorization: `Token ${EMAIL_TOKEN}`,
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ email }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(`Submitted to Buttondown:\n ${data}`);
//   })
//   .catch((error) => ({ statusCode: 422, body: String(error) }));
// };
