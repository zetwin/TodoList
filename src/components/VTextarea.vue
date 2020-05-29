<template>
  <textarea
    v-autosize
    rows='1'
    :value='value'
    :placeholder='placeholder'
    class='w-full resize-none'
    :class='classTheme'
    @input='$emit("input", $event.target.value)'
  />
</template>

<script>
export default {
  name: 'VTextarea',
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    theme: {
      type: String,
      default: 'default',
      validator(val) {
        return ['default', 'heading'].indexOf(val) !== -1;
      },
    },
  },
  computed: {
    classTheme() {
      switch (this.theme) {
        case 'heading': return 'font-bold text-6';
        default: return 'leading-6 placeholder-black-30';
      }
    },
  },
};
</script>
