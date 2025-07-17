<template>
    <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
        <form @submit.prevent="saveActivity">
            <div class="row gy-3">
                <div class="col-xxl-8">
                    <p class="mb-3 text-lg fw-medium">Зафиксировать активность</p>
                    <label for="activity_time" class="visually-hidden">Зафиксировать активность</label>
                    <input type="number" v-model.number="duration" ref="activityInput"id="activity_time" placeholder="Время: 20 мин" class="form-control input-data-custom"min="1"step="1" />
                </div>
                <div class="col-xxl-4">
                    <div class="dropdown text-sm mb-3">
                        <div class="d-flex align-items-center">
                            <p class="mb-0 me-2 text-md fw-medium">Тип:</p>
                            <div>
                                <button class="bg-transparent p-0 border-0 dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    {{ selectedActivity }}
                                </button>
                                <ul class="dropdown-menu">
                                    <li v-for="(data, type) in activityTypes" :key="type">
                                        <a class="dropdown-item" href="#" @click.prevent="selectActivity(type)">{{ type
                                            }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary shadow w-100" :disabled="isLoading">{{ isLoading ? 'Сохранение...' : 'Сохранить' }}</button>
                </div>
            </div>
        </form>
    </div>

    <!-- DailyMeasurements -->
    <div id="DailyMeasurements">
        <div class="w-100 bg-white rounded-4 mt-lg-0 card-hover p-4">
            <div class="d-flex align-items-center justify-content-between flex-wrap mb-4">
                <p class="text-2xl fs-extra-smaller fw-semibold mb-0 py-1">Недавняя активность</p>
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

            
            <template v-if="activities.length > 0">
                <div v-for="(item, index) in activities" :key="index"
                class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-sm-between flex-sm-row flex-column">
                <div class="d-flex align-items-center w-sm-100 mb-sm-0 mb-3 pb-sm-0 pb-3 border-bottom-sm gap-3">
                    <i class="fa-solid fa-heart-pulse text-corp fs-5"></i>
                    <div
                        class="d-flex flex-sm-column flex-row w-sm-100 justify-content-sm-start justify-content-between">
                        <p class="text-lg mb-0 fw-medium">{{ typeNames[item.type] || 'Неизвестно' }}</p>
                        <span class="fw-light text-gray text-sm">{{ item.date }}</span>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-sm-start justify-content-evenly gap-sm-4">
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <span class="fw-light text-gray text-sm">Время</span>
                        <span class="text-md fs-smaller fw-medium mt-2">{{ item.time }} мин</span>
                    </div>
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <span class="fw-light text-gray text-sm">Расстояние</span>
                        <span class="text-md fs-smaller fw-medium mt-2">{{ item.distance }} км</span>
                    </div>
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <span class="fw-light text-gray text-sm">Калории</span>
                        <span class="text-md fs-smaller fw-medium mt-2">{{ item.calories }} ккал</span>
                    </div>
                </div>
            </div>
            </template>
            <div v-else class="text-center  py-4">
                <p>Нет данных об активностях</p>
            </div>
            <a href="#inputValue" class="btn btn-primary text-sm w-100" @click="focusActivityInput">
                <i class="fa-solid fa-plus me-2"></i>
                <span class="fw-medium">Добавить активность</span>
            </a>
        </div>
    </div>
</template>
<script>
import { initAllFlatpickrCalendars } from '@/utils/DataInputButton';

const API_URL = 'https://059.uz/api/activity';

export default {
    data() {
        return {
            duration: '',
            selectedActivity: 'Ходьба',
            activities: [],
            isLoading: false,
            activityTypes: {
                'Велосипед': 1,
                'Бег': 2,
                'Ходьба': 3,
                'Плавание': 4
            },
            typeNames: {
            1: 'Велосипед',
            2: 'Бег',
            3: 'Ходьба',
            4: 'Плавание'
        },
            selectedDate: new Date().toISOString().split('T')[0]
        };
    },
    computed: {
        calendarLabel() {
            return new Date(this.selectedDate).toLocaleDateString();
        }
    },
    methods: {
        focusActivityInput() {
            this.$refs.activityInput?.focus();
        },
        selectActivity(type) {
            this.selectedActivity = type;
        },
        async saveActivity() {
            const time = parseFloat(this.duration);
            if (!time || time <= 0) {
                alert('Укажите корректное время');
                return;
            }

            const { id: userId } = JSON.parse(localStorage.getItem('user') || '{}');
            
            if (!userId) {
                alert('Пользователь не авторизован');
                return;
            }

            try {
                this.isLoading = true;

                const formData = new FormData();
                formData.append('user_id', userId);
                formData.append('time', time);
                formData.append('type', this.activityTypes[this.selectedActivity]);

                const response = await fetch(`${API_URL}/add`, {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result)
                if (result.calories) {
                    await this.fetchMeasurements();
                    this.duration = '';
                } else {
                    alert(result.message || 'Ошибка при сохранении активности');
                }
            } catch (error) {
                console.error(error);
                alert('Ошибка сети при отправке данных');
            } finally {
                this.isLoading = false;
            }
        },
        async fetchMeasurements(date = this.selectedDate) {
            const { id: userId } = JSON.parse(localStorage.getItem('user') || '{}');
            if (!userId) return;

            try {
                this.isLoading = true;
                const response = await fetch(`${API_URL}/fetch?user_id=${userId}&date=${date}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                this.activities = Array.isArray(data) ? data : [];
            } catch (error) {
                console.error('Ошибка при загрузке активностей:', error);
                this.activities = [];
            } finally {
                this.isLoading = false;
            }
        }
    },
    mounted() {
        initAllFlatpickrCalendars({
            onChange: (selectedDates) => {
                if (selectedDates.length) {
                    this.selectedDate = selectedDates[0].toISOString().split('T')[0];
                }
            }
        });
        this.fetchMeasurements();
    },
    watch: {
        selectedDate(newDate) {
            this.fetchMeasurements(newDate);
        }
    }
};
</script>

