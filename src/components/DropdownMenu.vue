<template>
	<div class="dropdown w-52 relative select-none">
		<div
			class="flex justify-between items-center bg-white p-4 cursor-pointer"
			@click="menu = !menu"
		>
			<h3 class="">الاصناف</h3>
			<div
				class="border-l-8 border-r-8 border-t-8 border-t-thirdColor border-r-transparent border-l-transparent"
			></div>
		</div>
		<ul class="bg-white absolute w-full" v-if="menu">
			<li
				class="p-4 cursor-pointer hover:bg-thirdColor hover:text-white"
				@click="choose"
			>
				الكل
			</li>
			<li
				class="p-4 cursor-pointer hover:bg-thirdColor hover:text-white"
				v-for="category in categories"
				:key="category"
				@click="choose"
			>
				{{ category.nameArabic }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menu: false,
		};
	},
	methods: {
		choose(e) {
			this.menu = false;
			console.log(e.target.value);
			if (e.target.innerText === "الكل") {
				console.log("ss");
				document.querySelectorAll(".card").forEach((ele) => {
					ele.style.display = "flex";
				});
			} else {
				document.querySelectorAll(".card").forEach((ele) => {
					ele.style.display = "none";
				});
				document
					.querySelectorAll("#" + e.target.innerText)
					.forEach((ele) => {
						ele.style.display = "flex";
					});
			}
		},
	},
	computed: {
		categories() {
			return this.$store.state.categories;
		},
	},
	mounted() {
		this.$store.dispatch("categories");
	},
};
</script>

<style></style>
