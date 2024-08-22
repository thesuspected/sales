<template>
    <q-layout view="hHh lpR fFf">
        <q-header reveal class="bg-light text-dark">
            <Container class="flex justify-between items-center header header">
                <h1 class="text-xl font-bold unbounded cursor-pointer" @click="scrollToElementById('main')">
                    Sales Twice
                </h1>
                <div class="gap-container hide md:flex">
                    <span class="link" v-for="(link, key) in links" :key="key" @click="scrollToElementById(link.to)">
                        {{ link.label }}
                    </span>
                </div>
                <div class="flex">
                    <Socials class="hide md:flex" />
                    <a href="tel:+79869864306">
                        <m-btn v-touch-hold:300.mouse="copyPhoneNumber" label="+7 (986) 986-43-06" outline />
                    </a>
                    <q-btn
                        class="ml-small md:hide mr-[-10px]"
                        flat
                        round
                        icon="menu"
                        @click="drawerVisible = !drawerVisible"
                    />
                </div>
            </Container>
        </q-header>

        <q-drawer v-model="drawerVisible" side="right" overlay :width="260">
            <div class="py-3 pr-5 mr-[-10px] flex justify-end">
                <a href="tel:+79869864306">
                    <m-btn v-touch-hold:300.mouse="copyPhoneNumber" label="+7 (986) 986-43-06" outline />
                </a>
                <q-btn class="ml-small md:hide" flat round icon="menu" @click="drawerVisible = !drawerVisible" />
            </div>
            <div class="px-4 uppercase text-pre-dark font-light mt-4">Меню</div>
            <q-list>
                <div v-for="(link, key) in links" :key="key" v-ripple @click="scrollFromDrawer(link.to)">
                    <q-separator v-if="key !== 0" spaced inset style="margin: -1px 16px 0 16px" />
                    <q-item clickable>
                        <q-item-section>{{ link.label }}</q-item-section>
                    </q-item>
                </div>
            </q-list>
            <div class="px-4 uppercase text-pre-dark font-light mt-4">Контакты</div>
            <Socials class="pl-[16px] mt-small" />
            <q-space />
            <div class="px-4">
                Разработка сайта:
                <a href="https://t.me/zuspect" class="link font-bold">zuspect</a>
            </div>
            <div class="px-4 flex gap-default mt-small mb-default">
                <m-btn label="Оставить заявку" icon-right="arrow_forward" full-width />
                <m-btn label="Хочу презентацию" outline full-width />
            </div>
        </q-drawer>

        <q-page-container>
            <slot />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import MBtn from '~/components/buttons/MBtn.vue'
import Socials from '~/components/utils/Socials.vue'

const quasar = useQuasar()
const drawerVisible = ref(false)

const scrollToElementById = async (id: string) => {
    const el = document.getElementById(id)
    await nextTick()
    if (el) {
        window.scroll({ top: el.offsetTop - 20, behavior: 'smooth' })
    }
}
const scrollFromDrawer = (id: string) => {
    drawerVisible.value = false
    scrollToElementById(id)
}
const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+7 (986) 986-43-06')
    quasar.notify({
        message: 'Номер телефона скопирован',
    })
}

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
</script>

<style lang="scss" scoped>
.hide {
    display: none;
}

@media (min-width: 768px) {
    .md\:flex {
        display: flex;
    }
}

@media (min-width: 768px) {
    .md\:hide {
        display: none !important;
    }
}

.header {
    padding-top: 12px;
    padding-bottom: 12px;
}

.link {
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

:deep(.q-drawer__content) {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
}
</style>
