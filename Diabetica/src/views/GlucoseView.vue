<template>
    <div class="row gy-xl-0 gy-4">
        <div class="col-xl-5">
            <!-- info -->
            <InfoCard title="Мониторинг глюкозы" subtitle="Отслеживайте и анализируйте уровень глюкозы"
                :image="imageSrc" />
            <!-- MetricsCards mobile -->
            <GlucoseMetricCards displayClass="d-lg-none d-block" />
            <!-- DailyMeasurements -->
            <GlucoseMeasurement />
        </div>
        <div class="col-xl-7">
            <!-- MetricsCards desctop -->
            <GlucoseMetricCards displayClass="d-lg-block d-none" />
            <!-- DailyGlucoseChart -->
            <div id="DailyGlucoseChart">
                <div class="mt-sm-4 mt-2 bg-white mb-sm-3 rounded-4 p-3 card-hover">
                    <div
                        class="d-flex mb-4 align-items-center justify-content-sm-between justify-content-center flex-sm-row flex-column">
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
import GlucoseMeasurement from '@/components/GlucoseMeasurement.vue';
import imageSrc from '@/assets/images/men.png';
import GlucoseMetricCards from '@/components/GlucoseMetricCards.vue';

export default {
    name: 'GlucoseView',
    components: {
        InfoCard,
        GlucoseMeasurement,
        GlucoseMetricCards
    },
    data() {
        return {
            imageSrc
        };
    }
};
</script>