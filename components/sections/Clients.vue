<template>
    <Section class='bg-light'>
        <Container>
            <div class='flex flex-col sm:flex-row w-full align-middle justify-between mb-default'>
                <h2 class='unbounded text-5xl mb-default font-bold'>
                    что думают<br>
                    <span class='text-primary'>клиенты?</span>
                </h2>
                <span class='text-pre-dark sm:text-right'>
                    Наши клиенты — это компании, которые<br> действительно хотят развиваться*<br> *Это главное условие успешного взаимодействия.
                </span>
            </div>
            <div class='grid grid-cols-1 lg:grid-cols-3 gap-container'>
                <div v-for='(card, key) in cards' :key='key' class='card bg-white shadow-default'>
                    <img :src='card.img' alt='' />
                    <h3 class='font-bold italic text-xl'>{{ card.title }}</h3>
                    <p class='text-pre-dark card-text'>{{ card.text }}</p>
                    <div class='flex flex-grow'>
                        <div class='flex justify-between self-end w-full'>
                            <div class='flex flex-col'>
                                <span class='font-bold'>{{ card.fullname }}</span>
                                <span class='text-secondary'>{{ card.position }}</span>
                            </div>
                            <div class='p-small unbounded bg-light rounded-default'>
                                {{ card.company }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script setup lang='ts'>
import Section from '~/components/Section.vue'
import Container from '~/components/Container.vue'

const cards = [
    {
        img: '/images/tonus.png',
        title: '“Реальный опыт в продажах”',
        text: 'Хочу отметить высокую профессиональную подготовку тренера, реальный собственный опыт в переговорах и продажах, всегда позитивный настрой. Благодаря целому арсеналу конкретных инструментов для работы, которые подкреплялись яркими примерами (в том числе живыми звонками клиентам) сотрудники показывали после обучения готовность применять все на практике. Работой Михаила довольны на 100 процентов!',
        fullname: 'Фамилия Имя',
        position: 'Должность',
        company: 'Тонус Клуб',
    },
    {
        img: '/images/club.png',
        title: '“Ориентирован на результат”',
        text: 'Михаил работает с каждым подопечным индивидуально и вдумчиво, подбирая стиль и вовлекаясь в трансформацию. Он ориентирован только на результат. Особенно ценно в его методике то, что процесс трансформации выстроен с позиции коуча, а не учителя, что максимально соответствует потребностям взрослой аудитории. Формат проведения был в игровой форме, благодаря чему менеджерам по продажам удалось раскрепоститься и чувствовать себя комфортно.',
        fullname: 'Фамилия Имя',
        position: 'Должность',
        company: 'Фитнес',
    },
    {
        img: '/images/board.png',
        title: '“Справился на отлично!”',
        text: 'Выражаю огромную благодарность Михаилу за проведенное обучение для команды "Росич"! Была цель объединить команду для повышения результативности. Михаил справился с этой задачей на отлично!',
        fullname: 'Фамилия Имя',
        position: 'Должность',
        company: 'Росич',
    },
]
</script>

<style lang='scss' scoped>
.card-text {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    line-clamp: 5;
    overflow: hidden;
}
</style>