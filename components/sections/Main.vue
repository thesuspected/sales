<template>
    <Section class='bg-light'>
        <Container class='main-container'>
            <div class='grid grid-cols-1 lg:grid-cols-2 main items-center lg:py-container'>
                <div class='order-last lg:order-first'>
                    <h1 class='unbounded text-5xl md:main-title font-bold mb-default lg:mb-container'>Отдел<br>продаж
                        2.0</h1>
                    <p class='lg:text-xl'>Наша задача — прокачать отдел продаж, внедрив необходимые инструменты
                        и передать
                        собственнику бизнеса в виде готовых инструкций и рекомендаций.</p>
                    <div class='mt-default lg:mt-container flex gap-default lg:gap-container'>
                        <m-btn label='Оставить заявку' icon-right='arrow_forward' large />
                        <m-btn label='Записаться на презентацию' outline large />
                    </div>
                </div>
                <img class='justify-self-center w-full lg:px-container' src='/svg/sales-boat.svg' alt=''>
            </div>
        </Container>
    </Section>
</template>

<script setup lang='ts'>
import Container from '~/components/Container.vue'
import Section from '~/components/Section.vue'
import MBtn from '~/components/buttons/MBtn.vue'
</script>

<style lang='scss' scoped>
.main {
    //padding: 100px 0;

    &-title {
        line-height: 1;
        font-size: 64px;
    }

    &-container {
        padding-top: 0;
    }
}
</style>