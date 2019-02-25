import Vue from "vue"
import Vuex from "vuex"
import todos from "./models/todos"
import getters from './getters';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos
  },
  getters
})