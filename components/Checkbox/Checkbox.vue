<template>
  <div>
    <label class="Checkbox">
      <input
        type="checkbox"
        :name="name"
        :value="value"
        :checked="checked"
        @change="change"
      />
      <span class="Checkbox-check"></span>
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    name: String,
    value: String,
    label: String,
    modelValue: [Boolean, Array]
  },
  computed: {
    checked() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value)
      }

      return this.modelValue
    }
  },
  methods: {
    change() {
      // handle arrays as v-model
      if (Array.isArray(this.modelValue)) {
        // if the checkbox is checked (means we are unchecking it), we remove the value from the array
        if (this.checked) {
          const newModelValue = this.modelValue.filter(
            (item) => item !== this.value
          )

          this.$emit('change', newModelValue)
          return
        }

        // if the checkbox is unchecked (means we are checking it), we add the value to the array
        const newModelValue = [...this.modelValue, this.value]
        this.$emit('change', newModelValue)
        return
      }

      // handle boolean as v-model
      this.$emit('change', !this.modelValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@components/Checkbox/_checkbox.scss';
</style>
