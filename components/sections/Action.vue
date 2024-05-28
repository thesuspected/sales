<template>
    <Section class='bg-light'>
        <Container>
            <div class='p-default rounded-default bg-dark shadow-default grid grid-cols-1 lg:grid-cols-2 items-center'>
                <h2 class='unbounded text-5xl mb-default font-bold p-container text-white'>
                    остались<br><span class='text-white pl-[5rem]'>вопросы?</span>
                </h2>
                <div class='flex flex-col'>
                    <span class='text-light'>Оставьте заявку на бесплатную презентацию, на которой вы узнаете: как проходит обучение и каких финансовых показателей вы достигнете.</span>
                    <div class='flex py-default gap-container'>
                        <input class='input' placeholder='+7 (987) 654-32-10' />
                        <input class='input' placeholder='Ваше Имя' />
                        <Button label='Оставить заявку' primary />
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
</script>

<style lang='scss' scoped>

</style>