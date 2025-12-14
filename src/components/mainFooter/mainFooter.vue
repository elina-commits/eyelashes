<template>
	<section class="mainFooter" id="footer">
		<div class="mainHeader__logo op-animation">
			<img src="@/assets/images/eyelashes-logo.png" alt="Лого" width="140">
		</div>
		<div class="container mainFooter__wrapper">
			<div class="mainHeader__items mainFooter__items">
				<div class="mainHeader__item mainFooter__item" @click="scrollToSection(item.id)" v-for="item in object.items">{{ item.name }}</div>
			</div>
			<div class="g-flex mainFooter__info-wr">
				<div class="mainFooter__info">
					<div class="mainFooter__tel mainHeader__tel">
						<a href="tel: 79289304412">+7 928 930 4412</a>
						<img src="@/assets/svg/eyelashes-tel.svg">
					</div>
					<a class="mainFooter__email" href="mailto:office@ewaproduct.com">office@ewaproduct.com</a>	
					<div class="mainHeader__contacts">
						<a class="mainHeader__contact mainFooter__contact" :href="contact.link" v-for="contact in object.contacts">
							<img :src="contact.image" :url="contact.url">
						</a>
					</div>	
					<p class="mainHeader__rights">© все права защищены.</p>
				</div>
				<div class="mainHeader__mob g-flex">
					<img class="mainHeader__logo-mob" src="@/assets/images/eyelashes-logo.png" alt="Лого" width="140">
					<p class="mainHeader__rights-mob">© все права защищены.</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref } from "vue"
	import { useMainDataStore } from '@/store/mainData.js'
	const object = useMainDataStore()

	const scrollToSection = (id) => 
	{
	  const el = document.getElementById(id)
	  if (el) 
	  {
	    el.scrollIntoView({
	      behavior: 'smooth',
	      block: 'start'  
	    })
	  }
	}
</script>

<style lang="scss" scoped>
	@use "mainFooter.scss"
</style>