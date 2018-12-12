import Vue from 'vue'
import Vuex from 'vuex'
import  state from './state'
import  getters from './getters'
import  mutations from './mutations'
import  action from './action'

Vue.use(Vuex)
const  stroe = new Vuex.Store({
  state,
  getters,
  mutations,
  action
})

export default  stroe
