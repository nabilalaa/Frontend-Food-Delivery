<template>
	<router-view />
</template>
<script>
export default {};
</script>
<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "Vazirmatn", sans-serif;
}
:root {
	--main_color: #fe9801;
	--secondary_color: #f4eec7;
}
h1,
h2,
h3,
h4,
p {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

a {
	text-decoration: none;
}

ul {
	list-style: none;
}

body {
	font-family: "Vazirmatn", sans-serif;
	direction: rtl;
}

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.container {
	width: 100%;
	margin: auto;
	display: flex;
}
.container_home {
	max-width: 1170px;
	margin: auto;
	padding: 0 20px;
}
input,
button {
	font-family: "Vazirmatn", sans-serif;
	font-size: 16px;
}
@font-face {
	font-family: "icomoon";
	src: url("assets/fonts/icomoon.eot");
	src: url("assets/fonts/icomoon.eot") format("embedded-opentype"),
		url("assets/fonts/icomoon.ttf") format("truetype"),
		url("assets/fonts/icomoon.woff") format("woff"),
		url("assets/fonts/icomoon.svg") format("svg");
	font-weight: normal;
	font-style: normal;
	font-display: block;
}

[class^="icon-"],
[class*=" icon-"] {
	/* use !important to prevent issues with browser extensions that change fonts */
	font-family: "icomoon" !important;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;

	/* Better Font Rendering =========== */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-search:before {
	content: "\e900";
}
.icon-x:before {
	content: "\e902";
}
.icon-eye:before {
	content: "\e903";
}
.icon-home:before {
	content: "\e904";
}
.icon-shopping-cart:before {
	content: "\e901";
}
</style>
