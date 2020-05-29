<template>
  <main class='flex flex-col flex-grow'>
    <TheMainbarHeader/>
    <TheMainbarBody/>
  </main>
</template>

<script>
import TheMainbarHeader from '@/layout/TheMainbarHeader.vue';
import TheMainbarBody from '@/layout/TheMainbarBody.vue';

export default {
  name: 'TheMainbar',
  components: {
    TheMainbarBody, TheMainbarHeader,
  },
};
</script>
