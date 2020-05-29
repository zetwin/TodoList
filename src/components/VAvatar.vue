<template>
  <img
    :src='src'
    class='rounded-full w-7 h-7'
  />
</template>

<script>
import avatarDefault from '@/assets/avatar.png';

export default {
  name: 'VAvatar',
  props: {
    src: {
      type: String,
      default: avatarDefault,
    },
  },
};
</script>
