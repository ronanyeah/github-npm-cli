#!/usr/bin/env node

const { execSync } = require("child_process");
const { resolve } = require("path");

const projectRoot = resolve(__dirname, "..");
const content = execSync(`npm run scan --silent`, {
  encoding: "utf8",
  cwd: projectRoot,
});

console.log("v" + content.trim());
