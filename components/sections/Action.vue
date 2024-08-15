<template>
    <Section class="bg-light">
        <Container>
            <div
                class="p-default rounded-default bg-dark shadow-default grid grid-cols-1 lg:grid-cols-5 items-center gap-container"
            >
                <h2
                    class="unbounded text-5xl mb-default font-bold lg:p-container text-white text-center ml-[-2rem] col-span-2"
                >
                    остались<br /><span class="text-white pl-[5rem]">вопросы?</span>
                </h2>
                <div class="flex flex-col lg:px-container col-span-3">
                    <span class="text-light"
                        >Оставьте заявку на бесплатную презентацию, на которой вы узнаете: как проходит обучение и каких
                        финансовых показателей вы достигнете.</span
                    >
                    <div class="pt-default gap-default lg:gap-container grid grid-cols-1 lg:grid-cols-3">
                        <m-input v-model="form.phone" placeholder="+7 (987) 654-32-10" mask="+7 (###) ###-##-##" />
                        <m-input v-model="form.name" placeholder="Ваше Имя" mask="+7 (###) ###-##-##" />
                        <m-btn label="Оставить заявку" full-width large @click="sendRequest" />
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script setup lang="ts">
import Container from '~/components/Container.vue'
import Section from '~/components/Section.vue'
import axios from 'axios'
import MBtn from '~/components/buttons/MBtn.vue'
import MInput from '~/components/form/MInput.vue'

const form = ref({
    phone: undefined,
    name: undefined,
})

const sendRequest = async () => {
    if (form.value.phone) {
        await axios.post(`https://api.telegram.org/bot7193498527:AAFn9sfVKICmnpR85Z8cTuxsI0PVEKDpwig/sendMessage`, {
            chat_id: -4230699745,
            text: `Новая заявка на сайте: ${form.value.name}, ${form.value.phone}`,
            parse_mode: 'HTML',
        })
    }
}
</script>

<style lang="scss" scoped></style>
