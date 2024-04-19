<template>
    <h2 class='unbounded text-5xl mb-default font-bold mt-section'>шаг 1</h2>
    <div class='grid grid-cols-1 md:grid-cols-3 gap-container'>
        <div class='bg-primary card'>
            <div class='flex justify-center items-center gap-default text-white size-30px'>
                <img src='~/assets/icons/step_thunder.svg' alt='' />
                Проводим тренинг
            </div>
            <img src='~/assets/images/training.png' alt='' />
            <span class='text-white size-20px'>
                Первым делом проводим тренинг для сотрудников по перечисленным темам. Это теоретическая и практическая база, которая ляжет в основу роста показателей продаж.
            </span>
            <div>
                <div class='flex justify-between flex-grow'>
                    <div v-for='chip in chips' class='chip'>
                        {{ chip }}
                    </div>
                </div>
                <Button label='Оставить заявку на тренинг' />
            </div>
        </div>
        <div class='bg-white card'>
            <h3 class='size-30px text-center'>
                Методы продаж
            </h3>
            <Accordion v-model='sellMethodsModel' :items='sellMethodsItems' />
        </div>
        <div class='bg-white card' style='height: 600px'>

        </div>
    </div>
</template>

<script setup lang='ts'>
import Button from '~/components/buttons/Button.vue'

const chips = [
    '8 часов', '19 тем', 'Теория', 'Практика',
]

const sellMethodsModel = ref(0)
const sellMethodsItems = ref([
    {
        title: 'Что есть продажи?',
        content: 'Для того, чтобы продавать, мы должны понимать, что такое продажи. На этом этапе мы будем погружаться в идеологию продаж и как они работают.',
    },
    {
        title: 'Что вы продаете?',
        content: 'Текст',
    },
    {
        title: 'Целевая аудитория',
        content: 'Текст',
    },
    {
        title: 'Воронка продаж',
        content: 'Текст',
    },
    {
        title: 'Целевой этап воронки продаж',
        content: 'Текст',
    },
    {
        title: 'Ценное конечное предложение',
        content: 'Текст',
    },
    {
        title: 'Уникальное торговое предложение',
        content: 'Текст',
    },
    {
        title: 'Точки касаний',
        content: 'Текст',
    },
    {
        title: 'Метрики',
        content: 'Текст',
    },
    {
        title: 'Классификация клиентов',
        content: 'Текст',
    },
    {
        title: 'Таблица переговоров',
        content: 'Текст',
    },
])
</script>

<style lang='scss' scoped>
.chip {
    @apply text-white font-medium border-white border-2 rounded-default;
    padding: 4px 10px;
    margin-bottom: 10px;
}
</style>