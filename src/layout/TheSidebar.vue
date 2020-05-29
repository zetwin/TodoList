<template>
  <aside
    class='right-0 flex flex-col w-4/12 bg-white border-l sm:h-full sm:absolute sm:shadow-lg sm:w-2/3 xs:w-full'
    :class='classContainer'
    v-click-outside='hideOnMobile'
  >
    <template v-if='!countTasksAll'/>
    <template v-else-if='taskInfo'>
      <TheSidebarHeader/>
      <TheSidebarBody/>
      <TheSidebarFooter/>
    </template>
    <div
      v-else
      class='flex items-center justify-center flex-grow p-6'
    >
      <VInfoBox
        icon='loupe'
        subtitle='Нажмите на задачу чтобы посмотреть детали'
      />
    </div>
  </aside>
</template>

<script>
import TheSidebarHeader from '@/layout/TheSidebarHeader.vue';
import TheSidebarBody from '@/layout/TheSidebarBody.vue';
import TheSidebarFooter from '@/layout/TheSidebarFooter.vue';
import VInfoBox from '@/components/VInfoBox.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'TheSidebar',
  components: {
    TheSidebarHeader, TheSidebarBody, TheSidebarFooter, VInfoBox,
  },
  computed: {
    ...mapGetters(['countTasksAll']),
    classContainer() {
      return { 'sm:hidden': !this.$store.getters.displaySidebar };
    },
    taskInfo() {
      return this.$store.getters.taskInfo(this.$route.query.task);
    },
  },
  methods: {
    hideOnMobile() {
      if (this.$store.getters.displaySidebar) this.$store.commit('hideMobileSidebar');
    },
  },
};
</script>
