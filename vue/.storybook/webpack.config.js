const path = require('path')
const stylePath = path.resolve(__dirname, '../../styles')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      {
        loader: 'sass-loader',
        options: {
          additionalData: `@import "${stylePath}/config/_index.scss";`
        }
      }
    ],
  });

  // We add an alias to import components from parent
  config.resolve.alias['@components'] = path.resolve(__dirname, '../../components')
  
  return config;
};