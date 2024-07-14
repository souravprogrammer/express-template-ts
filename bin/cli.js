#!/usr/bin/env node
const { execSync } = require("child_process");
const runCommand = (command) => {
  try {
    execSync(`${command} `, { stdio: "inherit" });
  } catch (err) {
    console.error(`faild to execute : ${command}`, err);
    return false;
  }
  return true;
};
const repoName = process.argv[2] ?? "express-template-ts";
const gitCheckoutCommand = `git clone --depth 1 https://github.com/souravprogrammer/express-template-ts.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the reposotry with name ${repoName}`);

const checkoutResult = runCommand(gitCheckoutCommand);
if (!checkoutResult) process.exit(-1);

console.log(
  `Congratulations! 🎉 You are ready. Follow the following commands to start`
);
console.log(`to start a development server :-`);
console.log(`cd ${repoName} && npm run dev`);
console.log(`to build a production build :-`);
console.log(`cd ${repoName} && npm run prod:build`);
console.log(`npm run start`);
console.log(`Happy coding 🎉🎉🎉`);
