module.exports = {
  "stories": [

    "../stories/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  refs: {
    vue: {
      title: 'vue',
      url: 'http://localhost:6007',
    },
    twig: {
      title: 'twig',
      url: 'http://localhost:6008',
    },
  }
}