<template>
    <Section class="bg-light">
        <Container>
            <div class="flex flex-col sm:flex-row w-full align-middle justify-between mb-default">
                <h2 class="unbounded text-5xl mb-default font-bold">
                    что думают<br />
                    <span class="text-primary">клиенты?</span>
                </h2>
                <span class="text-pre-dark sm:text-right">
                    Наши клиенты — это компании, которые<br />
                    действительно хотят развиваться*<br />
                    *Это главное условие успешного взаимодействия.
                </span>
            </div>
            <div class="swiper-container">
                <swiper :slides-per-view="quasar.screen.lt.md ? 1.1 : 3" :space-between="16" class="base-swiper">
                    <swiper-slide class="card bg-white shadow-default" v-for="card in cards">
                        <img :src="card.img" alt="" />
                        <h3 class="font-bold italic text-xl">{{ card.title }}</h3>
                        <p
                            :id="card.id"
                            class="text-pre-dark card-text cursor-pointer cut"
                            @click="checkCutClass(card.id)"
                        >
                            {{ card.text }}
                        </p>
                        <div class="flex flex-grow">
                            <div class="flex justify-between self-end w-full">
                                <div class="flex flex-col">
                                    <span class="font-bold">{{ card.fullname }}</span>
                                    <span class="text-secondary">{{ card.position }}</span>
                                </div>
                                <div class="p-small unbounded bg-light rounded-default">
                                    {{ card.company }}
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </Container>
    </Section>
</template>

<script setup lang="ts">
import Section from '~/components/Section.vue'
import Container from '~/components/Container.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const checkCutClass = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
        if (element.classList.contains('cut')) {
            element.classList.remove('cut')
        } else {
            element.classList.add('cut')
        }
    }
}

const quasar = useQuasar()
const cards = [
    {
        id: 'tonus_review',
        img: '/images/tonus.png',
        title: '“Реальный опыт в продажах”',
        text: 'Хочу отметить высокую профессиональную подготовку тренера, реальный собственный опыт в переговорах и продажах, всегда позитивный настрой. Благодаря целому арсеналу конкретных инструментов для работы, которые подкреплялись яркими примерами (в том числе живыми звонками клиентам) сотрудники показывали после обучения готовность применять все на практике. Работой Михаила довольны на 100 процентов!',
        fullname: 'Поципко Юлия',
        position: 'Собственник',
        company: 'Тонус Клуб',
    },
    {
        id: 'rosich_review',
        img: '/images/club.png',
        title: '“Ориентирован на результат”',
        text: 'Михаил работает с каждым подопечным индивидуально и вдумчиво, подбирая стиль и вовлекаясь в трансформацию. Он ориентирован только на результат. Особенно ценно в его методике то, что процесс трансформации выстроен с позиции коуча, а не учителя, что максимально соответствует потребностям взрослой аудитории. Формат проведения был в игровой форме, благодаря чему менеджерам по продажам удалось раскрепоститься и чувствовать себя комфортно.',
        fullname: 'Неваев Мурат',
        position: 'Управляющий',
        company: 'Росич',
    },
    {
        id: 'vtep_review',
        img: '/images/board.png',
        title: '“Справился на отлично!”',
        text: 'Выражаю огромную благодарность Михаилу за проведенное обучение для команды "Росич"! Была цель объединить команду для повышения результативности. Михаил справился с этой задачей на отлично!',
        fullname: 'Рысева Светлана',
        position: 'Директор',
        company: 'ВТЭП',
    },
]
</script>

<style lang="scss" scoped>
.card {
    display: flex;

    .card-text {
        transition-duration: 0.5s;

        &.cut {
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            line-clamp: 5;
            overflow: hidden;
        }
    }
}

.swiper-container {
    margin-left: -1.25rem;
    margin-right: -1.25rem;

    .base-swiper {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }
}
</style>
