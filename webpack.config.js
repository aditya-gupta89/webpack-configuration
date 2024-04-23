const path = require("path");
// we using require because it is loaded by Nodejs that why it works with require
module.exports = {
  entry: "/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
