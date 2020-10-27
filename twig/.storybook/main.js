module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs"
  ]
}
// import { configure } from '@storybook/html';
//
// configure(require.context('../stories', true, /\.stories\.js$/), module);