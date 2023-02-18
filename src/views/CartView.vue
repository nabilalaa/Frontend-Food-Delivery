<template>
	<router-link class="home" to="/">
		<span class="icon-home"></span>
	</router-link>
	<div class="nav-mobile">
		<ul class="links-mobile">
			<li class="main-link">
				<router-link to="/">
					<span class="icon-home"></span>
				</router-link>
			</li>
		</ul>
	</div>
	<div class="cart-section">
		<div class="cart">
			<table v-if="this.cart_items.length !== 0">
				<thead>
					<tr>
						<th></th>
						<th>الطلب</th>
						<th>سعر</th>
						<th>الكمية</th>
						<th>المجموع</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(i, index) in cart_items"
						:key="(i, index)"
					>
						<td>
							<div class="image">
								<img :src="i.image" alt="" />
							</div>
						</td>

						<td>
							{{ i.name }}
						</td>

						<td>{{ i.price }}ج.م</td>
						<td>
							<input
								class="quantity"
								type="number"
								name=""
								id=""
								min="1"
								v-model="i.quantity"
								@change="ordertotal"
							/>
						</td>
						<td class="subtotal">
							<input
								type="number"
								name=""
								:value="i.quantity * i.price"
							/>
						</td>
						<div
							class="remove"
							@click="deleteItem(index)"
						>
							<span class="icon-x"></span>
						</div>
					</tr>
				</tbody>
				<div class="total">
					<h3>ملخص الدفع</h3>

					<div class="flex">
						<h4>المجموع</h4>
						<div>
							<input
								type="number"
								v-model="total"
							/>
						</div>
					</div>
					<div class="flex">
						<h4>رسوم التوصيل</h4>
						<div class="value"></div>
					</div>
					<div class="flex">
						<h4>قيمة الطلب</h4>
						<div class="value"></div>
					</div>
				</div>
				<FormButton
					width="300px"
					center="auto"
					text="تفيذ الطلب"
					BackgroundColor="#fe9801"
					TextColor="#FFF"
					to="checkout"
					display="flex"
					margin="auto"
				/>
			</table>

			<div class="msg" v-else-if="this.cart_items.length == 0">
				لايوجد طلبات
			</div>
		</div>
	</div>
</template>

<script>
import FormButton from "@/components/form_components/FormButton.vue";

export default {
	components: {
		FormButton,
	},
	data() {
		return {
			total: 0,
			cart_items: [],
			backgroundImage:
				'url("https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/featured_image_shop.jpg")',
		};
	},
	methods: {
		ordertotal() {
			console.log(document.querySelectorAll(".subtotal input"));
			let list = [];

			Array.from(
				document.querySelectorAll(".subtotal input")
			).forEach((e) => {
				list.push(Number(e.value));
			});
			var sum = list.reduce(function (a, b) {
				return a + b;
			}, 0);

			this.total = sum;
		},
		deleteItem(e) {
			this.cart_items.splice(e, 1);

			sessionStorage.setItem(
				"data",
				JSON.stringify(this.cart_items)
			);
			this.$router.go(0);
		},
	},
	mounted() {
		let data = JSON.parse(sessionStorage.getItem("data"));
		console.log(data);
		this.cart_items = data;
		try {
			let list = [];

			data.forEach((e) => {
				list.push(Number(e.price * e.quantity));
			});
			var sum = list.reduce(function (a, b) {
				return a + b;
			}, 0);
			this.total = sum;
		} catch (error) {
			console.log(error);
		}
	},
};
</script>

<style scoped>
.nav-mobile {
	display: none;
}
.home {
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fe9801;
	position: fixed;
	top: 50%;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	border-radius: 10px;
	color: #fff;
	font-size: 20px;
}
.cart-section {
	background-color: #f4eec7;
	padding: 120px 0;
	min-height: 100vh;
}
.cart {
	background-color: #fff;
	width: 93%;
	margin: auto;
	padding: 40px;
	border-radius: 40px;
}

table {
	width: 100%;
	margin: auto;
	border-collapse: collapse;
	user-select: none;
}

thead tr {
	background: #fe9801;
	color: #fff;

	padding: 20px;
	border-radius: 40px;
	display: flex;
	/* grid-template-columns: repeat(5, 1fr); */
}
thead tr th {
	width: 25%;
}

thead tr th:first-child {
	width: 15%;
}
thead tr th:nth-child(2) {
	text-align: right;

	/* grid-column: 1/3; */
}

tbody tr {
	display: flex;
	/* display: grid;
	grid-template-columns: repeat(6, 1fr); */
	text-align: center;
	align-items: center;
	padding: 40px 0;
	border-bottom: 1px solid #00000012;
	position: relative;
}

tbody tr td {
	width: 25%;
}

tbody tr td:first-child {
	width: 15%;
	/* grid-column: 1/3;
	grid-column: 1/4; */
}
tbody tr td:nth-child(2) {
	text-align: right;
}

tbody tr td:last-child {
	text-align: left;
}

.image {
	width: 100px;
	height: 68px;
	margin: auto;
}

.remove {
	position: absolute;
	right: 0;
	bottom: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
.remove span {
	transition: 0.3s;
}
.remove span:hover {
	color: #fe9801;
}

.name {
	margin-right: 20px;
}
.quantity {
	width: 90px;
	height: 40px;
	border-radius: 40px;
	border: 2px solid #0000001a;
	outline: 0;
	padding: 20px;
	transition: 0.3s;
}
.quantity:hover {
	border-color: #fe9801;
}

h3 {
	margin-bottom: 30px;
	padding: 20px 0;
	border-bottom: 1px solid #00000012;
}
.flex {
	margin-bottom: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.msg {
	padding: 10px;
}

.subtotal input {
	border: 0;
	outline: 0;
	pointer-events: none;
	width: 90px;
}

.total input {
	border: 0;
	outline: 0;
	pointer-events: none;
	width: 90px;
}

@media (max-width: 576px) {
	.home {
		display: none;
	}
	.main h1 {
		font-size: 10vw;
	}
	.main p {
		font-size: 10vw;
	}
	table {
		display: block;
	}
	thead {
		display: none;
	}
	tbody {
		display: block;
	}

	tbody tr {
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	tbody tr td {
		width: 100% !important;
		text-align: right;
		margin-top: 20px;
	}
	tbody tr > td:nth-child(2):before {
		content: "الطلب : ";
		font-weight: bold;
		color: #fe9801;
	}
	tbody tr > td:nth-child(3):before {
		content: "السعر : ";
		font-weight: bold;
		color: #fe9801;
	}
	tbody tr > td:nth-child(4):before {
		content: "الكمية : ";
		font-weight: bold;
		color: #fe9801;
	}
	tbody tr > td:nth-child(5):before {
		content: "المجموع : ";
		font-weight: bold;
		color: #fe9801;
	}
	.image {
		width: 100%;
		height: auto;
	}
	button {
		width: 100% !important;
	}
	.remove {
		right: 95% !important;
		bottom: 90% !important;
		font-size: 25px;
	}
	.nav-mobile {
		background-color: var(--main_color);
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 999;
		display: block;
		padding: 20px 10px;
	}

	.links-mobile {
		display: flex;
		justify-content: center;
	}
	.links-mobile li {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30px;
	}
	.links-mobile li a {
		color: #000;
		display: flex;
	}

	.main-link {
		border-radius: 50%;
		background-color: #f4eec7;
		width: 70px !important;
		height: 70px;
		margin-top: -40px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
}
@media (min-width: 577px) and (max-width: 768px) {
	/* .home {
		display: none;
	} */
	.main h1 {
		font-size: 8vw;
		color: #fff;
	}
	.main p {
		font-size: 8vw;
	}
	.table {
		display: block;
	}
	thead {
		display: none;
	}
	tbody {
		display: block;
	}

	tbody tr {
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	tbody tr td {
		width: 100% !important;
		text-align: right;
		margin-top: 20px;
	}
	tbody tr > td:nth-child(2):before {
		content: "الطلب : ";
		font-weight: bold;
		color: #fe9801;
	}
	tbody tr > td:nth-child(3):before {
		content: "السعر : ";
		font-weight: bold;
		color: #fe9801;
	}
	tbody tr > td:nth-child(4):before {
		content: "الكمية : ";
		font-weight: bold;
		color: #fe9801;
	}
	tbody tr > td:nth-child(5):before {
		content: "المجموع : ";
		font-weight: bold;
		color: #fe9801;
	}
	.image {
		width: 50%;
		height: auto;
	}
	button {
		width: 100% !important;
	}
	.remove {
		right: 95% !important;
		bottom: 90% !important;
		font-size: 25px;
	}
}
@media (min-width: 769px) and (max-width: 992px) {
	.main h1 {
		font-size: 6vw;
		color: #fff;
	}
	.main p {
		font-size: 6vw;
	}
	.table {
		display: block;
	}
	thead {
		display: none;
	}
	tbody {
		display: block;
	}

	tbody tr {
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	tbody tr td {
		width: 100% !important;
		text-align: right;
		margin-top: 20px;
	}
	tbody tr > td:nth-child(2):before {
		content: "الطلب : ";
		font-weight: bold;
		color: #fe9801;
	}
	tbody tr > td:nth-child(3):before {
		content: "السعر : ";
		font-weight: bold;
		color: #fe9801;
	}
	tbody tr > td:nth-child(4):before {
		content: "الكمية : ";
		font-weight: bold;
		color: #fe9801;
	}
	tbody tr > td:nth-child(5):before {
		content: "المجموع : ";
		font-weight: bold;
		color: #fe9801;
	}
	.image {
		width: 50%;
		height: auto;
	}
	button {
		width: 100% !important;
	}
	.remove {
		right: 95% !important;
		bottom: 90% !important;
		font-size: 25px;
	}
}

@media (min-width: 993px) and (max-width: 1199px) {
	.menu_items {
		grid-template-columns: repeat(3, minmax(200px, 1fr));
	}
}
/* @media (min-width: 1200px) {
	.content {
		width: calc(100% - 250px);
	}
} */
</style>
