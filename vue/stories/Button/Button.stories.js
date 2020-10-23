// import Button from './Button.vue';
import Button from '@components/button/Button.vue';

export default {
  title: 'Button',
  component: Button
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button :class="$props.classes"/>',
})

export const Default = Template.bind({})
Default.args = { classes: 'Btn'}

export const Inverted = Template.bind({})
Inverted.args = { classes: 'Btn Btn--inverted'}

