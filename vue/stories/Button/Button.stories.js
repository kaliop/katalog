import Button from '@components/Button/Button.vue'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    customClasses: {
      control: {
        type: 'multi-select',
        options: ['Btn', 'Btn--underline', 'Btn--inverted']
      }
    }
  }
}

const Template = (args) => ({
  props: {
    buttonLabel: String,
    customClasses: Array
  },
  components: { Button },
  template: '<Button :class="customClasses" :label="buttonLabel" />'
})

// default
export const Default = Template.bind({})

Default.args = { buttonLabel: 'Button' }

// inverted
export const Inverted = Template.bind({})

Inverted.args = { buttonLabel: 'Button inverted' }
