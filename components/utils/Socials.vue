<template>
    <div class="flex gap-default mr-small">
        <a href="https://wa.me/79869864306">
            <m-btn outline class="pl-[6px] pr-[5px] pb-[5px]" :style="`color: ${whatsappColor} !important`">
                <img src="/svg/whatsapp_logo.png" class="h-[32px]" alt="" />
            </m-btn>
        </a>
        <a href="https://t.me/MaslyakovM">
            <m-btn outline class="pl-[5px] pr-[6px] pb-[5px]" :style="`color: ${telegramColor} !important`">
                <img src="/svg/telegram_logo.png" class="h-[32px]" alt="" />
            </m-btn>
        </a>
    </div>
</template>

<script setup lang="ts">
import MBtn from '~/components/buttons/MBtn.vue'

defineProps({
    whatsappColor: {
        type: String,
        default: '#28d146',
    },
    telegramColor: {
        type: String,
        default: '#0088cc',
    },
})
</script>

<style lang="scss" scoped></style>
