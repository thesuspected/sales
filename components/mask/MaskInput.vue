<template>
    <input
        v-model='innerValue'
        class='input'
        :placeholder='placeholder'
        @input='handleInput'
    />
</template>

<script setup lang='ts'>
const innerValue = ref()
const maskDefinitions: Record<string, any> = {
    '#': { pattern: /\d/ },
    'X': { pattern: /[0-9a-zA-Z]/ },
    'S': { pattern: /[a-zA-Z]/ },
    'A': { pattern: /[a-zA-Z]/, transform: (v: string) => v.toLocaleUpperCase() },
    'a': { pattern: /[a-zA-Z]/, transform: (v: string) => v.toLocaleLowerCase() },
    '!': { escape: true },
}
const props = defineProps({
    modelValue: {
        type: String,
    },
    mask: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
    },
})
const emit = defineEmits(['update:model-value'])

const handleInput = (event: any) => {
    const maskedValue = applyMask(event.target.value)
    innerValue.value = maskedValue
    emit('update:model-value', maskedValue)
}

const applyMask = (value: string) => {
    const maskedValue = []
    let unmaskedIndex = 0
    let maskIndex = 0

    while (unmaskedIndex < value.length && maskIndex < props.mask.length) {
        const maskChar = props.mask[maskIndex]
        const unmaskedChar = value[unmaskedIndex]
        const maskDefinition = maskDefinitions[maskChar]

        if (maskDefinition) {
            if (maskDefinition.escape) {
                maskIndex++
                maskedValue.push(value[unmaskedIndex])
                unmaskedIndex++
            } else if (maskDefinition.pattern.test(unmaskedChar)) {
                const transformedChar = maskDefinition.transform ? maskDefinition.transform(unmaskedChar) : unmaskedChar
                maskedValue.push(transformedChar)
                unmaskedIndex++
            } else {
                break
            }
        } else {
            maskedValue.push(maskChar)
            if (maskChar === unmaskedChar) {
                unmaskedIndex++
            }
        }
        maskIndex++
    }

    return maskedValue.join('')
}
</script>
