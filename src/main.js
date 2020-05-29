import Vue from 'vue';
import Vuelidate from 'vuelidate';
import vClickOutside from 'v-click-outside';
import autosize from 'v-autosize/dist/plugin';
import firebase from 'firebase/app';
import Toasted from 'vue-toasted';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import VSvg from './components/VSvg.vue';
import VScrollContainer from './components/VScrollContainer.vue';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(vClickOutside);
Vue.use(autosize);
Vue.use(Toasted, {
  position: 'bottom-center',
  duration: 3000,
});

Vue.component('VSvg', VSvg);
Vue.component('VScrollContainer', VScrollContainer);

firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
