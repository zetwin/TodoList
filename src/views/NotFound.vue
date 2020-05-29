<template>
  <TheLayoutSheet class='text-center'>
    <div class='text-theme-accent text-24'>404</div>
    <div class='mb-2 text-theme-accent text-7'>Страница не найдена</div>
  </TheLayoutSheet>
</template>

<script>
import TheLayoutSheet from '@/layout/TheLayoutSheet.vue';

export default {
  name: 'NotFound',
  components: {
    TheLayoutSheet,
  },
};
</script>
