import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    // Mutations are used for syncronized operations
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    removeRobotFromCart(state, cartIndex) {
      state.cart.splice(cartIndex, 1);
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
});
