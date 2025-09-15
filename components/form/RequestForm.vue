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
        <m-btn full-width large :loading="isLoading" @click="sendRequest">
            <q-icon
                v-if="isComplete"
                name="check"
                size="30px"
                class="animate__animated animate__zoomIn animate__fast"
            />
            <span v-else>Отправить</span>
        </m-btn>
    </q-form>
</template>

<script setup lang="ts">
import MBtn from '~/components/buttons/MBtn.vue'
import MInput from '~/components/form/MInput.vue'
import axios from 'axios'
import { timeout } from '~/utils/utils'

const props = defineProps({
    source: {
        type: String,
    },
})
const emit = defineEmits(['send-request'])

const isComplete = ref(false)
const isLoading = ref(false)
const formRef = ref<HTMLFormElement | null>(null)
const form = ref({
    phone: undefined,
    name: undefined,
})

const requiredRule = [(val: string) => !!val || '']

const { NUXT_BOT_TOKEN } = process.env
const sendRequest = async () => {
    formRef.value?.validate().then(async (success: boolean) => {
        if (success) {
            isLoading.value = true
            await axios.post(`https://api.telegram.org/${NUXT_BOT_TOKEN}/sendMessage`, {
                chat_id: -4230699745,
                text: `Новая заявка на сайте: ${form.value.name}, ${form.value.phone}\nИсточник: ${props.source}`,
                parse_mode: 'HTML',
            })
            await timeout(300)
            isLoading.value = false
            isComplete.value = true
            // TODO: Записать данные в localStorage
            emit('send-request')
        }
    })
}
</script>

<style lang="scss" scoped></style>
