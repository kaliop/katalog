<template>
  <div>
    <label class="Radio">
      <span>{{ label }}</span>
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="checked"
        @change="change"
      />
      <span class="Radio-check"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    name: String,
    value: String,
    label: String,
    modelValue: String
  },
  computed: {
    checked() {
      return this.modelValue === this.value
    }
  },
  methods: {
    change(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@components/Radio/_radio.scss';
</style>
