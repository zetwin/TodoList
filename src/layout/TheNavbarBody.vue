<template>
  <div class='px-3'>
    <VNavItem
      to='/dashboard'
      icon='all'
      :count='countTasksActive'
      active
    >
      Все
    </VNavItem>
  </div>
</template>

<script>
import VNavItem from '@/components/VNavItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'TheNavbarBody',
  components: {
    VNavItem,
  },
  computed: mapGetters(['countTasksActive']),
};
</script>
