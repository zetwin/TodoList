<template>
  <VScrollContainer
    v-if='countTasksAll'
    class='flex-grow'
  >
    <div class='px-4'>
      <VTask
        v-for='task in tasks'
        :key='task.id'
        :title='task.title'
        :completed='task.completed'
        :to='task.to'
        :active='task.active'
        @update:title='updateTitle(task.id, $event)'
        @update:completed='toggleCompleted(task.id)'
        @click.native.stop='showMobileSidebar'
      />
    </div>
  </VScrollContainer>
  <div
    v-else
    class='flex items-center justify-center flex-grow px-6 pb-16'
  >
    <VInfoBox
      icon='loupe'
      title='Список задач пуст'
      text='Чтобы добавить новую задачу, нажмите на поле ввода'
    />
  </div>
</template>

<script>
import VInfoBox from '@/components/VInfoBox.vue';
import VTask from '@/components/VTask.vue';
import { mapGetters, mapMutations } from 'vuex';
import { debounce } from 'debounce';

export default {
  name: 'TheMainbarBody',
  components: {
    VInfoBox, VTask,
  },
  computed: {
    ...mapGetters(['countTasksAll']),
    tasks() {
      return this.$store.getters.tasksAll.map((task) => ({
        id: task.id,
        title: task.title,
        completed: task.completed,
        to: { query: { task: task.id } },
        active: this.$route.query.task === task.id,
      }));
    },
  },
  created() {
    this.syncTitle = debounce(this.syncTitle, 200);
  },
  methods: {
    ...mapMutations(['showMobileSidebar']),
    updateTitle(id, val) {
      this.$store.commit('updateTitle', { id, val });
      this.syncTitle(id);
    },
    toggleCompleted(id) {
      this.$store.commit('toggleCompleted', id);
      this.syncCompleted(id);
    },
    async syncTitle(id) {
      await this.$store.dispatch('syncTitle', id);
    },
    async syncCompleted(id) {
      await this.$store.dispatch('syncCompleted', id);
    },
  },
};
</script>
