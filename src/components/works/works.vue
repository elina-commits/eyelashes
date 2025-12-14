<template>
	<section class="works" id="works">
		<div class="container">
			<div class="works__wrapper">
				<h2 class="works__title reviews__title">Мои работы</h2>
				<div class="works__images">
			    	<img
			    		class="works__image" v-for="(image, index) in object.images" :src="image.src"
			    		@click="openFullscreen(image.src)"
			    	/>
			  	</div>
				<div class="works__fullscreen" v-if="fullscreenImageSrc" @click="closeFullscreen">
					<img :src="fullscreenImageSrc" class="works__fullscreen-img" />
			  	</div>
			</div>
	  	</div>
	</section>
</template>

<script setup>
	import { ref } from 'vue';
	import { useMainDataStore } from '@/store/mainData.js'

	const object = useMainDataStore()

	const fullscreenImageSrc = ref(null);

	const openFullscreen = (src) => {
	  fullscreenImageSrc.value = src;
	  document.body.style.overflow = 'hidden';
	};

	const closeFullscreen = () => {
	  fullscreenImageSrc.value = null;
	  document.body.style.overflow = '';
	};
</script>

<style scoped lang="scss">
	@use"works.scss"
</style>
