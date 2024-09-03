<template>
    <q-dialog :model-value="modelValue" @hide="closeDialog">
        <q-card class="dialog-card p-small shadow-lg">
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6 font-bold text-black unbounded title-text">Оставьте&nbsp;заявку на&nbsp;услуги</div>
            </q-card-section>
            <q-btn icon="close" class="close-button" color="black" flat round dense @click="closeDialog" />

            <q-card-section class="grid grid-cols-1 lg:grid-cols-2 gap-container pt-0 lg:pt-4">
                <img
                    src="/svg/partnering.svg"
                    alt=""
                    class="card-illustration lg:order-last object-cover object-top h-[210px] lg:h-full lg:object-contain"
                />
                <RequestForm :source="source" @send-request="sendRequest">
                    <div class="pb-small">Гарантировано увеличим продажи за три месяца обучения</div>
                </RequestForm>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script setup lang="ts">
import RequestForm from '~/components/form/RequestForm.vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    source: {
        type: String,
    },
})
const emit = defineEmits(['update:model-value', 'send-request'])

const closeDialog = () => {
    emit('update:model-value', false)
}
const sendRequest = () => {
    emit('send-request')
}
</script>

<style lang="scss" scoped>
.dialog-card {
    border-radius: 0.625rem;
}

.border-input {
    input {
        border: 1px solid grey;
    }
}

.close-button {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 2;
}

.title-text {
    line-height: 1.2;
}

.card-illustration {
    align-self: end;
    width: 100%;
}
</style>
