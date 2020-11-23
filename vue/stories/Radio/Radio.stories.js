import Radio from '@components/Radio/Radio.vue'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Radio',
  component: Radio,
  decorator: [withKnobs]
}

const Template = (args, { argTypes }) => ({
  props: {
    radioLabel1: {
      default: text('Label radio 1', 'Rouge')
    },
    radioLabel2: {
      default: text('Label radio 2', 'Bleu')
    },
    radioLabel3: {
      default: text('Label radio 3', 'Vert (et pas jaune)')
    }
  },
  data() {
    return {
      color: null
    }
  },
  computed: {
    componentProps() {
      return {
        radioLabel1: this.radioLabel1,
        radioLabel2: this.radioLabel2,
        radioLabel3: this.radioLabel3
      }
    }
  },
  components: { Radio },
  template: `
    <div>
        <radio v-model="color" value="rouge" :label="componentProps.radioLabel1" />
        <radio v-model="color" value="bleu" :label="componentProps.radioLabel2" />
        <radio v-model="color" value="vert" :label="componentProps.radioLabel3" />
    </div>
    `
})

export const Default = Template.bind({})
