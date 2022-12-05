const core = require('@actions/core');
const github = require('@actions/github');

try {
  const token = core.getInput('ACCESS_TOKEN');

  //const payload = JSON.stringify(github.context.payload, undefined, 2)
 
  console.log(token);

  const token1 = process.env.ACCESS_TOKEN;
  console.log("----------------------")
  console.log("----------------------")
  console.log("----------------------")
  console.log(token1);
} catch (error) {
  core.setFailed(error.message);
}