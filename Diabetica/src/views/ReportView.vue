<template>
    <div class="row gy-xl-0 gy-4">
        <div class="col-xl-5">
            <!-- info -->
            <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
                <div class="row gx-0">
                    <div class="col-8">
                        <div class="w-100 h-100 d-flex flex-column justify-content-center py-3">
                            <h2 class="fs-smaller">Отчеты и аналитика</h2>
                            <p class="text-lg fs-smaller lh-sm mb-0">Анализируйте данные и делитесь с врачом</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="w-100 h-100 d-flex align-items-center justify-content-center">
                            <img src="../assets/images/men.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- DailyGlucoseChart -->
    <div id="DailyGlucoseChart">
        <div class="mt-sm-4 mt-2 bg-white mb-sm-3 rounded-4 p-sm-4 px-1 py-3 card-hover">
            <div
                class="d-flex mb-4 align-items-center justify-content-sm-between justify-content-center flex-sm-row flex-column">
                <p class="mb-0 text-dark-custom fw-bold text-2xl">Ежемесячный отчет </p>
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
    <!-- Reports -->
    <div id="reports">
        <div class="mt-4 bg-white mb-sm-3 rounded-4 p-sm-4 p-3 card-hover">
            <h3 class="text-2xl fw-bold mb-lg-4 mb-3">Доступные отчеты</h3>
            <div
                class="card-hover-bg rounded-4 mb-2 p-3 d-flex flex-lg-row flex-column justify-content-lg-between align-items-lg-center">
                <div class="d-flex align-items-center gap-sm-4 gap-3">
                    <i class="fa-solid fa-file text-corp bg-blue p-sm-3 p-2 rounded-3"></i>
                    <div class="">
                        <p class="mb-0 text-lg fw-medium">Еженедельный отчет</p>
                        <span class="text-sm text-gray fe-light">
                            1-7 июля, 2025
                        </span>
                    </div>
                </div>
                <div class="d-flex mt-lg-0 mt-3 flex-wrap justify-content-xl-end gap-3 align-items-center">
                    <div class="">
                        <button class="btn btn-white text-sm">
                            <i class="fa-solid fa-print me-1"></i>
                            <span>Печать</span>
                        </button>
                        <button class="btn btn-white text-sm">
                            <i class="fa-solid fa-file-pdf me-1"></i>
                            <span>PDF</span></button>
                    </div>
                    <a href="#" class="btn btn-primary shadow text-sm">
                        <i class="fa-solid fa-paper-plane me-1"></i>
                        <span>Отправить врачу</span>
                    </a>
                </div>
            </div>
            <div
                class="card-hover-bg rounded-4 mb-2 p-3 d-flex flex-lg-row flex-column justify-content-lg-between align-items-lg-center">
                <div class="d-flex align-items-center gap-sm-4 gap-3">
                    <i class="fa-solid fa-file text-corp bg-blue p-sm-3 p-2 rounded-3"></i>
                    <div class="">
                        <p class="mb-0 text-lg fw-medium">Месячный отчет</p>
                        <span class="text-sm text-gray fe-light">
                            Июнь, 2025
                        </span>
                    </div>
                </div>
                <div class="d-flex mt-lg-0 mt-3 flex-wrap justify-content-xl-end gap-3 align-items-center">
                    <div class="">
                        <button class="btn btn-white text-sm">
                            <i class="fa-solid fa-print me-1"></i>
                            <span>Печать</span>
                        </button>
                        <button class="btn btn-white text-sm">
                            <i class="fa-solid fa-file-pdf me-1"></i>
                            <span>PDF</span></button>
                    </div>
                    <a href="#" class="btn btn-primary shadow text-sm">
                        <i class="fa-solid fa-paper-plane me-1"></i>
                        <span>Отправить врачу</span>
                    </a>
                </div>
            </div>
            <div
                class="card-hover-bg rounded-4 mb-2 p-3 d-flex flex-lg-row flex-column justify-content-lg-between align-items-lg-center">
                <div class="d-flex align-items-center gap-sm-4 gap-3">
                    <i class="fa-solid fa-file text-corp bg-blue p-sm-3 p-2 rounded-3"></i>
                    <div class="">
                        <p class="mb-0 text-lg fw-medium">Дневник питания</p>
                        <span class="text-sm text-gray fe-light">
                            Июнь, 2025
                        </span>
                    </div>
                </div>
                <div class="d-flex mt-lg-0 mt-3 flex-wrap justify-content-xl-end gap-3 align-items-center">
                    <div class="">
                        <button class="btn btn-white text-sm">
                            <i class="fa-solid fa-print me-1"></i>
                            <span>Печать</span>
                        </button>
                        <button class="btn btn-white text-sm">
                            <i class="fa-solid fa-file-pdf me-1"></i>
                            <span>PDF</span>
                        </button>
                    </div>
                    <a href="#" class="btn btn-primary shadow text-sm">
                        <i class="fa-solid fa-paper-plane me-1"></i>
                        <span>Отправить врачу</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>