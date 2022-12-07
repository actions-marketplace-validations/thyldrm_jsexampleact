const core = require('@actions/core');
const github = require('@actions/github');
const axios = require("axios");

try {
//   const token1 = process.env.ACCESS_TOKEN;
//   const options = {
//     method: 'post',
//     url: 'https://501e-78-189-89-238.eu.ngrok.io/integration/github/start',
//     data: {
//       project: 'Finn',
//       lastName: 'Williams'
//     },
//     transformRequest: [(data, headers) => {
//       // transform the data
  
//       return data;
//     }]
//   };
//   axios
//   .post("https://501e-78-189-89-238.eu.ngrok.io/integration/github/start", {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json;charset=UTF-8",
//       "x-ct-organization": "codethreat",
//       "Authorization": `${token1}`
//     },
//   })
//   .then(({data}) => {
//     console.log(data);
// });
const payload = JSON.stringify(github.context.payload.repository.name)
  console.log(`The event payload: ${payload}`);
//   console.log(`NAMEEE: ${payload.repository.name}`);
 console.log("eyyy " + github.context.payload.repository.name);
} catch (error) {
  core.setFailed(error.message);
}