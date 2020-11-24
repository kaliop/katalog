import TextField from '@components/TextField/TextField.vue'

export default {
  title: 'TextField',
  component: TextField
}

const Template = (args, { argTypes }) => ({
  props: {
    textFieldLabel: String
  },
  components: { TextField },
  template: '<text-field :label="textFieldLabel" />'
})

export const Default = Template.bind({})

Default.args = {
  textFieldLabel: 'Label'
}
