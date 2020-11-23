import TextField from '@components/TextField/TextField.vue'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'TextField',
  component: TextField,
  decorator: [withKnobs]
}

const Template = (args, { argTypes }) => ({
  props: {
    label: {
      default: text('Label', 'Firstname')
    }
  },
  computed: {
    componentProps() {
      return {
        label: this.label
      }
    }
  },
  components: { TextField },
  template: '<text-field :label="componentProps.label" />'
})

export const Default = Template.bind({})
