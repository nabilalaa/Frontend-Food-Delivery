import { createStore } from "vuex";
import axios from "axios";

let cart = sessionStorage.getItem("cart");
export default createStore({
	state: {
		cart: cart ? JSON.parse(cart) : [],
		orders: [],
		meals: [],
		count: 6,
		categories: [],
	},
	getters: {
		subtotal(state) {
			state.cart.forEach((cart) => {
				console.log(cart.quantity * cart.price);
			});
		},
	},
	mutations: {
		AddOrder(state, payload) {
			state.cart.push(payload);
			console.log(this.state.cart);
			this.commit("saveData");
		},
		saveData(state) {
			sessionStorage.setItem("cart", JSON.stringify(state.cart));
		},
		deleteItem(state, e) {
			state.cart.splice(e, 1);
			sessionStorage.setItem("cart", JSON.stringify(state.cart));
		},
	},
	actions: {
		Meals(context, count) {
			axios.get(
				`https://api-restaurant-h0dh.onrender.com/meal`
			).then((response) => {
				this.state.meals = response.data.slice(0, count);
			});
		},
		categories() {
			axios.get(
				`https://api-restaurant-h0dh.onrender.com/category`
			).then((response) => {
				this.state.categories = response.data;
			});
		},
	},
});
