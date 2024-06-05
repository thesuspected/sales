<template>
    <Section>
        <Container>
            <Headline>
                <template #title>
                    Кому необходимы<br />
                    наши услуги?
                </template>
                <template #subtitle>
                    Наша миссия — увеличение доходов компаний<br />
                    за счёт повышения профессионализма,<br />
                    вовлеченности и счастья сотрудников.
                </template>
            </Headline>
            <!--            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-container">-->
            <!--                <div class="card" v-for="card in cards">-->
            <!--                    <img :src="card.src" alt="" />-->
            <!--                    <span v-html="card.text" />-->
            <!--                </div>-->
            <!--            </div>-->
            <div class="swiper-container mt-container">
                <swiper :slides-per-view="quasar.screen.lt.md ? 1.3 : 4" :space-between="16" class="base-swiper">
                    <swiper-slide class="card" v-for="card in cards">
                        <img :src="card.src" alt="" />
                        <span v-html="card.text" />
                    </swiper-slide>
                </swiper>
            </div>
        </Container>
    </Section>
</template>

<script setup lang="ts">
import Container from '~/components/Container.vue'
import Section from '~/components/Section.vue'
import Headline from '~/components/Headline.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const quasar = useQuasar()
const cards = [
    {
        src: '/svg/picture_1.svg',
        text: 'Собственник компании <b>устал от однотипных проблем</b> в отделе продаж: невыполнение плана, текучка менеджеров, нет роста доходов и т.п.',
    },
    {
        src: '/svg/picture_2.svg',
        text: 'Компания <b>нуждается в опыте и знаниях</b> для увеличения продаж или технологии управления продажами, которых нет внутри самой компании.',
    },
    {
        src: '/svg/picture_3.svg',
        text: 'Продажи растут, а <b>доходы собственников</b> растут гораздо меньшими темпами, а зачастую и вовсе <b>падают</b>.',
    },
    {
        src: '/svg/picture_4.svg',
        text: 'Когда бизнес <b>нуждается в свежих идеях.</b> Вы чувствуете, что продукт устарел, а идей по его развитию нет.',
    },
]
</script>

<style lang="scss" scoped>
.card {
    @apply bg-light text-dark p-5 rounded-default gap-default h-full;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 370px;
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
