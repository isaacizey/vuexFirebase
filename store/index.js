//integration of vuex with firebase

import Vue from "vue";
import Vuex from "vues";

Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

//initialize firebase

var firebaseConfig = {};
const firebaseApp = firebase.initializeApp(firebaseConfig);

//firebase root
var productRef = firebaseApp.database().ref("");

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [createPersistedState()],
});
