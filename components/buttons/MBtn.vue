<template>
    <q-btn
        unelevated
        class='base-button'
        :size='size'
        :class="{
            'w-full': fullWidth,
            capitalize: capitalize,
        }"
        :color='color'
        :text-color='textColor'
        :label='label'
        :icon='icon'
        :flat='flat'
        :icon-right='iconRight'
        :padding='padding'
        :round='round'
        :disable='disable'
        :loading='loading'
        no-caps
    >
        <slot />
    </q-btn>
</template>

<script setup lang='ts'>
const props = defineProps({
    label: {
        type: String,
    },
    color: {
        type: String,
        default: 'primary',
    },
    textColor: {
        type: String,
    },
    icon: {
        type: String,
    },
    iconRight: {
        type: String,
    },
    padding: {
        type: String,
    },
    size: {
        type: String,
        default: 'md',
    },
    round: {
        type: Boolean,
    },
    disable: {
        type: Boolean,
    },
    loading: {
        type: Boolean,
    },
    fullWidth: {
        type: Boolean,
    },
    flat: {
        type: Boolean,
    },
    capitalize: {
        type: Boolean,
    },
})
</script>

<style lang='scss' scoped>
.base-button {
    border-radius: 10px;
    font-size: 16px !important;
    font-weight: 600;

    &.capitalize {
        text-transform: capitalize;
    }

    &:deep(.q-icon) {
        font-size: 1.515em;
    }
}
</style>