<template>
    <q-dialog :model-value="modelValue" @hide="closeDialog" transition-show="jump-up" transition-hide="jump-down">
        <q-card class="dialog-card p-default shadow-lg">
            <q-card-section class="flex flex-col align-middle q-pb-none">
                <img
                    src="/svg/congrats.svg"
                    alt=""
                    class="card-illustration mb-small animate__animated animate__bounceIn"
                />
                <div
                    class="text-h6 font-bold text-primary title-text text-center title-text animate__animated animate__fadeInDown animate__delay-1s"
                >
                    Спасибо,&nbsp;что выбрали нас!
                </div>
                <div class="text-center pb-small subtitle-text animate__animated animate__fadeInDown animate__delay-2s">
                    Заявка успешно отправлена, ожидайте обратного звонка
                </div>
            </q-card-section>
            <q-btn icon="close" class="close-button" color="black" flat round dense @click="closeDialog" />
        </q-card>
    </q-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
})
const emit = defineEmits(['update:model-value'])

const closeDialog = () => {
    emit('update:model-value', false)
}
</script>

<style lang="scss" scoped>
.dialog-card {
    border-radius: 0.625rem;
}

.close-button {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 2;
}

.card-illustration {
    max-height: 250px;
    animation-duration: 2s;
}

.title-text {
    line-height: 1.2;
    animation-duration: 2s;
}

.subtitle-text {
    animation-duration: 2s;
}
</style>
