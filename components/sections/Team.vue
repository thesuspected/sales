<template>
    <Section class='bg-light'>
        <Container class='grid grid-cols-1 lg:grid-cols-2 gap-container'>
            <div v-for='(card,key) in cards' :key='key' class='flex flex-col'>
                <div class='flex'>
                    <h2 class='unbounded text-5xl mb-default font-bold' :class='`text-${card.color}`'>
                        {{ card.title }}
                    </h2>
                    <div class='border-b flex-grow mb-[1.6rem] ml-[-0.5rem]' :class='`border-${card.color}`' />
                </div>
                <div
                    class='flex-grow bg-white rounded-default shadow-default grid grid-cols-3 lg:grid-cols-2 gap-container overflow-hidden'>
                    <img alt='' :src='card.src' class='object-cover w-full h-full' />
                    <div class='flex flex-col gap-default py-default col-span-2 lg:col-span-1'>
                        <h3 class='text-2xl font-bold'>{{ card.fullname }}</h3>
                        <span class='text-secondary text-xl font-light border-b border-grey pb-small'>
                            {{ card.position }}
                        </span>
                        <p v-for='(text,key) in card.exp' :key='key' class='pr-small'>{{ text }}</p>
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script setup lang='ts'>
import Container from '~/components/Container.vue'
import Section from '~/components/Section.vue'

const cards = [
    {
        title: 'наша',
        color: 'dark',
        fullname: 'Михаил Масляков',
        position: 'Бизнес-тренер',
        src: '/images/team_1.png',
        exp: [
            '5 лета опыта в тренерской деятельности',
            'Работал с HeadHunter, Актион-МЦФР',
            'Обучался у Сергея Филиппова, Игоря Рызова, Михаила Гребенюка',
            'Разработал метод найма, который повысил «оставаемость» стажеров в 5 раз',
        ],
    },
    {
        title: 'команда',
        color: 'primary',
        fullname: 'Артём Мищенко',
        position: 'IT-специалист',
        src: '/images/team_2.png',
        exp: [
            '6 лет опыта в разработке веб-сервисов и приложений',
            'Работал в дочерней компании корпорации “Росатом”',
            'Разработал телеграм-бота для образовательного форума “Территория смыслов” 2023',
        ],
    },
]
</script>

<style lang='scss' scoped>
</style>