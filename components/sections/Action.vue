<template>
    <Section class='bg-light'>
        <Container>
            <div
                class='p-default rounded-default bg-dark shadow-default grid grid-cols-1 lg:grid-cols-2 items-center gap-container'>
                <h2 class='unbounded text-5xl mb-default font-bold lg:p-container text-white text-center ml-[-4rem]'>
                    остались<br><span class='text-white pl-[5rem]'>вопросы?</span>
                </h2>
                <div class='flex flex-col lg:px-container'>
                    <span class='text-light'>Оставьте заявку на бесплатную презентацию, на которой вы узнаете: как проходит обучение и каких финансовых показателей вы достигнете.</span>
                    <div class='pt-default gap-default lg:gap-container grid grid-cols-2'>
                        <MaskInput
                            v-model='phone'
                            class='input' mask='+7 (###) ###-##-##'
                            placeholder='+7 (987) 654-32-10'
                        />
                        <!--                        <input v-model='name' class='input' placeholder='Ваше Имя' />-->
                        <Button label='Оставить заявку' primary @click='sendRequest' />
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script setup lang='ts'>
import Container from '~/components/Container.vue'
import Section from '~/components/Section.vue'
import Button from '~/components/buttons/Button.vue'
import MaskInput from '~/components/mask/MaskInput.vue'
import axios from 'axios'

const phone = ref()
const name = ref()

const sendRequest = async () => {
    if (phone) {
        await axios.post(`https://api.telegram.org/bot7193498527:AAFn9sfVKICmnpR85Z8cTuxsI0PVEKDpwig/sendMessage`, {
            chat_id: -4230699745,
            text: `Новая заявка на сайте от ${phone.value}`,
            parse_mode: 'HTML',
        })
    }
}
</script>

<style lang='scss' scoped>

</style>