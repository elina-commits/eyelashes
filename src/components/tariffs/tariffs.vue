<template>
	<section class="tariffs" id="tariffs" >
		<div class="tariffs__wrapper container">
			<h2 class="tariffs__title">Тарифы</h2>
			<p class="tariffs__subTitle">Сертификат выдаётся после прохождения курса. Рассрочка доступна.</p>
			<div class="tariffs__items">
				<div class="tariffs__item" v-for="tariff in object.tariffs">
					<h3 class="tariffs__item-title">{{ tariff.title }}</h3>
					<h3 class="tariffs__item-price">{{ tariff.price }}</h3>
					<p class="tariffs__item-text">{{ tariff.text }}</p>
					<router-link class="tariffs__item-buy" :to="tariff.link">Купить</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref } from "vue"
	import { useMainDataStore } from '@/store/mainData.js'
	const object = useMainDataStore()
</script>

<style lang="scss" scoped>
	@use "tariffs.scss"
</style>