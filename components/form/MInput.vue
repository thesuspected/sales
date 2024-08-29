<template>
    <div class="form-item">
        <div v-if="label" class="form-label">{{ label }}</div>
        <q-input
            :model-value="modelValue"
            outlined
            class="form-input"
            :class="{ textarea: textarea }"
            :input-style="fontSize ? `font-size: ${fontSize}` : undefined"
            :placeholder="placeholder"
            :autogrow="autogrow"
            :mask="mask"
            :prefix="prefix"
            :suffix="suffix"
            :inputmode="inputmode"
            :hint="hint"
            :readonly="readonly"
            :disable="disabled"
            :lazy-rules="lazyRules"
            :rules="rules"
            :dense="dense"
            @update:model-value="updateModelValue"
        >
            <template v-if="customPrepend" v-slot:prepend>
                <slot name="prepend" />
            </template>
            <template v-if="customAppend" v-slot:append>
                <slot name="append" />
            </template>
        </q-input>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ValidationRule } from 'quasar'

const props = defineProps({
    modelValue: {
        type: [String, Number],
    },
    label: {
        type: String,
    },
    placeholder: {
        type: String,
    },
    autogrow: {
        type: Boolean,
    },
    textarea: {
        type: Boolean,
    },
    customPrepend: {
        type: Boolean,
    },
    prepend: {
        type: String,
    },
    customAppend: {
        type: Boolean,
    },
    append: {
        type: String,
    },
    mask: {
        type: String,
    },
    prefix: {
        type: String,
    },
    suffix: {
        type: String,
    },
    inputmode: {
        type: String,
    },
    fontSize: {
        type: String,
    },
    hint: {
        type: String,
    },
    number: {
        type: Boolean,
    },
    maxValue: {
        type: Number,
    },
    readonly: {
        type: Boolean,
    },
    disabled: {
        type: Boolean,
    },
    dense: {
        type: Boolean,
    },
    rules: {
        type: Array as PropType<ValidationRule[]>,
        default: undefined,
    },
    lazyRules: {
        type: [Boolean, String] as PropType<Boolean | String>,
    },
})
const emit = defineEmits(['update:model-value'])

const updateModelValue = (value?: string) => {
    emit('update:model-value', value)
}
</script>

<style lang="scss" scoped>
.form-item {
    .form-label {
        display: flex;
        font-size: 16px;
        font-weight: 600;
        line-height: 1rem;
        padding-bottom: 10px;
    }

    .form-input {
        padding-bottom: 15px;

        &.textarea {
            &:deep(.q-field__control) {
                min-height: 90px;
            }
        }

        &:deep(.q-field__control) {
            border-radius: 10px;
            background: white;
            font-size: 16px;

            &:before {
                border: none;
            }
        }
    }
}
</style>
<style lang="scss">
.q-field--error .q-field__bottom {
    font-weight: bold;
}
</style>
