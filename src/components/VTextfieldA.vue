<template>
  <label>
    <div class='flex items-center'>
      <VSvg
        v-if='icon'
        :name='icon'
        class='flex-shrink-0 w-6 h-6'
        :class='onFocus ? "text-theme" : "text-black-20"'
      />
      <input
        :type='type'
        :placeholder='placeholder'
        :value='value'
        class='flex-grow h-9 placeholder-black-20 font-secondary text-6'
        :class='{"px-3": icon}'
        @input='$emit("input", $event.target.value)'
        @focus='toggleFocus'
        @blur='toggleFocus'
      />
    </div>
    <div class='border-t'>
      <hr
        class='mx-auto -mt-px duration-300 border-t border-theme'
        :class='onFocus ? "w-full" : "w-0"'
      />
    </div>
    <div
      class='mt-1 text-right duration-300 min-h-5 text-error text-4'
      :class='onFocus ? "opacity-0" : "opacity-100"'
    >
      {{textError}}
    </div>
  </label>
</template>

<script>
export default {
  name: 'VTextfieldA',
  props: {
    icon: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
      validator(val) {
        return ['text', 'password'].indexOf(val) !== -1;
      },
    },
    placeholder: {
      type: String,
    },
    textError: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  data: () => ({
    onFocus: false,
  }),
  methods: {
    toggleFocus() {
      this.onFocus = !this.onFocus;
    },
  },
};
</script>
