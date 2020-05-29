<template>
  <nav
    class='z-10 w-64 lg:h-full lg:absolute lg:shadow-lg bg-theme text-white-80'
    :class='classContainer'
    v-click-outside='hideOnMobile'
  >
    <TheNavbarHeader/>
    <TheNavbarBody/>
  </nav>
</template>

<script>
import TheNavbarHeader from '@/layout/TheNavbarHeader.vue';
import TheNavbarBody from '@/layout/TheNavbarBody.vue';

export default {
  name: 'TheNavbar',
  components: {
    TheNavbarBody, TheNavbarHeader,
  },
  computed: {
    classContainer() {
      return { 'lg:hidden': !this.$store.getters.displayNavbar };
    },
  },
  methods: {
    hideOnMobile() {
      if (this.$store.getters.displayNavbar) this.$store.commit('hideMobileNavbar');
    },
  },
};
</script>
