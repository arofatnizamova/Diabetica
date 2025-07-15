<template>
    <input ref="dateInput" type="text" :placeholder="placeholder" class="form-control" :class="inputClass"
        :required="required" />
</template>

<script>
export default {
    name: 'DateInput',
    props: {
        modelValue: String,
        placeholder: {
            type: String,
            default: 'Дата'
        },
        inputClass: String,
        required: Boolean
    },
    emits: ['update:modelValue'],
    mounted() {
        this.fp = flatpickr(this.$refs.dateInput, {
            dateFormat: 'Y-m-d',
            maxDate: 'today',
            defaultDate: this.modelValue,
            onChange: ([date]) => {
                const formatted = date?.toISOString().split('T')[0] || ''
                this.$emit('update:modelValue', formatted)
            }
        })
    },
    watch: {
        modelValue(val) {
            if (this.fp && val !== this.fp.input.value) {
                this.fp.setDate(val, false)
            }
        }
    },
    unmounted() {
        if (this.fp) this.fp.destroy()
    }
}
</script>
