<template>
  <VueScroll :ops='options'>
    <slot/>
  </VueScroll>
</template>

<script>
import VueScroll from 'vuescroll/dist/vuescroll-native';

export default {
  name: 'VScrollContainer',
  components: {
    VueScroll,
  },
  data: () => ({
    options: {
      vuescroll: {
        wheelScrollDuration: 200,
      },
      bar: {
        onlyShowBarOnScroll: false,
        background: 'black',
        opacity: 0.3,
        size: '0.25rem',
      },
    },
  }),
};
</script>
