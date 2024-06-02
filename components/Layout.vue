<template>
    <q-layout view='hHh lpR fFf'>

        <q-header reveal class='bg-light text-dark'>
            <Container class='flex justify-between items-center header header'>
                <h1 class='text-xl font-bold'>Логотип</h1>
                <div class='gap-container hide md:flex'>
                    <span class='link' v-for='(link, key) in links' :key='key'
                          @click='scrollToElementById(link.to)'>{{ link.label
                        }}</span>
                </div>
                <div>
                    <m-btn label='+7 (987) 654-32-10' outline />
                    <q-btn class='ml-small md:hide' flat round icon='menu'
                           @click='drawerVisible = !drawerVisible' />
                </div>
            </Container>
        </q-header>

        <q-drawer v-model='drawerVisible' side='right' overlay>
            <div class='py-[12px] px-5 flex justify-end'>
                <m-btn label='+7 (987) 654-32-10' outline />
                <q-btn class='ml-small md:hide' flat round icon='menu'
                       @click='drawerVisible = !drawerVisible' />
            </div>
            <q-list bordered separator>
                <q-item clickable v-ripple v-for='(link, key) in links' :key='key'
                        @click='scrollFromDrawer(link.to)'>
                    <q-item-section>{{ link.label }}</q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container>
            <slot />
        </q-page-container>

    </q-layout>
</template>

<script setup lang='ts'>
import { nextTick, ref } from 'vue'
import MBtn from '~/components/buttons/MBtn.vue'

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

<style lang='scss' scoped>
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
</style>