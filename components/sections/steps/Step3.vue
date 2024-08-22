<template>
    <h2 class="unbounded text-5xl mb-default font-bold mt-section">шаг 3</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-container">
        <div class="card bg-white shadow-default">
            <div class="flex flex-col gap-default flex-grow">
                <div class="flex items-center gap-default text-primary size-30px">
                    <img src="~/assets/icons/step_sound.svg" alt="" />
                    прослушивание<br />
                    звонков
                </div>
                <span>
                    Важно не только научиться продавать, но и <b>закрепить приобретенные навыки</b> в долгую.
                    <br /><br />
                    На протяжении трёх месяцев мы будем прослушивать звонки и составлять отчеты по каждому сотруднику, а
                    также устраивать <b>еженедельную онлайн встречу</b> с разбором допущенных ошибок. <br /><br />
                    Данная стратегия <b class="text-primary">кратно повышает эффективность</b> менеджеров за счёт
                    контроля и отработки ошибок на реальных клиентах.
                </span>
            </div>
        </div>
        <div class="flex flex-col justify-between gap-container relative">
            <div
                v-for="(card, key) in cards"
                :key="key"
                class="rounded-default flex items-center flex-nowrap p-default gap-default shadow-default call-card"
                :class="key === 0 ? 'bg-primary text-white' : 'bg-white'"
            >
                <img :src="card.icon" alt="" />
                <span>
                    {{ card.text }}
                </span>
            </div>
            <div class="bg-line" />
        </div>
        <div class="flex flex-col shadow-default rounded-default overflow-hidden">
            <img src="~/assets/images/call2.png" alt="" class="object-cover" />
            <div class="rounded-default flex items-center flex-nowrap p-default gap-default bg-white">
                <img src="/icons/team.svg" alt="" />
                <span> Организуем онлайн встречу с разбором допущенных ошибок </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const cards = [
    {
        icon: '/icons/chart.svg',
        text: 'Определяем критерии оценки сотрудников',
    },
    {
        icon: '/icons/phone.svg',
        text: 'Прослушиваем звонки \n' + 'в соответствии \n' + 'с чек-листом',
    },
    {
        icon: '/icons/like.svg',
        text: 'Выявляем сильные и слабые стороны',
    },
    {
        icon: '/icons/file.svg',
        text: 'Заполняем отчет \n' + 'по каждому сотруднику',
    },
]
</script>

<style lang="scss" scoped>
.call-card {
    position: relative;
    z-index: 2;
}

.bg-line {
    width: 2px;
    height: 100%;
    position: absolute;
    z-index: 1;
    left: 50%;
    background: #d7dae2;
}
</style>
