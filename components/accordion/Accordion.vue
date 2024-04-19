<template>
    <div class='accordion'>
        <div class='item' v-for='(item, key) in items'>
            <div class='head' @click='updateModelValue(key)'>
                <span class='title'>{{ item.title }}</span>
                <img class='chevron' src='~/assets/icons/icon_chevron.svg' alt='' />
            </div>
            <div v-if='modelValue === key' class='content'>
                {{ item.content }}
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

import type { PropType } from 'vue'

defineProps({
    modelValue: {
        type: Number,
    },
    items: {
        type: Array as PropType<{ title: string, content: string }[]>,
    },
})
const emit = defineEmits(['update:model-value'])

const updateModelValue = (key: number) => {
    emit('update:model-value', key)
}
</script>

<style lang='scss' scoped>
.accordion {
    display: flex;
    flex-direction: column;
}

.item {
    @apply border-t border-grey;
    display: flex;
    flex-direction: column;

    .head {
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 10px 0;
    }

    .content {
        @apply text-pre-dark;
        font-size: 12px;
        line-height: 18px;
        padding-bottom: 10px;
        transition: all .3s cubic-bezier(.25, .8, .5, 1);
    }
}
</style>