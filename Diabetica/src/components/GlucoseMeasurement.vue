<template>
    <!-- Ввод -->
    <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
        <form @submit.prevent="saveMeasurement">
            <div class="row gy-3">
                <div class="col-xxl-8">
                    <p class="mb-3 text-lg fw-medium">Зафиксировать уровень глюкозы</p>
                    <label for="glucose-level" class="visually-hidden">Глюкоза</label>
                    <input type="number" step="0.1" id="glucose-level" v-model="glucoseLevel" placeholder="3 мм/л"
                        class="form-control input-data-custom" />
                    <GlucoseStatus v-if="glucoseLevel !== ''" :level="parseFloat(glucoseLevel)" />
                </div>

                <div class="col-xxl-4">
                    <button class="btn btn-primary w-100 shadow" type="submit">
                        Сохранить
                    </button>
                </div>
            </div>
        </form>
    </div>

    <!-- История -->
    <div id="DailyMeasurements">
        <div class="w-100 bg-white rounded-4 mt-lg-0 card-hover p-4">
            <div class="d-flex align-items-center justify-content-between flex-wrap mb-4">
                <p class="text-2xl fs-extra-smaller fw-semibold mb-0 py-1">История измерений</p>
                <div class="d-flex align-items-center text-sm gap-3 py-1">
                    <p class="mb-0">Дата:</p>
                    <div class="calendar-wrapper">
                        <input type="text" v-model="selectedDate" class="flatpickr-input hidden-input" />
                        <button type="button" class="calendar-button bg-transparent border-0 p-0">
                            <span>{{ calendarLabel }}</span>
                            <i class="bi bi-calendar-event text-gray px-2 py-1 bg-blue rounded-5"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div v-for="(item, index) in measurements" :key="index"
                class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-between">
                <GlucoseStatus :level="parseFloat(item.value)" :inline="false" v-slot="{ info }">
                    <div class="d-flex align-items-center gap-3">
                        <span :class="info.bgClass + ' p-2 fw-semibold rounded-3'">
                            {{ parseFloat(item.value).toFixed(1) }}
                        </span>
                        <div class="d-flex align-items-center gap-3">
                            <p class="text-sm mb-1 fw-semibold">
                                {{ formatTime(item.created_at) }}
                            </p>
                            <span :class="info.textClass + ' text-sm'">{{ info.status }}</span>
                        </div>
                    </div>
                </GlucoseStatus>
            </div>
        </div>
    </div>
</template>

<script>
import GlucoseStatus from '@/components/GlucoseStatus.vue';
import { initAllFlatpickrCalendars } from '@/utils/DataInputButton';

export default {
    name: 'GlucoseMeasurement',
    components: {
        GlucoseStatus,
    },
    data() {
        return {
            glucoseLevel: '',
            selectedDate: '',
            calendarLabel: 'Сегодня',
            measurements: [],
        };
    },
    methods: {
        async saveMeasurement() {
            const level = parseFloat(this.glucoseLevel);
            if (isNaN(level)) return;

            const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
            const userId = storedUser.id;

            if (!userId) {
                alert('Пользователь не авторизован');
                return;
            }

            try {
                const formData = new FormData();
                formData.append('user_id', userId);
                formData.append('value', level.toFixed(1));

                const response = await fetch('https://059.uz/api/glucose/add', {
                    method: 'POST',
                    body: formData,
                });

                const result = await response.json();

                if (result.success) {
                    this.glucoseLevel = '';
                    await this.fetchMeasurements();
                } else {
                    alert('Ошибка при сохранении замера');
                }
            } catch (err) {
                console.error(err);
                alert('Ошибка сети при отправке замера');
            }
        },

        async fetchMeasurements(date) {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            const userId = storedUser?.id;

            if (!userId) return;

            const query = new URLSearchParams({ user_id: userId });
            if (date) query.append('date', date);

            try {
                const response = await fetch(`https://059.uz/api/glucose/fetch?${query.toString()}`);
                const data = await response.json();
                this.measurements = Array.isArray(data) ? data : [];
                console.log('Ответ сервера:', data);
            } catch (err) {
                console.error('Ошибка при загрузке замеров:', err);
            }
        },

        formatTime(dateTimeString) {
            const date = new Date(dateTimeString.replace(' ', 'T') + 'Z');

            return date.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
        }
        ,

    },

    mounted() {
        initAllFlatpickrCalendars({
            onChange: (selectedDates) => {
                if (selectedDates.length) {
                    const formatted = selectedDates[0].toISOString().split('T')[0];
                    this.selectedDate = formatted;
                }
            }
        });
        const today = new Date().toISOString().split('T')[0];
        this.selectedDate = today;
    },
    watch: {
        selectedDate(newDate) {
            this.fetchMeasurements(newDate);
        }
    },
};
</script>
