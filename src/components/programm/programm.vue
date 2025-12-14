<template>
	<section class="programm" id="programm">
		<div class="programm__wrapper container">
				<h2 class="programm__title">Программа обучения</h2>
			<p class="programm__subTitle">Подробные видео-уроки и бонусы: от подбора материалов до работы со сложными ресницами.</p>
			<div class="programm__items">
				<div class="programm__item" v-for="part in object.parts">
					<p class="programm__item-num">{{ part.num }}</p>
					<div class="programm__item-text">
						<h3>{{ part.title }}</h3>
						<p>{{ part.subTitle }}</p>
					</div>
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
	@use "programm.scss"
</style>