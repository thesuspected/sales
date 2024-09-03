<template>
    <Section class="bg-white">
        <Container class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-5 flex flex-col">
                <h2 class="unbounded text-5xl mb-default font-bold">
                    <span class="text-primary">пакеты</span>
                    услуг
                </h2>
                <br />
                <span class="lg:w-10/12">
                    <b>Базовый</b> включает в себя тренинг по продажам, обучение сотрудников на платформе с проверкой
                    домашнего задания и поддержку в командном<br />
                    чате в течение трех месяцев.
                </span>
                <br />
                <span class="lg:w-10/12">
                    <b class="text-primary">Премиум</b> включает в себя все вышеперечисленное из базового пакета,
                    прослушивание звонков с контролем качества и еженедельные онлайн-встречи с разбором ошибок на
                    протяжении трех месяцев, а также два тренинга по запросу на выбор:
                </span>
                <div class="flex gap-default mt-default flex-wrap mb-default">
                    <m-btn
                        v-for="(training, key) in trainings"
                        :key="key"
                        :label="training.title"
                        outline
                        color="pre-dark"
                    >
                        <q-popup-proxy>
                            <div class="card bg-white" style="max-width: 400px">
                                <span class="font-bold">{{ training.title }}</span>
                                <span>{{ training.text }}</span>
                            </div>
                        </q-popup-proxy>
                    </m-btn>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-container">
                <div v-for="(card, key) in cards" :key="key" class="service-card">
                    <div class="flex justify-center pb-small items-center border-b border-grey">
                        <img alt="" :src="card.icon" />
                        <h3 class="unbounded text-3xl font-bold text-primary">{{ card.title }}</h3>
                    </div>
                    <!--                    <h3 class='unbounded text-3xl font-bold self-center pt-small pb-7'>{{ card.price }}</h3>-->
                    <div class="flex flex-col items-center mb-default mt-7">
                        <div
                            v-for="(training, key) in card.trainings"
                            :key="key"
                            class="flex gap-default items-start mb-small"
                        >
                            <img src="/icons/check.svg" alt="" />
                            <div class="flex flex-col w-[240px]">
                                <span class="font-bold text-xl">{{ training.name }}</span>
                                <span class="text-secondary text-sm" v-html="training.value"></span>
                            </div>
                        </div>
                    </div>
                    <span class="h-[24px] text-center text-primary font-bold mb-small">{{ card.aboveButton }}</span>
                    <m-btn
                        label="Оставить заявку"
                        icon-right="arrow_forward"
                        full-width
                        large
                        @click="clickLeaveRequest(card.title)"
                    />
                </div>
            </div>
        </Container>
    </Section>
</template>

<script setup lang="ts">
import Section from '~/components/Section.vue'
import Container from '~/components/Container.vue'
import MBtn from '~/components/buttons/MBtn.vue'

const emit = defineEmits(['click-leave-request'])
const clickLeaveRequest = (title: string) => {
    emit('click-leave-request', `Пакеты услуг, ${title}, кнопка "Оставить заявку"`)
}

const trainings = [
    {
        title: 'Личная эффективность',
        text: 'Какими бы вы навыками продаж не обладали, денежный потолок упирается в ограничивающие установки, отсутствие уверенности, размытые цели и отсутствие четкого плана. На данном тренинге мы будем всесторонне прорабатывать свою личность, что в свою очередь очень быстро улучшит показатели, причем во всех областях.',
    },
    {
        title: 'Командообразование',
        text: 'В любой команде возникают споры, разногласия и конфликты. Рано или поздно, это может вспыхнуть в большое пламя. Чтобы этого не допустить существует тренинг по командообразованию, который способен создать не просто дружную команду, а команду мечты.',
    },
    {
        title: 'Эмоциональная разгрузка',
        text: 'Напряжение и стресс - это частые спутники в работе и если от них вовремя не избавиться, то может произойти выгорание, из которого выбраться довольно сложно. Благодаря тренингу можно избежать подобной ситуации и продолжить работать дальше в комфортном режиме.',
    },
]
const cards = [
    {
        icon: '/icons/base.svg',
        title: 'Базовый',
        price: '180 000 ₽',
        aboveButton: ' ',
        trainings: [
            {
                name: 'Тренинг по продажам',
                value: '8 часов, 19 тем, теория и практика,<br> интенсив для менеджеров',
            },
            {
                name: 'Обучение на платформе',
                value: 'закрепление материала, проверка<br> заданий и составление отчетов',
            },
            {
                name: 'Командный чат',
                value: 'обратная связь и поддержка<br> в течение 3-х месяцев',
            },
        ],
    },
    {
        icon: '/icons/premium.svg',
        title: 'Премиум',
        price: '360 000 ₽',
        aboveButton: '+ все из базового пакета',
        trainings: [
            {
                name: 'Два тренинга по запросу',
                value: 'тренинги по желанию заказчика<br> на любые темы',
            },
            {
                name: 'Прослушивание звонков',
                value: 'контроль и отработка ошибок<br> на реальных клиентах',
            },
            {
                name: 'Онлайн-встречи',
                value: 'еженедельные созвоны<br> с разбором ошибок',
            },
        ],
    },
]
</script>

<style lang="scss" scoped>
.training {
    @apply rounded-default py-small text-pre-dark;
    border: 1px solid #d7dae2;
    padding-left: 1rem;
    padding-right: 1rem;
}

.service-card {
    @apply rounded-default p-default flex flex-col items-stretch;
    border: 1px solid #d7dae2;
}
</style>
