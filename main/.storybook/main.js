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
      url: 'https://kaliop-storybook-vue.netlify.app',
    },
    twig: {
      title: 'twig',
      url: 'https://kaliop-storybook-twig.netlify.app',
    },
  }
}