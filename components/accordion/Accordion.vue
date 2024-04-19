<template>
    <div class='accordion' ref='accordionRef'>
        <div class='item' v-for='(item, key) in items' v-auto-animate>
            <div class='head' @click='updateModelValue(key)'>
                <span class='title'>{{ item.title }}</span>
                <img class='chevron' :class='{"rotate-90": modelValue === key}' src='~/assets/icons/icon_chevron.svg'
                     alt='' />
            </div>
            <div v-if='modelValue === key' class='content'>
                {{ item.content }}
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { vAutoAnimate } from '@formkit/auto-animate'

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

const accordionRef = ref()

const updateModelValue = (key: number) => {
    emit('update:model-value', key)
}

// onMounted(() => {
//     autoAnimate(accordionRef.value)
// })
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

    &:last-child .head {
        padding-bottom: 0;
    }

    .head {
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 10px 0;

        .chevron {
            transition: all .3s cubic-bezier(.25, .8, .5, 1);
        }
    }

    .content {
        @apply text-pre-dark;
        font-size: 12px;
        line-height: 18px;
        padding-bottom: 10px;
    }
}
</style>