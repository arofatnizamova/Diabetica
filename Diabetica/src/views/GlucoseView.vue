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
            <GlucoseGraph/>
        </div>
    </div>
</template>
<script>
import InfoCard from '@/components/InfoCard.vue';
import GlucoseMeasurement from '@/components/GlucoseMeasurement.vue';
import imageSrc from '@/assets/images/men.png';
import GlucoseMetricCards from '@/components/GlucoseMetricCards.vue';
import GlucoseGraph from '@/components/GlucoseGraph.vue';

export default {
    name: 'GlucoseView',
    components: {
        InfoCard,
        GlucoseMeasurement,
        GlucoseMetricCards,
        GlucoseGraph
    },
    data() {
        return {
            imageSrc
        };
    }
};
</script>