<template>
    <Section class="bg-dark text-white pt-default">
        <Container class="grid grid-cols-1 lg:grid-cols-4 gap-[50px]">
            <div class="flex flex-col">
                <h1 class="text-2xl font-bold unbounded mb-small">Sales Twice</h1>
                <div class="mb-default">
                    Гарантировано увеличим продажи за три месяца обучения минимум на 17% за счет внедрения методов и
                    стратегий продаж.
                </div>
                <Socials />
            </div>
            <div class="lg:col-span-2 grid grid-cols-3">
                <div class="flex flex-col">
                    <div class="mb-3 font-bold">Ссылки</div>
                    <span
                        class="link py-1"
                        v-for="(link, key) in links"
                        :key="key"
                        @click="scrollToElementById(link.to)"
                    >
                        {{ link.label }}
                    </span>
                </div>
                <div class="flex flex-col col-span-2">
                    <div class="mb-3 font-bold">Позвоните нам</div>
                    <div class="mb-default">
                        Мы подробно и оперативно ответим на любые ваши вопросы в рабочее время с 10:00 до 20:00
                    </div>
                    <a href="tel:+79869864306">
                        <m-btn v-touch-hold:300.mouse="copyPhoneNumber" label="+7 (986) 986-43-06" />
                    </a>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="mb-5 font-bold">Запишитесь на презентацию</div>
                <m-input v-model="form.phone" placeholder="+7 (987) 654-32-10" mask="+7 (###) ###-##-##" class="mb-0" />
                <m-input v-model="form.name" placeholder="Ваше Имя" />
                <m-btn label="Оставить заявку" icon-right="arrow_forward" full-width large @click="sendRequest" />
            </div>
            <div class="pt-default lg:col-span-4">
                <hr class="text-grey" />
                <div class="flex justify-between pt-default">
                    <div>© 2024 "Sales Twice" — Продажи 2.0</div>
                    <div>
                        Создание сайта:
                        <a href="https://t.me/zuspect" class="link font-bold">zuspect</a>
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script setup lang="ts">
import Section from '~/components/Section.vue'
import Container from '~/components/Container.vue'
import Socials from '~/components/utils/Socials.vue'
import { nextTick } from 'vue'
import MBtn from '~/components/buttons/MBtn.vue'
import MInput from '~/components/form/MInput.vue'

const links = [
    {
        label: 'Экспертность',
        to: 'numbers',
    },
    {
        label: 'Услуги',
        to: 'price',
    },
    {
        label: 'Отзывы',
        to: 'clients',
    },
    {
        label: 'Команда',
        to: 'team',
    },
    {
        label: 'Контакты',
        to: 'contacts',
    },
]

const quasar = useQuasar()
const form = ref({
    phone: undefined,
    name: undefined,
})

const sendRequest = () => {
    console.log('sendRequest')
}

const scrollToElementById = async (id: string) => {
    const el = document.getElementById(id)
    await nextTick()
    if (el) {
        window.scroll({ top: el.offsetTop - 20, behavior: 'smooth' })
    }
}

const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+7 (986) 986-43-06')
    quasar.notify({
        message: 'Номер телефона скопирован',
    })
}
</script>

<style lang="scss" scoped>
.link {
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}
</style>
