<template>
	<section class="certificate"  id="certificate">
		<div class="container certificate__wrapper">
			<h2 class="certificate__title">Сертификат</h2>
			<p class="certificate__subTitle">Сертификат получаемый после окончания курса (подтверждает квалификацию и повышает доверие клиенток) :</p>
			<div class="certificate__images">
				<img class="certificate__img" src="@/assets/images/eyelashes-certificate.jpg" @click="openFullscreen" alt="Фото сертификата">
				<Teleport to="body">
					<div class="certificate__fullscreen" v-if="fullscreenImageSrc" @click="closeFullscreen">
	          			<img :src="fullscreenImageSrc" />
	      			</div>
      			</Teleport>
			</div>
	  </div>
	</section>
</template>

<script setup>
	import { ref } from 'vue';
	import certificateImgSrc from '@/assets/images/eyelashes-certificate.jpg';

	const fullscreenImageSrc = ref(null);

	const openFullscreen = () => 
	{
	  fullscreenImageSrc.value = certificateImgSrc; 
	  document.body.style.overflow = 'hidden';
	};

	const closeFullscreen = () => {
	  fullscreenImageSrc.value = null;
	  document.body.style.overflow = '';
	};
</script>

<style scoped lang="scss">
	@use "certificate.scss"
</style>
