<template>
  <div>
    <label class="Radio" :class="{ 'Radio-selected': checked }">
      <span v-if="checked">x</span>
      <span v-else>o</span>
      <span>{{ label }}</span>
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="checked"
        @change="$emit('change', $event.target.value)"
      />
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
  }
}
</script>

<style lang="scss" scoped>
@import '@components/Radio/_radio.scss';
</style>
