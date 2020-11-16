// import Button from './Button.vue';
import Button from '@components/button/Button.vue';
import { withKnobs, text,  optionsKnob } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorator: [withKnobs]
}

const CustomclassesOptions = {
  'Btn--underline': 'Btn--underline',
  'Btn--inverted': 'Btn--inverted'
}

const Template = (args, { argTypes }) => ({
  props: {
    label: {
      default: text('Label', 'Hello Storybook')
    },
    customClasses: {
      default: optionsKnob('CSS Modifiers', CustomclassesOptions, '', { display: 'multi-select' })
    },
  },
  computed: {
    componentProps() {
      return {
        label: this.label
      }
    }
  },
  components: { Button },
  template: '<Button :class="$props.customClasses" :label="componentProps.label" />',
})

export const Default = Template.bind({})
// Default.args = { classes: 'Btn'}

export const Inverted = Template.bind({})
Inverted.args = { classes: 'Btn Btn--inverted'}

