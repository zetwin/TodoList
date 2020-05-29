<template>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    class='fill-current'
  >
    <use
      :xlink:href='iconPath'
      xmlns:xlink='http://www.w3.org/1999/xlink'
    />
  </svg>
</template>

<script>
export default {
  name: 'VSvg',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconPath() {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      let icon = require(`@/assets/icons/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }
      return icon.url;
    },
  },
};
</script>
