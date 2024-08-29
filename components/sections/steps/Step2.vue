<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-container">
        <div class="col-span-2 flex flex-col">
            <h2 class="unbounded text-5xl mb-default font-bold">шаг 2</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-container flex-grow">
                <div class="education-card card bg-white col-span-3 md:col-span-2 shadow-default">
                    <div class="flex flex-col gap-default education-card-inner flex-grow">
                        <div class="flex items-center gap-default text-primary size-30px flex-nowrap">
                            <img src="~/assets/icons/step_edu.svg" alt="" />
                            Обучающая платформа
                        </div>
                        <span class="md:w-10/12 pb-default">
                            По окончанию тренинга создаем <b class="text-primary">командный чат</b> и добавляем
                            участников на обучающую платформу. Мы будем отслеживать выполнение домашних заданий, давать
                            обратную связь, обмениваться опытом и достижениями на протяжении <b>трёх месяцев.</b>
                            <br /><br />
                            Настрой и показатели в команде будут постепенно улучшаться. В любой момент вы сможете
                            посмотреть отчеты по сотрудникам и вносить коррекции в их работу. 
                        </span>
                    </div>
                </div>
                <div class="hide md:block">
                    <div class="card bg-white month-card h-full shadow-default">
                        <div class="flex items-center justify-center gap-default size-30px mb-small">3 месяца</div>
                        <span
                            v-for="advantage in educationAdvantages"
                            class="border-t last:border-b border-grey py-small"
                            >{{ advantage }}</span
                        >
                    </div>
                </div>
            </div>
            <div class="timeline-card shadow-default">
                <div class="grid grid-cols-3 flex-grow">
                    <div v-for="month in currentMonths" class="timeline-card-month">{{ month }}</div>
                </div>
                <div class="timeline-card-hr"></div>
            </div>
        </div>
        <div class="mockup">
            <img class="image" src="~/assets/images/mockup.png" alt="" />
            <m-btn
                label="Оставить заявку на тренинг"
                class="shadow-default"
                icon-right="arrow_forward"
                full-width
                shine-effect
                large
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import MBtn from '~/components/buttons/MBtn.vue'

const educationAdvantages = [
    'Обучение на платформе',
    'Отслеживание результатов',
    'Обратная связь в чате',
    'Проверка заданий',
    'Обмен опытом',
]
const months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
]
const month = new Date().getMonth()
const monthKeys = [(month + 1) % 11, (month + 2) % 11, (month + 3) % 11]
const currentMonths = monthKeys.map((key) => months[key])
</script>

<style lang="scss" scoped>
.mockup {
    display: flex;
    flex-direction: column;
    align-items: center;

    .image {
        flex-grow: 1;
    }
}

.education-card {
    padding-bottom: 0;

    &-inner {
        @apply border-l-[3px] border-primary pl-default;
    }
}

.month-card {
    gap: 0;
}

.timeline-card {
    @apply rounded-default bg-white mt-default pb-small px-default;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 56px;
    position: relative;

    &-month {
        @apply text-primary font-medium h-full border-l-[3px] border-primary;
        line-height: 34px;
        z-index: 2;
        padding-left: 10px;
    }

    &-hr {
        @apply w-full h-3 bg-accent-secondary rounded-default;
        position: absolute;
        z-index: 1;
        bottom: 10px;
        width: calc(100% - 40px);
    }
}

.hide {
    display: none;
}

@media (min-width: 768px) {
    .md\:block {
        display: block;
    }
}
</style>
