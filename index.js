const core = require('@actions/core');
const github = require('@actions/github');
const LOCALHOST_IP = process.env.LOCALHOST_IP;
const axios = require("axios");

try {
  const token = core.getInput('ACCESS_TOKEN');

  

  //const payload = JSON.stringify(github.context.payload, undefined, 2)
 
  console.log(token);

  const token1 = process.env.ACCESS_TOKEN;
  const USERNAME = process.env.USERNAME;
  const PASSWORD = process.env.PASSWORD;
  console.log("----------------------")
  console.log("----------------------")
  console.log("----------------------")
  console.log(token1);
  const b64uidpss = btoa(`${USERNAME}:${PASSWORD}`);
  const authorization = `Basic ${b64uidpss}`;
  axios
  .post(`https://dev.codethreat.com/signin`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      "x-ct-organization": "codethreat",
      "Authorization": `${authorization}`
    },
  })
  .then(({data}) => {
    console.log(data);
});
} catch (error) {
  core.setFailed(error.message);
}