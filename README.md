# Katalog Storybook documentation

## Install dependencies

In twig vue, and main, install dependencies :

```bash
npm install
```

## Build in local to see main storybook

Launch the twig storybook :

```bash
cd twig && npm run storybook
```

Launch the vue storybook :

```bash
cd vue && npm run storybook
```

Wait for the launch on previous storybooks.
Launch the main storybook :

```bash
cd main && npm run storybook
```

## Launch for dev

Launch the twig storybook :

```bash
cd twig
npm run dev
```

Launch the vue storybook :

```bash
cd vue
npm run dev
```

Wait for the launch on previous storybooks.
Launch the main storybook :

```bash
cd main
npm run storybook
```

## How to add a component

All components live in the `components/` folder.
Create a new directory in it with the component's name and create the file for:

- {COMPONENT}.html.twig : Contain the twig template
- {COMPONENT}.vue : Contain the Vue template
- {COMPONENT}.scss : contain de scss style for the component

Then, create a story for your component in the different storybook

For Twig:

- twig/stories/{COMPONENT}/{COMPONENT}.stories.js

For Vue:

- vue/stories/{COMPONENT}/{COMPONENT}.stories.js

## How to write a story ?

Read the doc here : https://storybook.js.org/docs/react/writing-stories/introduction

Begin with a `Default` story which is the main entrance for your component. It should display the default state.

You can add multiple variant story to show special state if you want with prebuild data variant (example: in the `Button` component, we have an `Inverted` story to show the inverted state of the button)

You can have an example in the `Button` story.

## Knobs

Knobs is a storybook add-on which let us create dynamic field to test our composant with different data.
You can see all the available fields here: https://github.com/storybookjs/storybook/tree/master/addons/knobs#available-knobs

## Tips

- Avoid static text in your story. Pass all your data in props to manage it with Knobs
- All the CSS classes is managed by a `multi-select` knobs field, named `CSS Modifiers`. It allow us to add css variant on the go.
