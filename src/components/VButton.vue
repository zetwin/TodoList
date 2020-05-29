<template>
  <button
    :type='type'
    class='w-full px-4 text-white duration-300 rounded font-secondary bg-theme hover:bg-theme-accent h-9'
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      validator(val) {
        return ['button', 'reset', 'submit'].indexOf(val) !== -1;
      },
    },
  },
};
</script>
