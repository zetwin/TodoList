<template>
  <header class='mb-5 px-7'>
    <div class='flex items-center h-18'>
      <button
        class='hidden p-4 -ml-4 lg:block'
        @click.stop='toggleDisplayMobileNavbar'
      >
        <VSvg
          name='bars'
          class='w-4 h-4 text-black-30'
        />
      </button>
      <h1 class='text-9'>Все</h1>
    </div>
    <VTextfieldB
      v-model='taskTitleInput'
      placeholder='Добавьте задачу, нажмите Enter для сохранения.'
      @keyup.enter.native='addTask'
    />
  </header>
</template>

<script>
import VTextfieldB from '@/components/VTextfieldB.vue';
import messages from '@/utils/messages';
import { mapMutations } from 'vuex';

export default {
  name: 'TheMainbarHeader',
  components: {
    VTextfieldB,
  },
  data: () => ({
    taskTitleInput: '',
  }),
  methods: {
    ...mapMutations(['toggleDisplayMobileNavbar']),
    async addTask() {
      if (this.taskTitleInput) {
        await this.$store.dispatch('addTask', {
          title: this.taskTitleInput,
          description: '',
          completed: false,
        });
        this.taskTitleInput = '';
      } else {
        this.$toasted.show(messages.enterTaskTitle);
      }
    },
  },
};
</script>
