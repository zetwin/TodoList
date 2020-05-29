<template>
  <TheLoader v-if='loading'/>
  <div
    v-else
    class='flex h-full'
  >
    <TheNavbar/>
    <TheMainbar/>
    <TheSidebar/>
  </div>
</template>

<script>
import TheLoader from '@/layout/TheLoader.vue';
import TheNavbar from '@/layout/TheNavbar.vue';
import TheMainbar from '@/layout/TheMainbar.vue';
import TheSidebar from '@/layout/TheSidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    TheNavbar, TheMainbar, TheSidebar, TheLoader,
  },
  data: () => ({
    loading: true,
  }),
  async mounted() {
    await this.$store.dispatch('fetchInfo');
    await this.$store.dispatch('fetchTasks');
    this.loading = false;
  },
  destroyed() {
    this.$store.commit('clearInfo');
    this.$store.commit('clearTasks');
  },
};
</script>
