<template>
  <header class='flex items-center flex-shrink-0 px-6 border-b h-18'>
    <button
      class='hidden p-2 mr-3 -ml-2 sm:block'
      @click='hideOnMobile'
    >
      <VSvg
        name='arrow'
        class='w-5 h-5 text-black-30'
      />
    </button>
    <VCheckboxTask
      :checked='taskCompleted'
      @change='toggleCompleted'
    />
  </header>
</template>

<script>
import VCheckboxTask from '@/components/VCheckboxTask.vue';

export default {
  name: 'TheSidebarHeader',
  components: {
    VCheckboxTask,
  },
  computed: {
    taskCompleted() {
      return this.$store.getters.taskCompleted(this.$route.query.task);
    },
  },
  methods: {
    hideOnMobile() {
      if (this.$store.getters.displaySidebar) this.$store.commit('hideMobileSidebar');
    },
    toggleCompleted() {
      this.$store.commit('toggleCompleted', this.$route.query.task);
      this.syncCompleted();
    },
    async syncCompleted() {
      await this.$store.dispatch('syncCompleted', this.$route.query.task);
    },
  },
};
</script>
