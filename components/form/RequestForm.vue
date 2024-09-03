<template>
    <q-form ref="formRef" class="flex flex-col justify-center">
        <slot name="default" />
        <m-input
            v-model="form.phone"
            placeholder="+7 (987) 654-32-10"
            mask="+7 (###) ###-##-##"
            lazy-rules="ondemand"
            :without-border="false"
            :rules="requiredRule"
        />
        <m-input
            v-model="form.name"
            placeholder="Ваше Имя"
            lazy-rules="ondemand"
            :without-border="false"
            :rules="requiredRule"
        />
        <m-btn label="Отправить" full-width large @click="sendRequest" />
    </q-form>
</template>

<script setup lang="ts">
import MBtn from '~/components/buttons/MBtn.vue'
import MInput from '~/components/form/MInput.vue'
import axios from 'axios'

const props = defineProps({
    source: {
        type: String,
    },
})
const emit = defineEmits(['send-request'])

const formRef = ref<HTMLFormElement | null>(null)
const form = ref({
    phone: undefined,
    name: undefined,
})

const requiredRule = [(val: string) => !!val || '']

const sendRequest = async () => {
    formRef.value?.validate().then(async (success: boolean) => {
        if (success) {
            await axios.post(`https://api.telegram.org/bot7193498527:AAFn9sfVKICmnpR85Z8cTuxsI0PVEKDpwig/sendMessage`, {
                chat_id: -4230699745,
                text: `Новая заявка на сайте: ${form.value.name}, ${form.value.phone}\nИсточник: ${props.source}`,
                parse_mode: 'HTML',
            })
            // TODO: Записать данные в localStorage
            emit('send-request')
        }
    })
}
</script>

<style lang="scss" scoped></style>
