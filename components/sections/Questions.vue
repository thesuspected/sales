<template>
    <q-dialog v-model='visible'>
        <div class='dialog-card'>
            <q-stepper
                v-model='step'
                ref='stepper'
                color='primary'
                header-class='font-medium'
                header-nav
                animated
                vertical
            >
                <q-step
                    :name='1'
                    title='Сотрудники'
                    :prefix='1'
                    :done='step > 1'
                >
                    <div class='text-xl font-bold px-small'>
                        Сколько человек в вашем отделе продаж?
                    </div>
                    <q-slider
                        v-model='form.employeeCount'
                        :min='1'
                        :max='40'
                        label
                        label-always
                        class='mt-container px-small'
                    />
                </q-step>

                <q-step
                    :name='2'
                    title='Руководитель'
                    :prefix='2'
                    :done='!!form.rop'
                >
                    <div class='text-xl font-bold px-small'>
                        Кто выполняет функцию руководителя отдела продаж?
                    </div>
                    <q-option-group
                        :options='ropOptions'
                        type='radio'
                        v-model='form.rop'
                        class='mt-small'
                    />
                </q-step>

                <q-step
                    :name='3'
                    title='Документация'
                    :prefix='3'
                    :done='!!form.doc'
                >
                    <div class='text-xl font-bold px-small'>
                        Есть ли необходимая документация отдела продаж?
                        (схемы, модели, регламенты, инструкции, отчеты
                        по продажам и т.п.)
                    </div>
                    <q-option-group
                        :options='docOptions'
                        type='radio'
                        v-model='form.doc'
                        class='mt-small'
                    />
                </q-step>

                <q-step
                    :name='4'
                    title='Аналитика'
                    :prefix='4'
                    :done='!!form.analytic'
                >
                    <div class='text-xl font-bold px-small'>
                        Ведется ли регулярная аналитика показателей звонков/продаж/переписок менеджеров?
                    </div>
                    <q-option-group
                        :options='analyticOptions'
                        type='radio'
                        v-model='form.analytic'
                        class='mt-small'
                    />
                </q-step>

                <q-step
                    :name='5'
                    title='Система найма'
                    :prefix='5'
                    :done='!!form.system'
                >
                    <div class='text-xl font-bold px-small'>
                        Есть ли система найма, адаптации, развития менеджеров
                        по продажам и РОП?
                    </div>
                    <q-option-group
                        :options='defaultOptions'
                        type='radio'
                        v-model='form.system'
                        class='mt-small'
                    />
                </q-step>

                <q-step
                    :name='6'
                    title='Бизнес-процессы'
                    :prefix='6'
                    :done='!!form.business'
                >
                    <div class='text-xl font-bold px-small'>
                        Выстроены ли бизнес-процессы отдела продаж? (поиск клиентов, подключение к работе, удержание,
                        развитие)
                    </div>
                    <q-option-group
                        :options='businessOptions'
                        type='radio'
                        v-model='form.business'
                        class='mt-small'
                    />
                </q-step>

                <q-step
                    :name='7'
                    title='Результат'
                    :prefix='7'
                    :done='!!form.result'
                >
                    <div class='text-xl font-bold px-small'>
                        Какой результат хотите получить?
                    </div>
                    <q-input
                        v-model='form.result'
                        filled
                        type='textarea'
                        class='mt-small px-small'
                        placeholder='Постарайтесь подробнее описать с чем возникают проблемы и каких улучшений вы ожидаете'
                    />
                </q-step>

                <q-step
                    :name='8'
                    title='Товар/Услуга'
                    :prefix='8'
                    :done='!!form.business'
                >
                    <div class='text-xl font-bold px-small'>
                        Какой товар или услугу продаете?
                    </div>
                    <q-input
                        v-model='form.product'
                        filled
                        class='mt-small px-small'
                        placeholder='Введите товары/услуги'
                    />
                </q-step>

                <q-step
                    :name='9'
                    title='Сайт'
                    :prefix='9'
                    :done='!!form.site'
                >
                    <div class='text-xl font-bold px-small'>
                        Укажите ссылку на сайт компании (если есть)
                    </div>
                    <q-input
                        v-model='form.site'
                        filled
                        class='mt-small px-small'
                        placeholder='Вставьте ссылку'
                    />
                </q-step>

                <template v-slot:navigation>
                    <q-stepper-navigation class='flex justify-between'>
                        <m-btn v-if='step > 1' outline color='primary' @click='$refs.stepper.previous()'
                               label='Назад' />
                        <q-space />
                        <m-btn @click='$refs.stepper.next()' color='primary'
                               :label="step === 4 ? 'Завершить' : 'Далее'" />
                    </q-stepper-navigation>
                </template>
            </q-stepper>
        </div>
    </q-dialog>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import MBtn from '~/components/buttons/MBtn.vue'

const stepper = ref()
const visible = ref(true)
const step = ref(1)
const form = ref({
    employeeCount: 20,
    rop: undefined,
    doc: undefined,
    analytic: undefined,
    system: undefined,
    business: undefined,
    result: undefined,
    product: undefined,
    site: undefined,
})

const ropOptions = [
    {
        label: 'Я сам',
        value: 'Я сам',
    },
    {
        label: 'Есть РОП',
        value: 'Есть РОП',
    },
    {
        label: 'Никто',
        value: 'Никто',
    },
]

const docOptions = [
    {
        label: 'В полном объеме',
        value: 'В полном объеме',
    },
    {
        label: 'Частично',
        value: 'Частично',
    },
    {
        label: 'Отсутствует',
        value: 'Отсутствует',
    },
]

const analyticOptions = [
    {
        label: 'Да, регулярно',
        value: 'Да, регулярно',
    },
    {
        label: 'В редких случаях',
        value: 'В редких случаях',
    },
    {
        label: 'Не ведется',
        value: 'Не ведется',
    },
]

const businessOptions = [
    {
        label: 'Да, как часы',
        value: 'Да, как часы',
    },
    {
        label: 'Да, но работают плохо',
        value: 'Да, но работают плохо',
    },
    {
        label: 'Нет выстроенных процессов',
        value: 'Нет выстроенных процессов',
    },
]

const defaultOptions = [
    {
        label: 'Да',
        value: 'Да',
    },
    {
        label: 'Нет',
        value: 'Нет',
    },
    {
        label: 'Затрудняюсь ответить',
        value: 'Затрудняюсь ответить',
    },
]
</script>

<style lang='scss' scoped>
.dialog-card {
    border-radius: 0.625rem;
}
</style>