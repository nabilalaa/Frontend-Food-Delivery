import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";

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
		path: "/Cart",
		name: "Cart",
		component: CartView,
	},
	{
		path: "/Checkout",
		name: "Checkout",
		component: CheckoutView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
