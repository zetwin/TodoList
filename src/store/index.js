import Vue from 'vue';
import Vuex from 'vuex';
import layout from './layout';
import auth from './auth';
import info from './info';
import tasks from './tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout, auth, info, tasks,
  },
});
