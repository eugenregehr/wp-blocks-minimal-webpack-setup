const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');
const fs = require('fs');


const directoryPath = path.join(__dirname, 'blocks');
let entryPoints = {};

fs.readdirSync(directoryPath).forEach(file => {
  if (file !== '.DS_Store') {
    let js = { [`${file}/js`]: `./blocks/${file}/js/${file}.js` };
    let scss = { [`${file}/scss`]: `./blocks/${file}/scss/${file}.scss` };
    entryPoints = Object.assign(js, scss);
  }
});


module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, 'blocks'),
    filename: '[name]/bundle.min.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/bundle.min.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[c]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: { indentedSyntax: true }
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)$/i,
        use: 'url-loader?limit=1024'
      }
    ]
  },
};