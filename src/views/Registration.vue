<template>
  <TheLayoutSheet>
    <form @submit.prevent='formSubmit'>
      <VTextfieldA
        v-model.trim='$v.name.$model'
        icon='user'
        placeholder='Имя (не обязательно)'
        :textError='textErrorName'
        class='mb-2'
      />
      <VTextfieldA
        v-model.trim='$v.email.$model'
        icon='email'
        placeholder='Email'
        :textError='textErrorEmail'
        class='mb-2'
      />
      <VTextfieldA
        v-model.trim='$v.password.$model'
        icon='lock'
        placeholder='Пароль'
        type='password'
        :textError='textErrorPassword'
        class='mb-2'
      />
      <VButton type='submit'>Зарегистрироваться</VButton>
      <div class='mt-3 text-center'>
        Уже есть аккаунт?
        <router-link to='/login' class='VTextLink'>Войти</router-link>
      </div>
    </form>
  </TheLayoutSheet>
</template>

<script>
import TheLayoutSheet from '@/layout/TheLayoutSheet.vue';
import VTextfieldA from '@/components/VTextfieldA.vue';
import VButton from '@/components/VButton.vue';
import messages from '@/utils/messages';
import {
  email, required, minLength, maxLength,
} from 'vuelidate/lib/validators';

export default {
  name: 'Registration',
  components: {
    VTextfieldA, VButton, TheLayoutSheet,
  },
  validations: {
    name: { maxLength: maxLength(64) },
    email: { email, required, maxLength: maxLength(64) },
    password: { required, minLength: minLength(6), maxLength: maxLength(64) },
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
  }),
  computed: {
    textErrorName() {
      if (this.$v.name.$dirty) {
        if (!this.$v.name.maxLength) return `Макс. длинна имени ${this.$v.name.$params.maxLength.max} символов`;
      }
      return '';
    },
    textErrorEmail() {
      if (this.$v.email.$dirty) {
        if (!this.$v.email.required) return 'Email не должен быть пустым';
        if (!this.$v.email.email) return 'Не правильный email';
        if (!this.$v.email.maxLength) return `Макс. длинна email ${this.$v.email.$params.maxLength.max} символов`;
      }
      return '';
    },
    textErrorPassword() {
      if (this.$v.password.$dirty) {
        if (!this.$v.password.required) return 'Пароль не должен быть пустым';
        if (!this.$v.password.minLength || !this.$v.password.maxLength) return `Пароль должен содержать ${this.$v.password.$params.minLength.min}~${this.$v.password.$params.maxLength.max} символов`;
      }
      return '';
    },
  },
  methods: {
    async formSubmit() {
      if (!this.$v.$invalid) {
        try {
          await this.$store.dispatch('registration', {
            name: this.name,
            email: this.email,
            password: this.password,
          });
          this.$router.push('/dashboard');
          this.$toasted.show('Регистрация выполнена');
        } catch (err) {
          this.$toasted.show(messages[err.code] || 'Что-то пошло не так');
        }
      } else {
        this.$v.$touch();
      }
    },
  },
};
</script>
