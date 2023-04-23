<template>
	<div class="contact py-28">
		<div class="container">
			<h1
				class="text-center font-FamilyHeader text-mainColor mb-12 capitalize"
			>
				contact us
			</h1>
			<div class="flex lg:flex-row flex-col">
				<div class="map lg:pr-10 lg:w-8/12 w-full lg:m-0 mb-4">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.720137452355!2d30.843567124650388!3d29.31988395253641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14597922f48def13%3A0xbc2a9a389aabdd6d!2z2YPYsdmK2Kgg2KfZhNio2KfYtNin!5e0!3m2!1sar!2seg!4v1682203086532!5m2!1sar!2seg"
						width="100%"
						height="640px"
						class="lg:h-full"
						style="border: 0"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div class="info lg:w-4/12 w-full">
					<div
						class="items border-[#e9e9e9] border p-12 rounded-xl group hover:border-mainColor transition-colors duration-700"
					>
						<div class="flex items-center">
							<div
								class="flex justify-center items-center p-4 rounded-xl group-hover:bg-thirdColor bg-mainColor text-white mr-4 transition-colors duration-700"
							>
								dd
							</div>
							<div>
								<h3
									class="font-FamilyHeader text-xl capitalize"
								>
									phone
								</h3>
								<p class="mt-4">01025160160</p>
							</div>
						</div>
					</div>
					<div
						class="items my-8 border-[#e9e9e9] border p-12 rounded-xl group hover:border-mainColor transition-colors duration-700"
					>
						<div class="flex items-center">
							<div
								class="flex justify-center items-center p-4 rounded-xl group-hover:bg-thirdColor bg-mainColor text-white mr-4 transition-colors duration-700"
							>
								dd
							</div>
							<div>
								<h3
									class="font-FamilyHeader text-xl capitalize"
								>
									email
								</h3>
								<p class="mt-4">
									example@gmail.com
								</p>
							</div>
						</div>
					</div>

					<div
						class="items border-[#e9e9e9] border p-12 rounded-xl group hover:border-mainColor transition-colors duration-700"
					>
						<div class="flex items-center">
							<div
								class="flex justify-center items-center p-4 rounded-xl group-hover:bg-thirdColor bg-mainColor text-white mr-4 transition-colors duration-700"
							>
								dd
							</div>
							<div>
								<h3
									class="font-FamilyHeader text-xl capitalize"
								>
									address
								</h3>
								<p class="mt-4">
									كريب الباشا بالفيوم ،
									بجوار ڤيلا المحافظ وبالقرب
									من نادي المحافظة
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<form action="" class="mt-10">
				<div class="flex gap-4 md:flex-row flex-col">
					<input
						type="text"
						placeholder="Name"
						class="input-style"
					/>
					<input
						type="text"
						placeholder="Email"
						class="input-style"
					/>
					<input
						type="text"
						placeholder="Phone"
						class="input-style"
					/>
				</div>

				<textarea
					name=""
					id=""
					placeholder="Message"
					class="border-[#e9e9e9] border p-4 rounded-xl focus:border-mainColor transition-colors duration-700 outline-none w-full mt-4 h-60"
				></textarea>
				<button
					class="bg-mainColor hover:bg-thirdColor text-white capitalize font-FamilyHeader rounded-full sm:w-52 w-full transition-colors duration-500 p-4 text-xl mt-4"
				>
					send
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
