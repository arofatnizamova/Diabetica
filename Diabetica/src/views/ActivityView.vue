<template>
    <div class="row gy-xl-0 gy-4">
        <div class="col-xxl-5 col-xl-6">
            <!-- info -->
            <InfoCard title="Физическая активноcть" subtitle="Отслеживайте свою активность и пргоресс"
                :image="imageSrc" />
            <!-- MetricsCards mobile -->
            <ActivityMetricCards displayClass="d-lg-none d-block"/>
            <!-- input -->
            <ActivityMeasurement />
        </div>
        <div class="col-xxl-7 col-xl-6">
            <!-- MetricsCards desctop -->
            <ActivityMetricCards displayClass="d-lg-block d-none"/>
            <!-- DailyGlucoseChart -->
            <div id="DailyGlucoseChart">
                <div class="mt-sm-4 mt-2 bg-white mb-sm-3 rounded-4 p-3 card-hover">
                    <div
                        class="d-flex mb-4 align-items-center justify-content-sm-between justify-content-center flex-xxl-row flex-column">
                        <p class="mb-0 text-dark-custom fw-bold text-2xl">График активности </p>
                        <div class="d-flex align-items-center gap-3 mt-sm-0 mt-3">
                            <button class="text-sm fw-semibold hovered-btn"><span class="text-dark-custom"><i
                                        class="fa-solid fa-chevron-left"></i></span></button>
                            <h3 class="text-lg fw-semibold mb-0">Июнь 2025</h3>
                            <button class="text-sm fw-semibold hovered-btn"><span class="text-dark-custom opacity-50"><i
                                        class="fa-solid fa-chevron-right"></i></span></button>
                        </div>
                    </div>
                    <div class="px-2">
                        <div id="glucoseChart"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import InfoCard from '@/components/InfoCard.vue';
import imageSrc from '@/assets/images/men.png';
import ActivityMeasurement from '@/components/ActivityMeasurement.vue';
import ActivityMetricCards from '@/components/ActivityMetricCards.vue';
export default {
    name: 'ActivityView',
    components: {
        InfoCard,
        ActivityMeasurement,
        ActivityMetricCards
    },
    data() {
        return {
            imageSrc
        };
    },
}
</script>