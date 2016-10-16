var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module:{
    loaders: [
              {
              test: /\.js$/,
              loader: "babel",
              exclude: path.join(__dirname, 'node_modules'),
              include: path.join(__dirname, 'src')
            },
            {
              test: /\.s?css$/,
              loaders: ['style', 'css', 'sass']
            }
          ]
      }
}
