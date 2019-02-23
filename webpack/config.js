"use strict";
const path = require("path");

module.exports = {
  dev: {
    mode: "development",
    // Paths
    assetsSubDirectory: "./",
    assetsPublicPath: "/",
  },

  build: {
    mode: "production",
    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "./",
    assetsPublicPath: path.resolve(__dirname, "../dist")
  }
};
