import { danger, warn } from "danger";
const fs = require("fs");
fs.readFileSync("lintlog").toString().split("\n").forEach((line) => {
  warn(line);
});
