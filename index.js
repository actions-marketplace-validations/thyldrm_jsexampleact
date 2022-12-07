const core = require('@actions/core');
const github = require('@actions/github');
const axios = require("axios");

try {
  const token1 = process.env.ACCESS_TOKEN;
//   const options = {
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json;charset=UTF-8",
//         "x-ct-organization": "codethreat",
//         "Authorization": `${token1}`
//       },
//     method: 'post',
//     url: 'https://501e-78-189-89-238.eu.ngrok.io/api/integration/github/start',
//     data: {
//       project: github.context.payload.repository.name,
//       branch: github.context.payload.pull_request.head.ref,
//       type: "action"
//     },
//   };
//   axios(options).then(({data}) => {
//     console.log(data);
// });

axios
  .get("https://4ebb-176-236-105-2.eu.ngrok.io/api/users", {
    headers: {
      "x-ct-organization": "codethreat",
      "Authorization": `${token1}`
    },
  })
  .then(({data}) => {
    console.log(data);
});

axios
  .post("https://4ebb-176-236-105-2.eu.ngrok.io/api/integration/github/start", {
    headers: {
      "x-ct-organization": "codethreat",
      "Authorization": `${token1}`
    },
  })
  .then(({data}) => {
    console.log(data);
});


//   axios
//   .post("https://4ebb-176-236-105-2.eu.ngrok.io/api/integration/github/start", {
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

const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
 console.log("eyyy " + github.context.payload.repository.name);
 console.log("pr " + github.context.payload.pull_request.head.ref);
} catch (error) {
  core.setFailed(error.message);
}


//https://github.com/thyldrm/action/archive/newb.zip