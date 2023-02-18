<template>
	<div class="input_group">
		<label>{{ label }}</label>
		<input
			:type="type"
			:placeholder="label"
			:value="modelValue"
			:name="name"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>

<script>
export default {
	name: "FormInput",
	props: ["label", "type", "modelValue", "name"],
	methods: {},
};
</script>

<style scoped>
.input_group {
	margin-bottom: 40px;
	width: 100%;
}
label {
	display: block;
	margin-bottom: 10px;
	font-size: 18px;
}
input {
	width: 100%;
	height: 40px;
	padding: 5px 10px;
	border: 2px solid;
	border-radius: 5px;
	outline: none;
}
input:focus {
	border: 2px solid var(--main_color);
}

</style>
