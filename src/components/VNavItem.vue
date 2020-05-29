<template>
  <router-link
    :to='to'
    class='flex items-center px-2 rounded h-9'
    :class='classContainer'
  >
    <VSvg
      v-if='icon'
      :name='icon'
      class='w-6 h-6 mr-2 text-white-8'
    />
    <span class='flex-grow font-bold'>
      <slot/>
    </span>
    <span
      v-if='count'
      class='text-3'
    >
      {{count}}
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'VNavItem',
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
    count: {
      type: Number,
    },
  },
  computed: {
    classContainer() {
      return this.active ? 'bg-black-10' : 'hover:bg-black-5';
    },
  },
};
</script>
