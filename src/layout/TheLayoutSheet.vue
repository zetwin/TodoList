<template>
  <div class='flex flex-col items-center justify-center min-h-full px-3 py-12 bg-dim'>
    <VSvg
      name='logo'
      class='w-16 h-16 mb-9 text-theme-accent'
    />
    <div class='w-full px-12 py-10 bg-white border rounded max-w-100'>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheLayoutSheet',
};
</script>
