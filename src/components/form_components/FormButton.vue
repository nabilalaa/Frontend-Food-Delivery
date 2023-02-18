<template>
	<router-link
		:to="to"
		:style="{
			backgroundColor: BackgroundColor,
			color: TextColor,
			margin: margin,
			width: width,
			display: display,
		}"
	>
		{{ text }}
	</router-link>
</template>

<script scoped>
export default {
	name: "FormButon",
	props: [
		"text",
		"BackgroundColor",
		"TextColor",
		"BackgroundColorHover",
		"TextColorHover",
		"center",
		"to",
		"width",
		"display",
		"margin",
	],
	// methods: {
	// 	mouseover(e) {
	// 		e.path[0].style.backgroundColor = this.BackgroundColorHover;
	// 		e.path[0].style.color = this.TextColorHover;
	// 	},
	// 	mouseout(e) {
	// 		e.path[0].style.backgroundColor = this.BackgroundColor;
	// 		e.path[0].style.color = this.TextColor;
	// 	},
	// },
};
</script>

<style scoped>
a {
	align-items: center;
	border: 0;
	outline: none;
	border-radius: 10px;
	cursor: pointer;
	padding: 10px;
	justify-content: center;
	font-family: "Vazirmatn", sans-serif;
}
@media (max-width: 576px) {
	a {
		width: 100% !important;
	}
}
</style>
