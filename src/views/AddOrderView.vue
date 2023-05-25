<template>
	<router-link
		class="cart z-50 text-xl w-[50px] h-[50px] flex justify-center items-center bg-mainColor fixed top-1/2 text-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-xl"
		to="cart"
		v-show="showCart"
	>
		<span class="icon-shopping-cart"></span>
	</router-link>
	<ModelBox
		bg="#FE9801"
		tcolor="#FFF"
		:details="detailsMeal"
		v-if="showmodel"
		@close-model="closeModel"
	/>
	<section style="direction: rtl" class="py-20">
		<div class="container">
			<h1>اضافة الطلبات</h1>
			<div
				class="search flex items-center relative mb-4"
				style="direction: rtl"
			>
				<span
					data-v-3ec79cde=""
					class="icon-search absolute block mr-4 z-50"
				></span>
				<input
					type="text"
					class="border outline-mainColor p-4 pr-10 w-full"
					v-model="meal"
					@change="searchMeal"
				/>
			</div>
			<div
				v-if="resultsMeal.length > 0"
				class="items w-full rounded-md border overflow-y-scroll h-96"
			>
				<div
					class="item flex p-4 justify-between items-center border-b last-of-type:border-0"
					v-for="item in resultsMeal"
					:key="item.id"
				>
					<div class="info flex">
						<div class="ml-4">
							{{ item.attributes.name }}
						</div>
						<div>{{ item.attributes.price }} ج.م</div>
					</div>
					<div class="flex">
						<button
							class="text-white bg-mainColor px-6 py-4 rounded-lg hover:bg-thirdColor transition"
						>
							اضافة
						</button>
						<button
							class="text-white bg-mainColor px-6 py-4 rounded-lg hover:bg-thirdColor transition mr-4"
						>
							<span class="icon-eye"></span>
						</button>
					</div>
				</div>
			</div>
			<!-- {{ this.filterMeal }} -->
			<div
				v-else
				class="items w-full rounded-md border overflow-y-scroll h-96"
			>
				<div
					class="item flex p-4 justify-between items-center border-b last-of-type:border-0"
					v-for="item in Meals"
					:key="item.id"
				>
					<div class="info flex">
						<div class="ml-4">
							{{ item.attributes.name }}
						</div>
						<div>{{ item.attributes.price }} ج.م</div>
					</div>
					<div class="flex">
						<button
							@click.prevent="addOrder(item.id)"
							class="text-white bg-mainColor px-6 py-4 rounded-lg hover:bg-thirdColor transition"
						>
							اضافة
						</button>
						<button
							@click.prevent="details(item.id)"
							class="text-white bg-mainColor px-6 py-4 rounded-lg hover:bg-thirdColor transition mr-4"
						>
							<span class="icon-eye"></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from "axios";
import ModelBox from "@/components/ModelBox.vue";

export default {
	components: {
		ModelBox,
	},
	data() {
		return {
			resultsMeal: [],
			meal: "",
			detailsMeal: [],
			showmodel: false,
			showCart: false,
		};
	},
	computed: {
		filterMeal() {
			return this.$store.getters.filter;
		},
		Meals() {
			return this.$store.state.meals;
		},
	},
	methods: {
		closeModel() {
			this.showmodel = false;
			document.body.style.overflow = "auto";
		},
		async searchMeal() {
			await axios
				.get(
					`http://localhost:1337/api/meals?filters[name][$contains]=${
						this.meal
					}&filters[category][name][$eq]=${sessionStorage.getItem(
						"category"
					)}`
				)
				.then((response) => {
					this.resultsMeal = response.data.data;
				});
		},
		details(id) {
			axios.get(
				`http://localhost:1337/api/meals/${id}?populate=image`
			).then((response) => {
				this.detailsMeal = response.data.data;
				this.showmodel = true;
			});
		},
		addOrder(id) {
			axios.get(
				`http://localhost:1337/api/meals/${id}?populate=image`
			).then((response) => {
				this.$store.commit("AddOrder", response.data.data);
			});
			if (localStorage.getItem("cart").length > 0) {
				this.showCart = true;
			} else {
				this.showCart = false;
			}
		},
	},
	mounted() {
		this.$store.dispatch("Meals");
		// console.log(this.$store.state.cart);
		if (localStorage.getItem("cart") == "[]") {
			this.showCart = false;
		} else {
			this.showCart = true;
		}
	},
};
</script>

<style></style>
