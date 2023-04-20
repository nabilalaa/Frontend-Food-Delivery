<template>
	<ModelBox
		bg="#FE9801"
		tcolor="#FFF"
		:details="detailsMeal"
		v-if="showmodel"
		@close-model="closeModel"
	/>
	<nav class="p-8 bg-secondColor">
		<ul class="flex justify-evenly flex-row-reverse capitalize text-xl">
			<li><router-link to="Home">home</router-link></li>
			<li><router-link to="Cart">cart</router-link></li>
		</ul>
	</nav>
	<header class="py-32 bg-secondColor">
		<div class="container flex justify-center items-center">
			<div class="lg:flex justify-between w-full items-center">
				<div class="image sm:w-96 mx-auto lg:mx-0">
					<img
						src="../assets/images/logo.png"
						class="w-full h-full"
						alt=""
					/>
				</div>

				<main style="direction: ltr" class="mt-8">
					<h1
						class="text-5xl text-center lg:text-left font- text-mainColor font-FamilyHeader"
					>
						Taste The Food That Surprise you
					</h1>
					<p class="text-center lg:text-left my-8">
						Lorem ipsum dolor sit amet consectetur,
						adipisicing elit. Pariatur, obcaecati
					</p>
					<router-link
						to="menu"
						class="font-FamilyHeader capitalize border border-thirdColor w-full sm:w-60 rounded-md flex justify-center items-center p-4 text-xl hover:bg-thirdColor hover:text-white transition-all"
						>menu</router-link
					>
				</main>
			</div>
		</div>
	</header>
	<div class="dishes py-32">
		<div class="container">
			<h1
				class="text-center font-FamilyHeader text-mainColor mb-12"
			>
				Our Awesome Services
			</h1>
			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
			>
				<CardSection
					v-for="meal in meals"
					:key="meal"
					:name="meal.name"
					:image="meal.image"
					:price="meal.price"
					@details="details"
					@order="add_order"
				/>
			</div>
		</div>
	</div>
	<div class="services bg-secondColor py-32">
		<div class="container">
			<h1
				class="text-center font-FamilyHeader text-mainColor mb-12"
			>
				Our Awesome Services
			</h1>
			<div class="flex flex-wrap justify-center gap-y-10">
				<div
					class="inner text-center px-5 w-full sm:w-6/12 lg:w-4/12"
				>
					<div class="icon w-24 m-auto">
						<img
							src="https://cdn.shopify.com/s/files/1/0620/0708/3249/files/service-icon-1_300x300.png?v=1641889244"
							alt=""
						/>
					</div>
					<h2 class="my-4 font-FamilyHeader text-2xl">
						Quality Food
					</h2>
					<p class="leading-7">
						Qectus urna duis convallis convallis tellus
						id. Nisl tincidunt eget nullam non nisie
					</p>
				</div>
				<div
					class="inner text-center px-5 w-full sm:w-6/12 lg:w-4/12"
				>
					<div class="icon w-24 m-auto">
						<img
							src="https://cdn.shopify.com/s/files/1/0620/0708/3249/files/service-icon-2_300x300.png?v=1641889244"
							alt=""
						/>
					</div>
					<h2 class="my-4 font-FamilyHeader text-2xl">
						Super Taste
					</h2>
					<p class="leading-7">
						Qectus urna duis convallis convallis tellus
						id. Nisl tincidunt eget nullam non nisie
					</p>
				</div>
				<div
					class="inner text-center px-5 w-full sm:w-6/12 lg:w-4/12"
				>
					<div class="icon w-24 m-auto">
						<img
							src="//cdn.shopify.com/s/files/1/0620/0708/3249/files/service-icon-3_f4d08a5f-f7ad-41d7-9195-6af8f387652f_300x300.png?v=1641891150"
							alt=""
						/>
					</div>
					<h2 class="my-4 font-FamilyHeader text-2xl">
						Fast Delivery
					</h2>
					<p class="leading-7">
						Qectus urna duis convallis convallis tellus
						id. Nisl tincidunt eget nullam non nisie
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="contact">
		<form action="">
			<input type="text" />
			<input type="text" />
			<textarea name="" id=""></textarea>
		</form>
	</div>
</template>

<script>
import CardSection from "@/components/CardSection.vue";
import ModelBox from "@/components/ModelBox.vue";

import axios from "axios";

export default {
	data() {
		return {
			orders: [],
			meals: [],
			detailsMeal: {},
			showmodel: false,
		};
	},
	components: {
		CardSection,
		ModelBox,
	},
	methods: {
		closeModel() {
			this.showmodel = false;
			document.body.style.overflow = "auto";
		},
		getMeal() {
			axios.get(
				`https://api-restaurant-h0dh.onrender.com/meal`
			).then((response) => {
				this.meals = response.data.slice(0, 4);
			});
		},
		details(value) {
			this.showmodel = true;
			document.body.style.overflow = "hidden";
			this.detailsMeal = value;
		},
		add_order(value) {
			this.orders.push(value);

			// sessionStorage.setItem("data", JSON.stringify(this.orders));
			if (sessionStorage.getItem("data")) {
				this.showCart = true;
			}
		},
	},
	mounted() {
		this.getMeal();
	},
};
</script>

<style>
nav {
	font-family: "Racing Sans One", cursive;
}

.services {
	direction: ltr;
}
</style>
