<template>
    <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
        <form @submit.prevent="saveActivity">
            <div class="row gy-3">
                <div class="col-xxl-8">
                    <p class="mb-3 text-lg fw-medium">Зафиксировать активность</p>
                    <label for="activity_time" class="visually-hidden">Зафиксировать активность</label>
                    <input :id="inputValue" type="number" v-model.number="duration" ref="activityInput"
                        id="activity_time" placeholder="Время: 20 мин" class="form-control input-data-custom" />
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
                    <button class="btn btn-primary shadow w-100">Сохранить</button>
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
                        <input type="text" class="flatpickr-input hidden-input" />
                        <button type="button" class="calendar-button bg-transparent border-0 p-0">
                            <span>Сегодня</span>
                            <i class="bi bi-calendar-event text-gray px-2 py-1 bg-blue rounded-5"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div v-for="(item, index) in activities" :key="index"
                class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-sm-between flex-sm-row flex-column">
                <div class="d-flex align-items-center w-sm-100 mb-sm-0 mb-3 pb-sm-0 pb-3 border-bottom-sm gap-3">
                    <i class="fa-solid fa-heart-pulse text-corp fs-5"></i>
                    <div
                        class="d-flex flex-sm-column flex-row w-sm-100 justify-content-sm-start justify-content-between">
                        <p class="text-lg mb-0 fw-medium">{{ item.type }}</p>
                        <span class="fw-light text-gray text-sm">{{ item.date }}</span>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-sm-start justify-content-evenly gap-sm-4">
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <span class="fw-light text-gray text-sm">Время</span>
                        <span class="text-md fs-smaller fw-medium mt-2">{{ item.duration }} мин</span>
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

            <a href="#inputValue" class="btn btn-primary text-sm w-100" @click="focusActivityInput">
                <i class="fa-solid fa-plus me-2"></i>
                <span class="fw-medium">Добавить активность</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            duration: '',
            selectedActivity: 'Ходьба',
            activities: [],
            activityTypes: {
                'Ходьба': { speed: 5, caloriesPerMin: 4 },
                'Велосипед': { speed: 15, caloriesPerMin: 8 },
                'Бег': { speed: 10, caloriesPerMin: 11 },
                'Тренировка': { speed: 0, caloriesPerMin: 5 }
            }
        };
    },
    methods: {
        focusActivityInput() {
            this.$refs.activityInput?.focus();
        },
        selectActivity(type) {
            this.selectedActivity = type;
        },
        saveActivity() {
            if (!this.duration || this.duration < 1) return;

            const activity = this.activityTypes[this.selectedActivity];
            const distance = (activity.speed * (this.duration / 60)).toFixed(2);
            const calories = (activity.caloriesPerMin * this.duration).toFixed(0);

            const now = new Date();
            const options = { day: '2-digit', month: 'short', weekday: 'short' };
            const date = now.toLocaleDateString('ru-RU', options);

            const newEntry = {
                type: this.selectedActivity,
                duration: this.duration,
                distance,
                calories,
                date
            };

            this.activities.unshift(newEntry);
            localStorage.setItem('activityHistory', JSON.stringify(this.activities));

            this.duration = '';
            this.selectedActivity = 'Ходьба';
        }
    },
    mounted() {
        const stored = localStorage.getItem('activityHistory');
        if (stored) {
            this.activities = JSON.parse(stored);
        }
    }
};
</script>
