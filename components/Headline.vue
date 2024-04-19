<template>
    <div class='flex flex-col sm:flex-row w-full align-middle justify-between mb-default'>
        <span class='text-black font-bold text-3xl mb-2'>
            <slot name='title' />
        </span>
        <span class='text-pre-dark sm:text-right'>
            <slot name='subtitle' />
        </span>
    </div>
</template>

<script setup lang='ts'>
defineProps({
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
})
</script>