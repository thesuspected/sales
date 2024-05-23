<template>
    <button class='button' :class='{"primary": primary}'>
        {{ label }}
        <img v-if='primary' src='~/assets/icons/icon_arrow_primary.svg' alt='' />
        <img v-else src='~/assets/icons/icon_arrow.svg' alt='' />
    </button>
</template>

<script setup lang='ts'>
defineProps({
    label: {
        type: String,
    },
    primary: {
        type: Boolean,
    },
})
</script>

<style lang='scss' scoped>
.button {
    @apply rounded-default text-primary w-full gap-default bg-white;
    display: flex;
    height: 56px;
    justify-content: center;
    align-items: center;
    font-weight: 600;

    &.primary {
        @apply bg-primary text-white;
    }
}
</style>