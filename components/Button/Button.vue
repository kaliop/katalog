<template>
  <button class="Btn" type="button">
    {{ label }}
  </button>
</template>

<script>
import '@components/Button/_button.scss'

export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
