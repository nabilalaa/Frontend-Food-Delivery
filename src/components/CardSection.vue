<template>
	<div class="card flex flex-col">
		<h2>{{ name }}</h2>
		<div class="image">
			<img :src="image" alt="" />
		</div>
		<p>
			{{ desc }}
		</p>
		<div class="flex items-center w-full">
			<div class="price">{{ price }}ج.م</div>
			<div class="quantity">
				<div class="plus" @click="plus">+</div>
				<input
					class="show"
					type="number"
					v-model="meal_quantity"
				/>
				<div class="minus" @click="minus">-</div>
			</div>
        </div>
		<div class="flex" style="margin: 0; justify-content: center">
			<form-button
				BackgroundColor="#CCDA46"
				TextColor="#FFF"
				to=""
				@click.prevent="sendOrder"
				width="12rem"
				display="flex"
			>
				{{ this.buttonText }}
			</form-button>
			<form-button
				BackgroundColor="#CCDA46"
				TextColor="#FFF"
				to=""
				width="2.5rem"
				@click.prevent="details"
				display="flex"
				margin="0 10px 0 0 "
			>
				<span v-html="icon"></span>
			</form-button>
		</div>
	</div>
</template>

<script>
// import axios from "axios";
import FormButton from "@/components/form_components/FormButton.vue";

export default {
	name: "CardSection",
	props: ["name", "desc", "image", "price", "quantity"],

	components: {
		FormButton,
	},

	data() {
		return {
			orders: [],
			icon: '<span class="icon-eye"></span>',
			buttonText: "Add Cart",
			w: "600w",
			meal_name: this.$props.name,
			meal_desc: this.$props.desc,
			meal_quantity: 1,
			meal_price: this.$props.price,
			meal_image: this.$props.image,
		};
	},
	methods: {
		plus() {
			this.meal_quantity += 1;
		},
		minus() {
			if (this.meal_quantity > 1) {
				this.meal_quantity -= 1;
			} else {
				this.meal_quantity = 1;
			}
		},
		sendOrder() {
			let order = {
				name: this.meal_name,
				image: this.meal_image,
				price: this.meal_price,
				quantity: this.meal_quantity,
			};
			// this.orders.push(order);
			this.$store.commit("AddOrder", order);
			// sessionStorage.setItem(
			// 	"cart",
			// 	this.$store.dispatch("AddOrder", order)
			// );
			this.$emit("order");
		},
		details() {
			let order = {
				name: this.meal_name,
				image: this.meal_image,
				price: this.meal_price,
				quantity: this.meal_quantity,
				desc: this.meal_desc,
			};
			console.log(order);
			this.$emit("details", order);
			this.showmodel = !this.showmodel;
			document.body.style.overflow = "hidden";
			this.detailsMeal = order;
		},
	},
};
</script>

<style scoped>
.card {
	padding: 20px 30px;
	background-color: var(--main_color);
	border-radius: 30px;
	box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
	margin-bottom: 25px;
	text-align: center;
}
h2 {
	font-size: 1.4rem;
	text-align: right;
}
.image {
	margin: auto;
	width: 100%;
	text-align: right;
}
p {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin: 20px 0;
	text-align: right;
}
.flex {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 20px;
	gap: 10px;
}
.quantity {
	width: 132px;
	height: 40px;
	display: flex;
	align-items: center;
	font-size: 20px;
	user-select: none;
	background-color: var(--secondary_color);
	border-radius: 10px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.plus {
	width: calc(100% / 3);
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	cursor: pointer;
}

.show {
	width: calc(100% / 3);
	height: 20px;
	border: 0;
	outline: none;
	text-align: center;
	color: var(--main_color);
	background-color: var(--secondary_color);
	font-size: 20px;
	font-weight: bold;
}

.minus {
	height: 50px;
	width: calc(100% / 3);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	cursor: pointer;
}

a span {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
