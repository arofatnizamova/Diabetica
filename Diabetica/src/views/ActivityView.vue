<template>
    <div class="row gy-xl-0 gy-4">
        <div class="col-xxl-5 col-xl-6">
            <!-- info -->
            <InfoCard title="Физическая активноcть" subtitle="Отслеживайте свою активность и пргоресс"
                :image="imageSrc" />
            <!-- MetricsCards mobile -->
            <div id="MetricsCards-mobile">
                <div class="d-lg-none d-block mb-4">
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
                                    <p class="text-xl fs-extra-smaller fw-bold mb-0">3,845</p>
                                    <div class="progress-line my-2">
                                        <div class="progress-line-inside" style="width: 32%;">
                                        </div>
                                    </div>
                                    <span class="text-sm fs-extra-smaller text-corp" data-percent="38">38% от цели
                                        (10,000)</span>
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
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">245 ккал</p>
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
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">32 мин</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                                <div class="d-flex justify-content-between">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Средний пульс</p>
                                    <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                        <i class="fa-solid fa-heart-pulse fs-5"></i>
                                    </div>
                                </div>
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">72 уд/мин</p>
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
                            <p class="mb-3 text-lg fw-medium">Зафиксировать активность</p>
                            <label for="activity_time" class="visually-hidden">Зафиксировать активность</label>
                            <input type="text" id="activity_time" placeholder="Время: 20 мин"
                                class="form-control input-data-custom">
                        </div>
                        <div class="col-xxl-4">
                            <div class="dropdown text-sm mb-3">
                                <div class="d-flex align-items-center">
                                    <p class="mb-0 me-2 text-md fw-medium">Тип:</p>
                                    <div class="">
                                        <button class="bg-transparent p-0 border-0 dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Велосипед
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Ходьба</a></li>
                                            <li><a class="dropdown-item" href="#">Силовые</a></li>
                                            <li><a class="dropdown-item" href="#">Плавание</a></li>
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
                                <input type="text" class="flatpickr-input hidden-input">
                                <button type="button" class="calendar-button bg-transparent border-0 p-0">
                                    <span>Сегодня</span>
                                    <i class="bi bi-calendar-event text-gray px-2 py-1 bg-blue rounded-5"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-sm-between flex-sm-row flex-column">
                        <div
                            class="d-flex align-items-center w-sm-100 mb-sm-0 mb-3 pb-sm-0 pb-3 border-bottom-sm gap-3">
                            <i class="fa-solid fa-heart-pulse text-corp fs-5"></i>
                            <div
                                class="d-flex flex-sm-column flex-row w-sm-100 justify-content-sm-start justify-content-between">
                                <p class="text-lg mb-0 fw-medium">Прогулка</p>
                                <span class="fw-light text-gray text-sm">Пн, 30 июн</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-sm-start justify-content-evenly gap-sm-4">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <span class="fw-light text-gray text-sm">Время</span>
                                <span class="text-md fs-smaler fw-medium mt-2">45 мин</span>
                            </div>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <span class="fw-light text-gray text-sm">Расстояние</span>
                                <span class="text-md fs-smaler fw-medium mt-2">3,2 км</span>
                            </div>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <span class="fw-light text-gray text-sm">Калории</span>
                                <span class="text-md fs-smaler fw-medium mt-2">180 ккал</span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-sm-between flex-sm-row flex-column">
                        <div
                            class="d-flex align-items-center w-sm-100 mb-sm-0 mb-3 pb-sm-0 pb-3 border-bottom-sm gap-3">
                            <i class="fa-solid fa-heart-pulse text-corp fs-5"></i>
                            <div
                                class="d-flex flex-sm-column flex-row w-sm-100 justify-content-sm-start justify-content-between">
                                <p class="text-lg mb-0 fw-medium">Велосипед</p>
                                <span class="fw-light text-gray text-sm">Пн, 30 июн</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-sm-start justify-content-evenly gap-sm-4">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <span class="fw-light text-gray text-sm">Время</span>
                                <span class="text-md fs-smaler fw-medium mt-2">30 мин</span>
                            </div>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <span class="fw-light text-gray text-sm">Расстояние</span>
                                <span class="text-md fs-smaler fw-medium mt-2">8,5 км</span>
                            </div>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <span class="fw-light text-gray text-sm">Калории</span>
                                <span class="text-md fs-smaler fw-medium mt-2">220 ккал</span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-sm-between flex-sm-row flex-column">
                        <div
                            class="d-flex align-items-center w-sm-100 mb-sm-0 mb-3 pb-sm-0 pb-3 border-bottom-sm gap-3">
                            <i class="fa-solid fa-heart-pulse text-corp fs-5"></i>
                            <div
                                class="d-flex flex-sm-column flex-row w-sm-100 justify-content-sm-start justify-content-between">
                                <p class="text-lg mb-0 fw-medium">Тренировка</p>
                                <span class="fw-light text-gray text-sm">Пн, 30 июн</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-sm-start justify-content-evenly gap-sm-4">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <span class="fw-light text-gray text-sm">Время</span>
                                <span class="text-md fs-smaler fw-medium mt-2">60 мин</span>
                            </div>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <span class="fw-light text-gray text-sm">Расстояние</span>
                                <span class="text-md fs-smaler fw-medium mt-2">-</span>
                            </div>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <span class="fw-light text-gray text-sm">Калории</span>
                                <span class="text-md fs-smaler fw-medium mt-2">380 ккал</span>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary text-sm w-100" type="button">
                        <i class="fa-solid fa-plus me-2"></i>
                        <span class="fw-medium">Добавить активность</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="col-xxl-7 col-xl-6">
            <!-- MetricsCards desctop -->
            <div id="MetricsCards-desctop">
                <div class="d-lg-block d-none">
                    <div class="row gx-sm-3 gx-2 gy-3">
                        <div class="col-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div class="">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Шагов сегодня</p>
                                    <div class="card-progress">
                                        <p class="text-xl fs-extra-smaller fw-bold mb-0">3,845</p>
                                        <div class="progress-line my-2">
                                            <div class="progress-line-inside" style="width: 32%;">
                                            </div>
                                        </div>
                                        <span class="text-sm text-corp" data-percent="38">38% от цели (10,000)</span>
                                    </div>
                                </div>
                                <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-heart-pulse fs-5"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div>
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Активные калории</p>
                                    <p class="text-xl fs-extra-smaller fw-bold mb-0">245 ккал</p>
                                </div>
                                <div class="text-success bg-green p-sm-2 p-1 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-heart-pulse fs-5"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div>
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Активное время</p>
                                    <p class="text-xl fs-extra-smaller fw-bold mb-0">32 мин</p>
                                </div>
                                <div class="text-warning bg-yellow p-sm-2 p-1 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-heart-pulse fs-5"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div>
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Средний пульс</p>
                                    <p class="text-xl fs-extra-smaller fw-bold mb-0">72 уд/мин</p>
                                </div>
                                <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-heart-pulse fs-5"></i>
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
<script setup>
import InfoCard from '@/components/InfoCard.vue';
import imageSrc from '@/assets/images/men.png'
</script>