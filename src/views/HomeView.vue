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
			<li>
				<router-link to="Home ">
					<span class="icon-home text-4xl"> </span>
				</router-link>
			</li>
			<li>
				<router-link to="Cart">
					<span class="icon-shopping-cart text-4xl"></span>
				</router-link>
			</li>
		</ul>
	</nav>
	<header class="py-32 bg-secondColor">
		<div class="container flex justify-center items-center">
			<div class="lg:flex justify-between w-full items-center">
				<div class="image mx-auto lg:mx-0">
					<img
						src="../assets/images/main.svg"
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
						>menu 📋</router-link
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
				class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
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
	<div class="contact py-28">
		<div class="container">
			<h1
				class="text-center font-FamilyHeader text-mainColor mb-12 capitalize"
			>
				contact us
			</h1>
			<div class="flex lg:flex-row flex-col">
				<div class="map lg:pr-10 lg:w-8/12 w-full lg:m-0 mb-4">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.720137452355!2d30.843567124650388!3d29.31988395253641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14597922f48def13%3A0xbc2a9a389aabdd6d!2z2YPYsdmK2Kgg2KfZhNio2KfYtNin!5e0!3m2!1sar!2seg!4v1682203086532!5m2!1sar!2seg"
						width="100%"
						height="640px"
						class="lg:h-full"
						style="border: 0"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div class="info lg:w-4/12 w-full">
					<div
						class="items border-[#e9e9e9] border p-12 rounded-xl group hover:border-mainColor transition-colors duration-700"
					>
						<div class="flex items-center">
							<div
								class="flex justify-center items-center p-4 rounded-xl group-hover:bg-thirdColor bg-mainColor text-white mr-4 transition-colors duration-700"
							>
								dd
							</div>
							<div>
								<h3
									class="font-FamilyHeader text-xl capitalize"
								>
									phone
								</h3>
								<p class="mt-4">01025160160</p>
							</div>
						</div>
					</div>
					<div
						class="items my-8 border-[#e9e9e9] border p-12 rounded-xl group hover:border-mainColor transition-colors duration-700"
					>
						<div class="flex items-center">
							<div
								class="flex justify-center items-center p-4 rounded-xl group-hover:bg-thirdColor bg-mainColor text-white mr-4 transition-colors duration-700"
							>
								dd
							</div>
							<div>
								<h3
									class="font-FamilyHeader text-xl capitalize"
								>
									email
								</h3>
								<p class="mt-4">
									example@gmail.com
								</p>
							</div>
						</div>
					</div>

					<div
						class="items border-[#e9e9e9] border p-12 rounded-xl group hover:border-mainColor transition-colors duration-700"
					>
						<div class="flex items-center">
							<div
								class="flex justify-center items-center p-4 rounded-xl group-hover:bg-thirdColor bg-mainColor text-white mr-4 transition-colors duration-700"
							>
								dd
							</div>
							<div>
								<h3
									class="font-FamilyHeader text-xl capitalize"
								>
									address
								</h3>
								<p class="mt-4">
									كريب الباشا بالفيوم ،
									بجوار ڤيلا المحافظ وبالقرب
									من نادي المحافظة
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<form action="" class="mt-10">
				<div class="flex gap-4 md:flex-row flex-col">
					<input
						type="text"
						placeholder="Name"
						class="input-style"
					/>
					<input
						type="text"
						placeholder="Email"
						class="input-style"
					/>
					<input
						type="text"
						placeholder="Phone"
						class="input-style"
					/>
				</div>

				<textarea
					name=""
					id=""
					placeholder="Message"
					class="border-[#e9e9e9] border p-4 rounded-xl focus:border-mainColor transition-colors duration-700 outline-none w-full mt-4 h-60"
				></textarea>
				<button
					class="bg-mainColor hover:bg-thirdColor text-white capitalize font-FamilyHeader rounded-full sm:w-52 w-full transition-colors duration-500 p-4 text-xl mt-4"
				>
					send
				</button>
			</form>
		</div>
	</div>
	<footer class="bg-mainColor p-8 text-center">
		Copyright © 2023 by
		<a href="https://my-website-o8pb.onrender.com/" class="underline"
			>Nabil</a
		>
		. All Rights Reserved.
	</footer>
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

.services,
.contact,
footer {
	direction: ltr;
}
</style>
