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

Create a new directory with the component's name under the target storybook 'stories' dir (vue/stories or twig/stories or both) 

For twig, add two files :
   - {COMPONENT}.html.twig : contain the twig code or your component
   - {COMPONENT}.stories.js : contain the stories definition of your component (https://storybook.js.org/docs/react/writing-stories/introduction)

For vue.js, add two files :
   - {COMPONENT}.vue : contain the vue code or your component
   - {COMPONENT}.stories.js : contain the stories definition of your component (https://storybook.js.org/docs/react/writing-stories/introduction)
   
Then, add the css component in components/{COMPONENT}/_{COMPONENT}.scss