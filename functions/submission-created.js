require('dotenv').config();
const fetch = require('node-fetch');

const { REVUE_API_KEY } = process.env;
exports.handler = async (event) => {
  const { payload } = JSON.parse(event.body);
  console.log('payload: ', payload);
  console.log(`Recieved a submission: ${payload.email}`);

  return fetch('https://www.getrevue.co/api/v2/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${REVUE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: payload.email, double_opt_in: false }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(JSON.stringify({ email: payload.email }));
      console.log(`Submitted to Revue:`);
      console.table(data);
    })
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
