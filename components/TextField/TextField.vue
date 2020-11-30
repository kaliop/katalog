<template>
  <div class="TextField">
    <label class="TextField-label">{{ label }}</label>
    <input class="TextField-input" type="text" :value="value" @input="input" />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: String
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@components/TextField/_textField.scss';
</style>
