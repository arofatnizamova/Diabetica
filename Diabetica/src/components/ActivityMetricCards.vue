<template>
    <div id="MetricsCards-mobile">
                <div :class="['mb-4', displayClass]">
                    <div class="row gx-sm-3 gx-2 gy-3">
                        <div class="col-6">
                            <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                                <div class="d-flex justify-content-between">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Шагов сегодня</p>
                                    <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                        <i class="fa-solid fa-heart-pulse fs-5"></i>
                                    </div>
                                </div>
                                <div class="card-progress">
                                    <p class="text-xl fs-extra-smaller fw-bold mb-0">{{ statistics.steps }}</p>
                                    <div class="progress-line my-2">
                                        <div class="progress-line-inside" :style="{ width: percent + '%' }">
                                        </div>
                                    </div>
                                    <span class="text-sm fs-extra-smaller text-corp" data-percent="38"> {{ percent }}% от цели ({{ goal.toLocaleString() }})</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                                <div class="d-flex justify-content-between">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Активные калории</p>
                                    <div class="text-success bg-green p-sm-2 p-1 rounded-3 h-fit-content">
                                        <i class="fa-solid fa-heart-pulse fs-5"></i>
                                    </div>
                                </div>
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">{{ statistics.calories }} ккал</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                                <div class="d-flex justify-content-between">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Активное время</p>
                                    <div class="text-warning bg-yellow p-sm-2 p-1 rounded-3 h-fit-content">
                                        <i class="fa-solid fa-heart-pulse fs-5"></i>
                                    </div>
                                </div>
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">{{ statistics.time }} мин</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                                <div class="d-flex justify-content-between">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Количество активностей</p>
                                    <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                        <i class="fa-solid fa-heart-pulse fs-5"></i>
                                    </div>
                                </div>
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">{{ statistics.count }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>
<script>
  export default{
    name: 'ActivityMetricCards',
    props: {
        displayClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            goal: 10000,
            statistics: {
                count: null,
                calories: null,
                steps: null,
                time: null
            }
        }
    },
    methods: {
        async fetchMetricCardsData() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            const userId = storedUser?.id;

            if (!userId) return;

            const query = new URLSearchParams({ user_id: userId });
            try {
                const response = await fetch(`https://059.uz/api/activity/stat?${query.toString()}`);
                const data = await response.json();
                this.statistics = data || {};
                console.log(data);
            } catch (error) {
                console.error('Ошибка при загрузке статистики:', error);
            }
        }
    },
    mounted() {
        this.fetchMetricCardsData();
    },
    computed: {
    percent() {
      const percent = (this.statistics.steps / this.goal) * 100;
      return Math.min(100, Math.round(percent));
    }
  }
  }

</script>