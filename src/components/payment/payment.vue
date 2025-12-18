<template>
	<div class="paymentPage">
		<div class="paymentPage__wrapper">
			<div class="paymentPage__left">
				<router-link class="paymentPage__logo" to="/">
					<img class="paymentPage__logo-img1" src="@/assets/svg/eyelashes-arrowLeft.svg" alt="Назад">
					<img class="paymentPage__logo-img2" src="@/assets/images/eyelashes-whiteLogo.png" alt="Лого">
				</router-link>
				<h2 class="paymentPage__title">
					ОСВОЙТЕ КОРЕЙСКУЮ ТЕХНИКУ ЛАМИНИРОВАНИЯ РЕСНИЦ ОНЛАЙН
				</h2>
				<p class="paymentPage__left-subTitle">Полный обучающий модуль: от классики до 5D объема.</p>
				<div class="paymentPage__left-total">
					<h3>Итого к оплате:</h3>
					<span class="paymentPage__price">15 900 ₽</span>
					<p><span class="paymentPage__plus">+</span> Пожизненный доступ к материалам</p>
					<p><span class="paymentPage__plus">+</span> Сертификат по окончании</p>
				</div>
			</div>
			<div class="paymentPage__right">
				<form class="payment__form" @submit.prevent="handlePayment">
          			<h3 class="payment__form-subTitle">Контактные данные:</h3>
          			<div class="payment__form-email">
          				<img src="@/assets/svg/eyelashes-email.svg">
            			<input v-model="formData.email" type="email" placeholder="you@example.com" required />
          			</div>
          			<h3 class="payment__form-subTitle">Способ оплаты</h3>
          			<div class="payment__form-methods">
			            <label class="payment__form-method" :class="{ active: method === 'card' }" 
			            	@click="method = 'card'" >
			              	<span>Карта</span>
			            </label>
			            <label class="payment__form-method" :class="{ active: method === 'sbp' }" 
			            	@click="method = 'sbp' ">
			              	<span>СБП</span>
			            </label>
			        </div>
		          	<div class="card__inputs"  v-if="method === 'card' ">
		            	<div class="card__input">
		              		<label class="card__input-title">Номер карты</label>
		              		<input type="text" placeholder="0000 0000 0000 0000" maxlength="19" />
		            	</div>
		             	<div class="card__input">
		                	<label class="card__input-title">ММ / ГГ</label>
		                	<input type="text" placeholder="12/26" maxlength="5" />
		              	</div>
		              	<div class="card__input">
		                	<label class="card__input-title">CVC</label>
		                	<input type="password" placeholder="***" maxlength="3" />
		              	</div>
		          	</div>
		          	<p class="payment__warning">
		           		! Нажимая кнопку, вы принимаете <a href="#">оферту</a>. 
		            Безопасность данных обеспечивается SSL-шифрованием. После оплаты ждите ссылку на вашу электронную почту !
		          	</p>
		          	<button type="submit" class="submit__btn" :disabled="loading">
            			{{ loading ? 'Обработка...' : 'Оплатить курс' }}
          			</button>
        		</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, reactive } from 'vue';

	const loading = ref(false);
	const method = ref('card');
	const formData = reactive({
	  email: '',
	});

	const handlePayment = () => 
	{
	  loading.value = true;
	  setTimeout(() => {
	    loading.value = false;
	    alert('Платеж инициирован! Перенаправление на страницу банка...');
	  }, 2000);
	};
</script>
<style lang="scss" scoped>
	@use "payment.scss"
</style>