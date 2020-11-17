<template>
  <div>
    <label>{{ label }}</label>
    <input
      class="TextField"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: String
  }
}
</script>

<style lang="scss" scoped>
@import '@components/TextField/_textField.scss';
</style>
