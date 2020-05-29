<template>
  <input
    :value='value'
    :type='type'
    :placeholder='placeholder'
    class='w-full h-10 px-3 border border-transparent rounded placeholder-black-30 bg-theme-8 focus:border-accent'
    @input='$emit("input", $event.target.value)'
  />
</template>

<script>
export default {
  name: 'VTextfieldB',
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
      validator(val) {
        return ['text', 'password'].indexOf(val) !== -1;
      },
    },
    placeholder: {
      type: String,
    },
  },
};
</script>
