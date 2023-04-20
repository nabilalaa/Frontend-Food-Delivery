<template>
	<div class="model-page">
		<div class="model" :style="{ backgroundColor: bg }">
			<div class="model-header" :style="{ borderColor: tcolor }">
				<div class="flex">
					<h4 :style="{ color: tcolor }">معاينة الطلب</h4>
					<div
						class="close"
						@click="$emit('closeModel')"
						:style="{ color: tcolor }"
					>
						<span class="icon-x"></span>
					</div>
				</div>
			</div>
			<div class="model-content">
				<div class="image">
					<img :src="details.image" alt="" />
				</div>
				<h2>{{ details.name }}</h2>
				<p :style="{ color: tcolor }">{{ details.desc }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ModelBox",
	props: ["bg", "tcolor", "details"],
};
</script>

<style scoped>
.model-page {
	background-color: rgba(255, 0, 0, 0.205);
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 99999;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
}
.model {
	width: 500px;
	border-radius: 20px;
}
.model-header {
	border-bottom: 1px solid rgba(0, 0, 0, 0.151);
	padding: 20px;
}
.flex {
	display: flex;
	justify-content: space-between;
}

.model-content {
	color: #fff;
}

.image {
	width: 300px;
	height: 300px;
	margin: 0 auto;
	margin-bottom: 30px;
}
.close {
	cursor: pointer;
}

h2 {
	margin-bottom: 20px;
	border-bottom: 1px solid #fff;
	padding: 20px;
}
p {
	padding: 20px;
}
@media (max-width: 576px) {
	.model {
		width: 100%;
		margin: 20px;
	}
	.image {
		width: auto;
		height: auto;
	}
}
</style>
