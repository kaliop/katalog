import Radio from '@components/Radio/Radio.vue'

export default {
  title: 'Radio',
  component: Radio
}

const Template = (args) => ({
  props: {
    radioLabel1: String,
    radioLabel2: String,
    radioLabel3: String
  },
  data() {
    return {
      color: null
    }
  },
  components: { Radio },
  template: `
    <div>
      <radio v-model="color" value="rouge" :label="radioLabel1" />
      <radio v-model="color" value="bleu" :label="radioLabel2" />
      <radio v-model="color" value="vert" :label="radioLabel3" />
      <span>Value: {{ JSON.stringify(color) }}</span>
    </div>
    `
})

export const Default = Template.bind({})

Default.args = {
  radioLabel1: 'Bleu',
  radioLabel2: 'Rouge',
  radioLabel3: 'Vert (et pas jaune)'
}
