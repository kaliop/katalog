import Checkbox from '@components/Checkbox/Checkbox.vue'

export default {
  title: 'Checkbox',
  component: Checkbox
}

// default (boolean)
const BooleanStory = (args) => ({
  props: {
    checkboxLabel: String
  },
  data() {
    return {
      consent: false
    }
  },
  components: { Checkbox },
  template: `
  <div>
    <checkbox v-model="consent" :label="checkboxLabel" />
    <span>Value: {{ JSON.stringify(consent) }}</span>
  </div>`
})

export const Default = BooleanStory.bind({})

Default.args = {
  checkboxLabel: 'toto'
}

// // default (array)
const ArrayStory = (args) => ({
  props: {
    checkboxLabel1: String,
    checkboxLabel2: String
  },
  data() {
    return {
      options: []
    }
  },
  components: { Checkbox },
  template: `
    <div>
      <checkbox v-model="options" value="option1" :label="checkboxLabel1" />
      <checkbox v-model="options" value="option2" :label="checkboxLabel2" />
      <span>Value: {{JSON.stringify(options)}}</span>
    </div>
  `
})
export const Array = ArrayStory.bind({})

Array.args = {
  checkboxLabel1: 'Option 1',
  checkboxLabel2: 'Option 2'
}
