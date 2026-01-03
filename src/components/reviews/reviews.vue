<template>
	<section class="reviews" id="reviews">
		<div class="reviews__wrapper container">
			<h2 class="reviews__title">Отзывы учениц</h2>	
			<div class="reviews__items g-flex">
				<div class="reviews__item" v-for="review in object.reviews">
					<div class="reviews__item-info g-flex">
						<div class="reviews__item-wrap">
							<img :src="review.img" class="reviews__item-img">
							<h3 class="reviews__item-user">{{ review.name }}</h3>
						</div>
						<p class="reviews__item-date">{{ review.date }}</p>
					</div>
					<p class="reviews__item-text">{{ review.text }}</p>
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

<style lang="scss">
	@use "reviews.scss"
</style>