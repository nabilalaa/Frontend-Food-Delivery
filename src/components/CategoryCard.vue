<template>
	<router-link
		to="addorder"
		@click="setCategory"
		class="relative h-56 group flex justify-center items-center overflow-hidden cursor-pointer"
	>
		<div class="image absolute h-full">
			<img
				class="w-full h-full object-cover group-hover:scale-125 transition-all"
				:src="image"
				alt=""
			/>
		</div>
		<div
			class="overlay absolute opacity-50 w-full h-full bg-mainColor"
		></div>
		<h2 class="absolute text-2xl text-white">{{ categoryName }}</h2>
	</router-link>
</template>

<script>
// this.$store.state;
export default {
	props: ["image", "categoryName"],
	methods: {
		setCategory() {
			sessionStorage.setItem("category", this.$props.categoryName);
		},
	},
	mounted() {},
};
</script>

<style></style>
