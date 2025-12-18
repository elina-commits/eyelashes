<template>
	<section class="why">
		<div class="why__wrapper container">
			<h2 class="why__title">Почему это обучение именно для вас?</h2>
			<div class="why__cards g-flex">
				<div class="why__card" v-for="card in object.cards">
					<h3>{{ card.title }}</h3>
					<p>{{ card.text }}</p>
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
	@use "why.scss"
</style>