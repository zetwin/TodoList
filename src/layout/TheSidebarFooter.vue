<template>
  <footer class='flex items-center flex-shrink-0 h-12 px-6 border-t'>
    <button @click='removeTask'>
      <VSvg
        name='delete'
        class='w-6 h-6 text-black-30 hover:text-black-50'
      />
    </button>
  </footer>
</template>

<script>
export default {
  name: 'TheSidebarFooter',
  methods: {
    async removeTask() {
      await this.$store.dispatch('removeTask', this.$route.query.task);
    },
  },
};
</script>
