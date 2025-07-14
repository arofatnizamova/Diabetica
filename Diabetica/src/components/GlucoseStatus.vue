<template>
    <template v-if="info">
        <p v-if="inline" :class="['text-sm mt-3 mb-0', info.textClass]">
            Статус: <span class="status">{{ info.status }}</span>
        </p>
        <slot v-else :info="info"></slot>
    </template>
</template>

<script>
export default {
    name: 'GlucoseStatus',
    props: {
        level: {
            type: Number,
            required: true
        },
        inline: {
            type: Boolean,
            default: true
        },
        ranges: {
            type: Array,
            default: () => [
                {
                    max: 3.9,
                    status: 'Гипогликемия',
                    textClass: 'text-info',
                    bgClass: 'bg-blue text-info-custom'
                },
                {
                    min: 3.9,
                    max: 7.0,
                    status: 'В Норме',
                    textClass: 'text-green',
                    bgClass: 'bg-green text-green'
                },
                {
                    min: 7.0,
                    status: 'Гипергликемия',
                    textClass: 'text-danger-custom',
                    bgClass: 'bg-red text-danger-custom'
                }
            ]
        }
    },
    computed: {
        info() {
            const level = this.level;
            for (const range of this.ranges) {
                const inRange =
                    (range.min === undefined || level >= range.min) &&
                    (range.max === undefined || level <= range.max);
                if (inRange) return range;
            }
            return null;
        }
    }
};
</script>