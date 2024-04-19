<template>
    <Section>
        <Container>
            <Headline>
                <template #title>
                    Несколько цифр<br> о нашей работе
                </template>
                <template #subtitle>
                    Гарантировано увеличим продажи за три месяца<br> обучения минимум на 20% за счет внедрения<br>
                    методов и стратегий продаж.
                </template>
            </Headline>
            <div class='grid grid-cols-1 lg:grid-cols-2 gap-container'>
                <div class='big-stat'>
                    <!--     TODO: График + текст         -->
                </div>
                <div class='grid grid-cols-2 gap-container'>
                    <div class='stat' v-for='stat in stats'>
                        <span class='font-bold text-5xl sm:text-6xl text-primary' v-html='stat.name' />
                        <span v-html='stat.value' />
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script setup lang='ts'>
import Section from '~/components/Section.vue'
import Container from '~/components/Container.vue'
import Headline from '~/components/Headline.vue'

const stats = [
    {
        name: '850<span class="text-primary-secondary">+</span>',
        value: 'Индивидуальных<br> консультаций',
    },
    {
        name: '300<span class="text-primary-secondary">+</span>',
        value: 'Проведенных<br> собеседований',
    },
    {
        name: '200<span class="text-primary-secondary">+</span>',
        value: 'Групповых<br> тренингов',
    },
    {
        name: '5 <span class="text-primary-secondary">лет</span>',
        value: 'Опыта тренерской<br> деятельности',
    },
]
</script>

<style lang='scss' scoped>
.big-stat {
    @apply bg-light rounded-default;
}

.stat {
    @apply border-grey rounded-default border text-center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 190px;
}
</style>