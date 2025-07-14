<template>
    <!-- input -->
    <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
        <form @submit.prevent="saveMeasurement">
            <div class="row gy-3">
                <div class="col-xxl-8">
                    <p class="mb-3 text-lg fw-medium">Зафиксировать уровень глюкозы</p>
                    <label for="glucose-level" class="visually-hidden">Зафиксировать уровень глюкозы</label>
                    <input type="number" id="glucose-level" v-model="glucoseLevel" placeholder="3 мм/л"
                        class="form-control input-data-custom" />
                    <GlucoseStatus v-if="glucoseLevel !== ''" :level="parseFloat(glucoseLevel)" />
                </div>

                <div class="col-xxl-4">
                    <div class="dropdown text-sm mb-3">
                        <button class="bg-transparent p-0 border-0 dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Указать вручную
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <button class="btn btn-primary w-100 shadow" type="submit">
                        Сохранить
                    </button>
                </div>
            </div>
        </form>
    </div>

    <!-- DailyMeasurements -->
    <div id="DailyMeasurements">
        <div class="w-100 bg-white rounded-4 mt-lg-0 card-hover p-4">
            <div class="d-flex align-items-center justify-content-between flex-wrap mb-4">
                <p class="text-2xl fs-extra-smaller fw-semibold mb-0 py-1">История измерений</p>
                <div class="d-flex align-items-center text-sm gap-3 py-1">
                    <p class="mb-0">Дата:</p>
                    <div class="calendar-wrapper">
                        <input type="text" class="flatpickr-input hidden-input" />
                        <button type="button" class="calendar-button bg-transparent border-0 p-0">
                            <span>Сегодня</span>
                            <i class="bi bi-calendar-event text-gray px-2 py-1 bg-blue rounded-5"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div v-for="(item, index) in measurements" :key="index"
                class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-between">
                <GlucoseStatus :level="parseFloat(item.level)" :inline="false" v-slot="{ info }">
                    <div class="d-flex align-items-center gap-3">
                        <span :class="info.bgClass + ' p-2 fw-semibold rounded-3'">
                            {{ item.level }}
                        </span>
                        <div class="d-flex align-items-center gap-3">
                            <p class="text-sm mb-1 fw-semibold">{{ item.time }}</p>
                            <span :class="info.textClass + ' text-sm'">
                                {{ info.status }}
                            </span>
                        </div>
                    </div>
                </GlucoseStatus>
            </div>
        </div>
    </div>
</template>

<script>
import GlucoseStatus from '@/components/GlucoseStatus.vue';

export default {
    name: 'GlucoseMeasurement',
    components: {
        GlucoseStatus
    },
    data() {
        return {
            glucoseLevel: '',
            measurements: []
        };
    },
    methods: {
        saveMeasurement() {
            const level = parseFloat(this.glucoseLevel);
            if (!isNaN(level)) {
                const now = new Date();
                const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const newEntry = { level: level.toFixed(1), time };
                this.measurements.unshift(newEntry);
                localStorage.setItem('glucoseHistory', JSON.stringify(this.measurements));
                this.glucoseLevel = '';
            }
        }
    },
    mounted() {
        const stored = localStorage.getItem('glucoseHistory');
        if (stored) {
            this.measurements = JSON.parse(stored);
        }
    }
};
</script>
