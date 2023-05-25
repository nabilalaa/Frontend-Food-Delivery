import { createStore } from "vuex";
import axios from "axios";

let cart = localStorage.getItem("cart");
export default createStore({
	state: {
		cart: cart ? JSON.parse(cart) : [],
		orders: [],
		meals: [],
		count: 6,
		categories: [],
		category: "",
	},
	getters: {
		subtotal(state) {
			state.cart.forEach((cart) => {
				console.log(
					cart.attributes.quantity + cart.attributes.price
				);
			});
		},
		filter(state) {
			return state.meals.filter(
				(category) =>
					category.category ==
					localStorage.getItem("category")
			);
		},
	},
	mutations: {
		AddOrder(state, payload) {
			state.cart.push(payload);
			this.commit("saveData");
		},
		saveData(state) {
			localStorage.setItem("cart", JSON.stringify(state.cart));
		},
		deleteItem(state, e) {
			state.cart.splice(e, 1);
			localStorage.setItem("cart", JSON.stringify(state.cart));
			state.cart.push(JSON.parse(state.cart));
		},
		// MEALS(state, ) {
		//     state.meals =
		// }
	},
	actions: {
		Meals() {
			axios.get(
				`http://localhost:1337/api/meals?populate=category`
			).then((response) => {
				this.state.meals = response.data.data;
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
