<template>
    <button class='button'>
        {{ label }}
        <img src='~/assets/icons/icon_arrow.svg' alt='' />
    </button>
</template>

<script setup lang='ts'>
defineProps({
    label: {
        type: String,
    },
})
</script>

<style lang='scss' scoped>
.button {
    @apply rounded-default text-primary w-full gap-default;
    display: flex;
    height: 56px;
    justify-content: center;
    align-items: center;
    background: white;
    font-weight: 600;
}
</style>