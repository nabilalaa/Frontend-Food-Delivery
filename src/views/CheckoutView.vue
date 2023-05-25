<template>
	<section>
		<router-link class="cart" to="cart">
			<span class="icon-shopping-cart"></span>
		</router-link>
		<div class="checkout">
			<form>
				<FormInput label="الاسم بالكامل *" v-model="name" />
				<FormInput label="العنوان *" v-model="address" />
				<FormInput label="المحافظة *" v-model="city" />
				<FormInput label="رقم الموبيل *" v-model="phone" />
				<FormInput label="الايميل *" v-model="email" />
				<FormTextarea label="الملاحظات" v-model="notes" />
				<h2>طلبك</h2>
				<table>
					<thead>
						<tr>
							<th>الطلب</th>
							<th>المجموع</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="order in orders" :key="order">
							<td>
								{{ order.name }}

								{{ " ×" + order.quantity }}
							</td>
							<td>
								{{
									order.price *
									order.quantity
								}}
							</td>
						</tr>
					</tbody>
				</table>
				<FormButton
					to=""
					text="تسليم الطلب"
					BackgroundColor="var(--main_color)"
					TextColor="#FFF"
					width="clamp(10px,300px,100%)"
					display="flex"
					margin="auto"
					@click.prevent="sendOrder"
				/>
			</form>
		</div>
	</section>
</template>

<script>
import FormButton from "@/components/form_components/FormButton.vue";
import FormInput from "@/components/form_components/FormInput.vue";
import FormTextarea from "@/components/form_components/FormTextarea.vue";

import axios from "axios";

export default {
	data() {
		return {
			orders: [],
			ordersName: [],
			name: "adasd",
			address: "asdasd",
			city: "asd",
			phone: "111111111111",
			email: "nabilalaa06@gmail.com",
			notes: "",
		};
	},

	methods: {
		async sendOrder() {
			if (
				this.name &&
				this.address &&
				this.phone.length == 12 &&
				this.email
			) {
				try {
					await axios
						.post(
							"https://api-food-delivery-production.up.railway.app/order",
							{
								name: this.name,
								address:
									this.address +
									" - " +
									this.city,
								number: this.phone,
								email: this.email,
								notes: this.notes,
								order: String(
									this.ordersName
								).replaceAll(",", "  -  "),
							}
						)
						.then((response) => {
							if (response.status > 200) {
								alert("تم التسليم بنجاح");
								this.$router.push("/");
								localStorage.clear();
							}
						})
						.catch((error) => {
							if (error.response.data.email) {
								alert("ادخل ايميل صالح");
							} else if (
								error.response.status == 500
							) {
								alert("ادخل رقم موبيل صالح");
							}
						});
				} catch (error) {
					console.log(error);
				}
			} else {
				alert("تأكد من صحة البيانات");
			}
		},
	},
	components: {
		FormInput,
		FormButton,
		FormTextarea,
	},
	mounted() {
		let data = JSON.parse(sessionStorage.getItem("cart"));
		this.orders = data;
		data.forEach((e) => {
			this.ordersName.push(e.name);
		});
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
section {
	background-color: #f4eec7;
	padding: 120px 0;
	min-height: 100vh;
}
.checkout {
	background-color: #fff;
	width: 93%;
	margin: auto;
	padding: 40px;
	border-radius: 40px;
}
table {
	width: 100%;
	margin: 20px auto;
	border-collapse: collapse;
	user-select: none;
}
thead {
	background-color: var(--main_color);
	color: #fff;
}

thead tr {
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 40px;
}
tbody tr {
	display: flex;

	justify-content: space-between;
	text-align: center;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid #00000012;
	position: relative;
}
</style>
