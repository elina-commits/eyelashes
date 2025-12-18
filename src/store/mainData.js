import { ref } from "vue"
import { defineStore } from 'pinia'

import contactImg1 from '@/assets/svg/eyelashes-contact1.svg';
import contactImg2 from '@/assets/svg/eyelashes-contact2.svg';
import contactImg3 from '@/assets/svg/eyelashes-contact3.svg';
import contactImg4 from '@/assets/svg/eyelashes-contact4.svg';
import work2 from '@/assets/images/eyelashes__works-img2.jpg';
import work3 from '@/assets/images/eyelashes__works-img3.jpg';
import work4 from '@/assets/images/eyelashes__works-img4.jpg';
import work5 from '@/assets/images/eyelashes__works-img5.jpg';
import work6 from '@/assets/images/eyelashes__works-img6.jpeg';
import work7 from '@/assets/images/eyelashes__works-img7.jpeg';
import work8 from '@/assets/images/eyelashes__works-img8.jpg';
import work9 from '@/assets/images/eyelashes__works-img9.jpg';
import mobileHeaderImg1 from '@/assets/svg/eyelahes-headerMob-img1.svg';
import mobileHeaderImg2 from '@/assets/svg/eyelahes-headerMob-img2.svg';
import mobileHeaderImg3 from '@/assets/svg/eyelahes-headerMob-img3.svg';
import mobileHeaderImg4 from '@/assets/svg/eyelahes-headerMob-img4.svg';
import mobileHeaderImg5 from '@/assets/svg/eyelahes-headerMob-img5.svg';
import mobileHeaderImg6 from '@/assets/svg/eyelahes-headerMob-img6.svg';
import mobileHeaderImg7 from '@/assets/svg/eyelahes-headerMob-img7.svg';

export const useMainDataStore = defineStore('mainData', () => {
	const items = ref([
		{ id: 'why', name: 'Причина', icon: mobileHeaderImg1 },
		{ id: 'programm', name: 'Программа', icon: mobileHeaderImg2 },
		{ id: 'works', name: 'Работы', icon: mobileHeaderImg3 },
		{ id: 'tariffs', name: 'Тарифы', icon: mobileHeaderImg4 },
		{ id: 'reviews', name: 'Отзывы', icon: mobileHeaderImg5 },
		{ id: 'about', name: 'Обо мне', icon: mobileHeaderImg6 },
		{ id: 'certificate', name: 'Сертификат', icon: mobileHeaderImg7 }
	])
	const contacts = ref([
		{ image: contactImg1, link: '#', url: 'telegram' },
		{ image: contactImg2, link: '#', url: 'whatsapp' },
		{ image: contactImg3, link: '#', url: 'vk' },
		{ image: contactImg4, link: '#', url: 'instagram' }
	])
	const parts = ref([
		{ num: '1', title: 'Подбор материалов', subTitle: 'Лучшие составы, валики, краски и расходники. Разбор опасных и неэффективных материалов.' },
		{ num: '2', title: 'Пошаговая процедура', subTitle: 'От А до Я, включая фундаментальные принципы и новые фишки корейской техники.' },
		{ num: '3', title: 'Гарантия результата', subTitle: 'Как определять готовность ресниц и получать стабильный завиток.' },
		{ num: '4', title: 'Яркое ламинирование', subTitle: 'Секреты работы с первым составом и подбор валиков для максимального эффекта.' },
		{ num: '5', title: 'Практика: простые ресницы', subTitle: 'Отработка на простых случаях для закрепления навыков.' },
		{ num: '6', title: 'Практика: сложные ресницы', subTitle: 'Работа с короткими, плотными и «неподдающимися» ресницами.' },
		{ num: '+', title: 'dhsfjsgfjhsgfjsgj', subTitle: 'Эффективные стратегии привлечения моделей.' },
		{ num: '+', title: 'dhsfjsgfjhsgfjsgj', subTitle: 'Как писать объявления, которые притягивают клиентов и моделей. '}
	])
	const tariffs = ref([
		{ title: 'Без обратной связи', price: '8 900 ₽', text: 'Доступ ко всем видеоурокам + сертификат', link: '/payment' },
		{ title: 'С поддержкой', price: '10 900 ₽', text: 'Уроки, сертификат и обратная связь по 5 работам', link: '/payment' }
	])
	const images = ref([
  		{ src: work2 },
  		{ src: work3 },
  		{ src: work4 },
  		{ src: work5 },
  		{ src: work6 },
  		{ src: work7 },
  		{ src: work8 },
  		{ src: work9 },  		
	])
	const cards = ref([
		{ title: 'Тренд и отстройка', text: 'Новая техника привлекает «клиенток-новаторов» и помогает выгодно отличаться от конкуренток.' },
		{ title: 'Без травмирования', text: 'Этап выкладки исключён — кутикула не повреждается, ресницы остаются здоровыми.' },
		{ title: 'Гарантированный результат', text: 'Каждая ресница равномерно напитывается составами — результат более предсказуем.' }
	])
  
  return { items, contacts, parts, tariffs, images, cards }
})