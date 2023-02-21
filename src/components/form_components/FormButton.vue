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
		<slot></slot>
	</router-link>
</template>

<script scoped>
export default {
	name: "FormButon",
	props: [
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
};
</script>

<style scoped>
a {
	border-radius: 10px;
	cursor: pointer;
	padding: 10px;
	justify-content: center;
	align-items: center;
	font-family: "Vazirmatn", sans-serif;
}

</style>
