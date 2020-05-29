<template>
  <button @click.stop.prevent='$emit("change", !checked)'>
    <VSvg
      :name='iconName'
      class='w-4 h-4'
      :class='classIcon'
    />
  </button>
</template>

<script>
export default {
  name: 'VCheckboxTask',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    fade: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classIcon() {
      return this.checked && this.fade ? 'text-black-10' : 'text-black-20';
    },
    iconName() {
      return this.checked ? 'completed' : 'checkbox';
    },
  },
};
</script>
