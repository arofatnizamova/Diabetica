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
            <!-- input -->
            <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
                <form>
                    <div class="row gy-3">
                        <div class="col-xxl-8">
                            <p class="mb-3 text-lg fw-medium">Зафиксировать уровень глюкозы</p>
                            <label for="glucose-level" class="visually-hidden">Зафиксировать уровень глюкозы</label>
                            <input type="text" id="glucose-level" placeholder="3 мм/л"
                                class="form-control input-data-custom">
                            <p class="mb-0 mt-2 text-sm text-danger-custom">Статус: <span
                                    class="status">Гипогликемия</span></p>
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
                            <button class="btn btn-primary w-100 shadow">Сохранить</button>
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
                                <input type="text" class="flatpickr-input hidden-input">
                                <button type="button" class="calendar-button bg-transparent border-0 p-0">
                                    <span>Сегодня</span>
                                    <i class="bi bi-calendar-event text-gray px-2 py-1 bg-blue rounded-5"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-between">
                        <div class="d-flex align-items-center gap-3">
                            <span class="p-2 bg-green text-green fw-semibold rounded-3">6.1</span>
                            <div class="d-flex align-items-center gap-3">
                                <p class="text-sm mb-1 fw-semibold">09:00</p>
                                <span class="text-green text-sm">В норме</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-between">
                        <div class="d-flex align-items-center gap-3">
                            <span class="p-2 bg-red text-danger-custom fw-semibold rounded-3">7.3</span>
                            <div class="d-flex align-items-center gap-3">
                                <p class="text-sm mb-1 fw-semibold">13:00</p>
                                <span class="text-danger-custom text-sm">Выше нормы</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-between">
                        <div class="d-flex align-items-center gap-3">
                            <span class="p-2 bg-green text-green fw-semibold rounded-3">6.3</span>
                            <div class="d-flex align-items-center gap-3">
                                <p class="text-sm mb-1 fw-semibold">15:00</p>
                                <span class="text-green text-sm">В норме</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-between">
                        <div class="d-flex align-items-center gap-3">
                            <span class="p-2 bg-green text-green fw-semibold rounded-3">5.5</span>
                            <div class="d-flex align-items-center gap-3">
                                <p class="text-sm mb-1 fw-semibold">19:00</p>
                                <span class="text-green text-sm">В норме</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-between">
                        <div class="d-flex align-items-center gap-3">
                            <span class="p-2 bg-green text-green fw-semibold rounded-3">6.1</span>
                            <div class="d-flex align-items-center gap-3">
                                <p class="text-sm mb-1 fw-semibold">20:00</p>
                                <span class="text-green text-sm">В норме</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
import imageSrc from '@/assets/images/men.png'
</script>