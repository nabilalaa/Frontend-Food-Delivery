<template>
	<ModelBox
		bg="#FE9801"
		tcolor="#FFF"
		:details="detailsMeal"
		v-if="showmodel"
		@close-model="closeModel"
	/>
	<router-link class="cart" to="cart" v-if="showCart">
		<span class="icon-shopping-cart"></span>
	</router-link>
	<section class="menu">
		<div class="container_home">
			<div class="options">
				<form>
					<input
						type="text"
						placeholder="search"
						v-model="search"
					/>
					<button @click.prevent="searchMeal">
						<span class="icon-search"></span>
					</button>
				</form>
				<select name="category" id="" @change="choose">
					<option value="" selected disabled>اصناف</option>
					<option value="#All">الكل</option>
					<option
						v-for="category in categories"
						:key="category"
						:value="category.nameEnglish"
					>
						{{ category.nameArabic }}
					</option>
				</select>
				<DropMenu />
			</div>
			<div class="menu_items" v-if="this.searchMeals.length == 0">
				<CardSection
					v-for="meal in Meals"
					:key="meal"
					:id="meal.category"
					:name="meal.name"
					:desc="meal.desc"
					:image="meal.image"
					:price="meal.price"
					:quantity="meal.quantity"
					@order="add_order"
					@details="details"
				/>
			</div>
			<div class="menu_items" v-else>
				<CardSection
					v-for="meal in searchMeals"
					:key="meal"
					:id="meal.categoryArabic"
					:name="meal.name"
					:desc="meal.desc"
					:image="meal.image"
					:price="meal.price"
					:quantity="meal.quantity"
					@order="add_order"
					@details="details"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import axios from "axios";
import CardSection from "@/components/CardSection.vue";
import ModelBox from "@/components/ModelBox.vue";
import DropMenu from "@/components/DropdownMenu.vue";

export default {
	name: "HomeView",
	components: {
		CardSection,
		ModelBox,
		DropMenu,
	},
	data() {
		return {
			categories: [],
			meals: this.$store.state.meals,
			photo: null,
			search: "",
			searchMeals: [],
			currentPage: 1,
			count: 6,
			showCart: false,
			detailsMeal: {},
			showmodel: false,
		};
	},
	methods: {
		closeModel() {
			this.showmodel = false;
			document.body.style.overflow = "auto";
		},
		choose(e) {
			if (e.target.value == "#All") {
				document.querySelectorAll(".card").forEach((ele) => {
					ele.style.display = "block";
				});
			} else {
				document.querySelectorAll(".card").forEach((ele) => {
					ele.style.display = "none";
				});
				document
					.querySelectorAll("#" + e.target.value)
					.forEach((ele) => {
						ele.style.display = "block";
					});
			}
		},
		async searchMeal() {
			if (this.search !== "") {
				await axios
					.post(
						`https://api-food-delivery-production.up.railway.app/meal?search=${this.search}`
					)
					.then((response) => {
						this.searchMeals = response.data;
					});
			} else {
				let data = await axios.get(
					"https://api-food-delivery-production.up.railway.app/meal"
				);
				this.searchMeals = data.data;
			}
		},
		add_order() {
			if (sessionStorage.getItem("cart").length > 0) {
				this.showCart = true;
			}
		},
		details(value) {
			this.showmodel = true;
			document.body.style.overflow = "hidden";
			this.detailsMeal = value;
		},

		getCategory() {
			axios.get(
				"https://api-restaurant-h0dh.onrender.com/category"
			).then((response) => {
				this.categories = response.data;
			});
		},
		onScroll() {
			const endOfPage =
				window.innerHeight + window.pageYOffset >=
				document.body.offsetHeight;

			if (endOfPage) {
				this.$store.dispatch(
					"Meals",
					this.$store.state.count + 3
				);
			}
		},
	},
	mounted() {
		this.getCategory();
		this.$store.dispatch("Meals", this.$store.state.count);

		if (sessionStorage.getItem("data")) {
			this.showCart = true;
		}

		window.addEventListener("scroll", this.onScroll);
		window.addEventListener("touchmove", this.onScroll);
	},
	created() {},

	computed: {
		Meals() {
			return this.$store.state.meals;
		},
	},
};
</script>

<style scoped>
.cart {
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--main_color);
	position: fixed;
	top: 50%;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	border-radius: 10px;
	color: #fff;
	font-size: 20px;
}
.menu {
	padding: 30px 0;
	background: #f4eec7;
}
.options {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 50px;
	flex-wrap: wrap;
}
form {
	position: relative;
	width: 300px;
	height: 30px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-radius: 10px;
}

form input {
	width: 300px;
	height: 30px;
	padding: 0 10px;
	outline: 0;
	border: 0;
	position: absolute;
	width: 90%;
	height: 100%;
	font-size: small;
	border-radius: 0 10px 10px 0;
}

form button {
	position: absolute;
	width: 10%;
	border: 0;
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	left: 0;
	cursor: pointer;
	background-color: var(--main_color);
	color: #fff;
	border-radius: 10px 0 0 10px;
}

select {
	min-width: 200px;
	border: 0;
	outline: 0;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	padding: 10px;
}

.menu_items {
	display: grid;
	grid-template-columns: repeat(3, minmax(200px, 1fr));
	grid-gap: 20px;
}

@media (max-width: 576px) {
	.menu_items {
		grid-template-columns: repeat(1, minmax(200px, 1fr));
	}
	form {
		margin-bottom: 10px;
	}
	select,
	form {
		width: 100%;
	}
}
@media (min-width: 577px) and (max-width: 768px) {
	.menu_items {
		grid-template-columns: repeat(2, minmax(200px, 1fr));
	}
}
@media (min-width: 769px) and (max-width: 992px) {
	.menu_items {
		grid-template-columns: repeat(2, minmax(200px, 1fr));
	}
}

@media (min-width: 993px) and (max-width: 1199px) {
	.menu_items {
		grid-template-columns: repeat(3, minmax(200px, 1fr));
	}
}
</style>
