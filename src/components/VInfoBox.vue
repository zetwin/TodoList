<template>
  <div class='flex flex-col items-center text-center'>
    <div class='flex w-32 h-32 mb-5 rounded-full bg-black-5'>
      <VSvg
        :name='icon'
        class='w-20 h-20 m-auto text-black-10'
      />
    </div>
    <div
      v-if='title'
      class='text-9 text-theme'
    >
      {{title}}
    </div>
    <div
      v-if='subtitle'
      class='text-7 text-black-20'
    >
      {{subtitle}}
    </div>
    <div
      v-if='text'
      class='mt-1 text-black-30'
    >
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VInfoBox',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>
