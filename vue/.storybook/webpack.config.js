module.exports = ({ config }) => {
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
  config.resolve.alias['@components'] = '/home/asavoie/www/katalog/components'

  return config;
};