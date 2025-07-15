<template>
    <div id="MetricsCards-mobile">
        <div :class="['mb-4', displayClass]">
            <div class=" row gx-sm-3 gx-2 gy-3">
                <div class="col-6">
                    <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                        <div class="d-flex justify-content-between">
                            <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Средняя за неделю
                            </p>
                            <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                <i class="fa-solid fa-chart-pie fs-5"></i>
                            </div>
                        </div>
                        <p class="text-xl fs-extra-smaller fw-bold mb-0">{{ parseFloat(statistics.average).toFixed(1) }}
                            ммоль/л</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                        <div class="d-flex justify-content-between">
                            <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Минимум за неделю
                            </p>
                            <div class="text-success bg-green p-sm-2 p-1 rounded-3 h-fit-content">
                                <i class="fa-solid fa-chart-pie fs-5"></i>
                            </div>
                        </div>
                        <p class="text-xl fs-extra-smaller fw-bold mb-0">{{ parseFloat(statistics.min).toFixed(1) }}
                            ммоль/л</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                        <div class="d-flex justify-content-between">
                            <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Максимум за неделю
                            </p>
                            <div class="text-warning bg-yellow p-sm-2 p-1 rounded-3 h-fit-content">
                                <i class="fa-solid fa-chart-pie fs-5"></i>
                            </div>
                        </div>
                        <p class="text-xl fs-extra-smaller fw-bold mb-0">{{ parseFloat(statistics.max).toFixed(1) }}
                            ммоль/л</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                        <div class="d-flex justify-content-between">
                            <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Количество измерений
                            </p>
                            <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                <i class="fa-solid fa-chart-pie fs-5"></i>
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
export default {
    name: 'GlucoseMetricCards',
    props: {
        displayClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            statistics: {
                average: null,
                min: null,
                max: null,
                count: null
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
                const response = await fetch(`https://059.uz/api/glucose/stat?${query.toString()}`);
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
    }

}
</script>