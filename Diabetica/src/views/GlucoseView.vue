<template>
    <div class="row gy-xl-0 gy-4">
        <div class="col-xl-5">
            <!-- info -->
            <InfoCard title="Мониторинг глюкозы" subtitle="Отслеживайте и анализируйте уровень глюкозы"
                :image="imageSrc" />
            <!-- MetricsCards mobile -->
            <div id="MetricsCards-mobile">
                <div class="d-lg-none d-block mb-4">
                    <div class="row gx-sm-3 gx-2 gy-3">
                        <div class="col-6">
                            <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                                <div class="d-flex justify-content-between">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Средняя за неделю
                                    </p>
                                    <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                        <i class="fa-solid fa-chart-pie fs-5"></i>
                                    </div>
                                </div>
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">6 ммоль/л</p>
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
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">5.3 ммоль/л</p>
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
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">7.3 ммоль/л</p>
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
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">35</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- DailyMeasurements -->
            <GlucoseMeasurement />
        </div>
        <div class="col-xl-7">
            <!-- MetricsCards desctop -->
            <div id="MetricsCards-desctop">
                <div class="d-lg-block d-none">
                    <div class="row gx-sm-3 gx-2 gy-3">
                        <div class="col-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div class="">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Средняя за неделю
                                    </p>
                                    <p class="text-xl fs-extra-smaller fw-bold mb-0">6 ммоль/л</p>
                                </div>
                                <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-chart-pie fs-5"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div>
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Минимум за неделю
                                    </p>
                                    <p class="text-xl fs-extra-smaller fw-bold mb-0">5.3 ммоль/л</p>
                                </div>
                                <div class="text-success bg-green p-sm-2 p-1 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-chart-pie fs-5"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div>
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Максимум за неделю
                                    </p>
                                    <p class="text-xl fs-extra-smaller fw-bold mb-0">7.3 ммоль/л</p>
                                </div>
                                <div class="text-warning bg-yellow p-sm-2 p-1 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-chart-pie fs-5"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div>
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Количество измерений
                                    </p>
                                    <p class="text-xl fs-extra-smaller fw-bold mb-0">35</p>
                                </div>
                                <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-chart-pie fs-5"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
<script setup>
import InfoCard from '@/components/InfoCard.vue';
import GlucoseMeasurement from '@/components/GlucoseMeasurement.vue';
import imageSrc from '@/assets/images/men.png'
</script>