const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twig-loader'
  });

  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  });

  // We add an alias to import components from parent
  config.resolve.alias['@components'] = path.resolve(__dirname, '../../components')

  // To enable twig loader in parent component directory
  config.resolve.modules = [path.resolve(__dirname, '../node_modules')]

  return config;
};