	<template>
	<header class="mainHeader">
		<div class="container g-flex">
			<div class="mainHeader__wrapper">
				<div class="mainHeader__logo">
					<img src="@/assets/images/eyelashes-logo2.png" alt="Лого" width="145">
				</div>
				<div class="mainHeader__items g-flex">
					<div class="mainHeader__item" @click="scrollToSection(item.id)" v-for="item in object.items">{{ item.name }}</div>
				</div>
			</div>
			<div class="mainHeader__wrap g-flex">
				<div class="mainHeader__tel">
					<a href="tel: 79289304412">+7 928 930 4412</a>
					<img src="@/assets/svg/eyelashes-tel.svg">
				</div>
				<div class="mainHeader__contacts">
					<a class="mainHeader__contact" :href="contact.link" v-for="contact in object.contacts">
						<img :src="contact.image" :alt="contact.url">
					</a>
				</div>
			</div>
			<div class="mainHeader__burger" :class="{ 'active': isShow }" @click="showBurger">
				<div class="mainHeader__burger-line"></div>
				<div class="mainHeader__burger-line"></div>
				<div class="mainHeader__burger-line"></div>
			</div>
			<div class="mainHeader__wrapper-mob" :class="{ 'active': isShow }">
				<div class="mainHeader__items-mob g-flex">
					<div class="mainHeader__item-mob" @click="scrollToSection(item.id)" v-for="item in object.items">
						<img :src="item.icon">
						<p>{{ item.name }}</p>
						</div>
				</div>
				<div class="g-flex">
					<a class="mainHeader__tel-mob" href="tel: 79289304412">+7 928 930 4412</a>
					<div class="mainHeader__contacts">
						<a class="mainHeader__contact-mob" :href="contact.link" v-for="contact in object.contacts">
							<img :src="contact.image" :alt="contact.url">
						</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { ref } from "vue"
	import { useMainDataStore } from '@/store/mainData.js'

	const object = useMainDataStore()
	
	const isShow = ref(false)
	const showBurger = () => { isShow.value = !isShow.value }

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

<style lang="scss">
	@use "mainHeader.scss"
</style>