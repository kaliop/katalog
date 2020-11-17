import Checkbox from '@components/Checkbox/Checkbox.vue'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorator: [withKnobs]
}

const Template = (args, { argTypes }) => ({
  props: {
    checkboxLabel1: {
      default: text('Label checkbox 1', 'Option 1')
    },
    checkboxLabel2: {
      default: text('Label checkbox 2', 'Option 2')
    },
    checkboxLabel3: {
      default: text('Label checkbox 3', 'Terms agreement')
    }
  },
  data() {
    return {
      options: [],
      consent: false
    }
  },
  computed: {
    componentProps() {
      return {
        checkboxLabel1: this.checkboxLabel1,
        checkboxLabel2: this.checkboxLabel2,
        checkboxLabel3: this.checkboxLabel3
      }
    }
  },
  components: { Checkbox },
  template: `
    <div>
        <h2>Pick your options (array of options)</h2>
        <checkbox v-model="options" value="opt1" :label="componentProps.checkboxLabel1" />
        <checkbox v-model="options" value="opt2" :label="componentProps.checkboxLabel2" />
        <hr />
        <h2>Terms agreement (boolean)</h2>
        <checkbox v-model="consent" :label="componentProps.checkboxLabel3" />
    </div>
    `
})

export const Default = Template.bind({})
