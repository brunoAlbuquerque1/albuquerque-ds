const path = require("path");
const { getBrands } = require("./brands");
const { buildTokens } = require("./build");

getBrands().map(async function (current) {
  const buildPath = {
    css: path.join("dist", "css", current.dest, path.sep),
    scss: path.join("dist", "scss", current.dest, path.sep),
    js: path.join("dist", "js", current.dest, path.sep),
  };

  await buildTokens({ current, buildPath });
});
