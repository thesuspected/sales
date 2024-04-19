<template>
    <Section class='bg-light'>
        <Container>
            <div class='flex flex-col'>
                <h1 class='title unbounded font-bold text-4xl md:text-5xl text-center mx-auto'>
                    Как мы увеличиваем<br> <span class='text-primary'>показатели продаж</span>
                    <img src='/svg/picture_question.svg' alt='' class='title-picture' />
                </h1>
                <span class='uppercase text-pre-dark font-light text-center mx-auto pt-default'>
                    Для этого существует
                    понятный план
                    действий
                </span>
            </div>
            <Step1 />
        </Container>
    </Section>
</template>

<script setup lang='ts'>
import Section from '~/components/Section.vue'
import Container from '~/components/Container.vue'
import Step1 from '~/components/sections/steps/Step1.vue'
</script>

<style lang='scss' scoped>
.title {
    position: relative;

    &-picture {
        position: absolute;
        left: 100%;
        top: -10px;
    }
}
</style>