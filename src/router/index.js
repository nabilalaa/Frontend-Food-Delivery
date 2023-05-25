import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import MenuView from "@/views/MenuView.vue";

import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import AddOrderView from "@/views/AddOrderView.vue";

import NotFound from "@/views/NotFound.vue";

const routes = [
	{
		path: "/:NotFound(.*)*",
		component: NotFound,
	},
	{
		path: "/",
		name: "Home",
		component: HomeView,
	},
	{
		path: "/Menu",
		name: "Menu",
		component: MenuView,
	},
	{
		path: "/Cart",
		name: "Cart",
		component: CartView,
	},
	{
		path: "/Checkout",
		name: "Checkout",
		component: CheckoutView,
	},

	{
		path: "/AddOrder",
		name: "AddOrder",
		component: AddOrderView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
