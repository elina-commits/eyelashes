<template>
	<section class="about" id="about" ref="targetSection" :class="{ 'show': isVisible }">
		<div class="container">
			<h2 class="about__title">Обо мне</h2>
			<div class="about__wrapper">
				<img  class="about__image" src="@/assets/images/eyelashes-about.jpg" width="500">
				<div class="about__text">
					<p class="about__text-p">
						Приветствую! Искренне рада вам! Меня зовут Анна Фролова -Карнатова, я сертифицированный тренер по наращиванию ресниц. В России я известна как Anna F-K Лэшмейкер с 2009 года, стояла у истоков популярной процедуры наращивания ресниц Окончила с десяток Lash-школ и освоила все известные техники В 2017 году создала собственный бренд LASH MONTAGE, в который вложила весь свой опыт, знания и душу Лично посетила ряд ведущих фабрик в Южной Корее, для запуска производства особых материалов своего бренда Веду активную практику lash-тренера в России и за рубежом, дарю индустрии красоты своих высокопрофессиональных учеников Пришла в профессию из медицины
					</p>
					<p class="about__text-p2">
						Приветствую! Искренне рада вам! Меня зовут Анна Фролова -Карнатова, я сертифицированный тренер по наращиванию ресниц. В России я известна как Anna F-K Лэшмейкер с 2009 года, стояла у истоков популярной процедуры наращивания ресниц Окончила с десяток Lash-школ и освоила все известные техники В 2017 году создала собственный бренд LASH MONTAGE, в который вложила весь свой опыт, знания и душу Лично посетила ряд ведущих фабрик в Южной Корее, для запуска производства особых материалов своего бренда Веду активную практику lash-тренера в России и за рубежом, дарю индустрии красоты своих высокопрофессиональных учеников Пришла в профессию из медицины
					</p>
					<img src="@/assets/svg/qrcodehd_106111.svg">
				</div>					
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref, onMounted } from 'vue'

	const targetSection = ref(null)
	const isVisible = ref(false)

	onMounted(() => {
	  const observer = new IntersectionObserver((entries) => {
	    entries.forEach(entry => {
	      // Если секция вошла в область видимости хотя бы на 20%
	      if (entry.isIntersecting) {
	        isVisible.value = true
	        // Если нужно, чтобы анимация сработала только один раз — отключаем слежку
	        observer.unobserve(entry.target)
	      }
	    })
	  }, {
	    threshold: 0.2 // 20% секции должно быть видно для старта
	  })

	  if (targetSection.value) {
	    observer.observe(targetSection.value)
	  }
	})
</script>

<style lang="scss" scoped>
	@use "about.scss"
</style>