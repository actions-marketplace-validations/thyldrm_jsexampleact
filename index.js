const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const token = core.getInput('ACCESS_TOKEN');
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  console.log(github);
  console.log("----------------------")
  console.log("----------------------")
  console.log("----------------------")
  console.log(nameToGreet);
  console.log("----------------------")
  console.log("----------------------")
  console.log("----------------------")
  console.log(token);

  const token1 = process.env.ACCESS_TOKEN;
  console.log("----------------------")
  console.log("----------------------")
  console.log("----------------------")
  console.log(token1);
} catch (error) {
  core.setFailed(error.message);
}