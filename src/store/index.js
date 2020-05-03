import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
// let defaultCity = '上海'
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}
export default new Vuex.Store({
  // state: {
  //   city: defaultCity
  // },
  state,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // mutations: {
  //   changeCity (state, city) {
  //     state.city = city
  //     try {
  //       localStorage.city = city
  //     } catch (e) {}
  //   }
  // }
  mutations
})
