<template>
    <Section class="bg-light">
        <Container class="main-container">
            <div class="grid grid-cols-1 lg:grid-cols-2 main items-center lg:py-container">
                <div class="order-last lg:order-first">
                    <h1 class="unbounded text-5xl md:text-6xl font-bold mb-default lg:mb-container">
                        Отдел<br />продаж 2.0
                    </h1>
                    <p class="lg:text-xl">
                        Наша задача — прокачать отдел продаж, внедрив необходимые инструменты и передать собственнику
                        бизнеса в виде готовых инструкций и рекомендаций.
                    </p>
                    <div class="mt-default lg:mt-container flex gap-default lg:gap-container">
                        <m-btn
                            label="Оставить заявку"
                            icon-right="arrow_forward"
                            shine-effect
                            large
                            @click="clickLeaveRequest"
                        />
                        <m-btn label="Записаться на презентацию" outline large @click="clickLeavePresentation" />
                    </div>
                </div>
                <!--                <img class='justify-self-center w-full lg:px-container' src='/svg/main-picture.svg' alt=''>-->
                <object
                    class="justify-self-center w-full lg:px-container"
                    type="image/svg+xml"
                    data="/svg/main-picture.svg"
                ></object>
            </div>
        </Container>
    </Section>
</template>

<script setup lang="ts">
import Container from '~/components/Container.vue'
import Section from '~/components/Section.vue'
import MBtn from '~/components/buttons/MBtn.vue'

const emit = defineEmits(['click-leave-request', 'click-leave-presentation'])
const clickLeaveRequest = () => {
    emit('click-leave-request', 'Приветственный блок, кнопка "Оставить заявку"')
}
const clickLeavePresentation = () => {
    emit('click-leave-presentation', 'Приветственный блок, кнопка "Записаться на презентацию"')
}
</script>

<style lang="scss" scoped>
.main {
    &-container {
        padding-top: 0;
    }
}
</style>
