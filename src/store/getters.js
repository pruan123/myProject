import state from "./state";

export default {
  getColor: state => state.colors.filter(item => item === 'red'),
  getPrice: state => state.totalPrice
}
