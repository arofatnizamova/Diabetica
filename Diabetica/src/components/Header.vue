<template>
    <div class="w-100 px-4 py-2">
        <div class="d-flex align-items-center justify-content-between">
            <div class="">
                <h1 class="text-xl fw-bold text-corp mb-0 d-lg-block d-none">Diabetica</h1>
                <div class="d-lg-none d-block">
                    <button class="bg-transparent border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        <i class="bi bi-list fs-5 opacity-75"></i>
                    </button>
                        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling">
                        <div class="offcanvas-header border-bottom">
                            <div class="d-flex align-items-center gap-2">
                                <RouterLink to="/" class="py-1 px-2 rounded-3 bg-corp fw-bold text-sm text-white">D</RouterLink>
                                <RouterLink to="/" class="fw-bold text-xl">Diabetica</RouterLink>
                            </div>
                            <button type="button" class="btn-close mb-1" data-bs-dismiss="offcanvas" aria-label="Close">
                                <i class="fa-solid fa-chevron-left"></i>
                            </button>
                        </div>
                        <div class="offcanvas-body px-0">
                            <div class="d-flex h-100 flex-column justify-content-between">
                                <div class="d-flex flex-column sidebar-content">
                                    <nav class="d-flex mt-3 px-3 flex-column fw-light overflow-auto">
                                        <RouterLink to="/" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
                                            <i class="fa-solid fa-house-user fs-5"></i>
                                            <span>Обзор</span>
                                        </RouterLink>
                                        <RouterLink to="/glucose" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
                                            <i class="fa-solid fa-chart-pie fs-5"></i>
                                            <span>Глюкоза</span>
                                        </RouterLink>
                                        <RouterLink to="/feed" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
                                            <i class="fa-solid fa-apple-whole fs-5"></i>
                                            <span>Питание</span>
                                        </RouterLink>
                                        <RouterLink to="/insuline" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
                                            <i class="fa-solid fa-calendar fs-5"></i>
                                            <span>Инсулин</span>
                                        </RouterLink>
                                        <RouterLink to="/report" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
                                            <i class="fa-solid fa-file fs-5"></i>
                                            <span>Отчет</span>
                                        </RouterLink>
                                        <RouterLink to="/activity" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
                                            <i class="fa-solid fa-heart-pulse fs-5"></i>
                                            <span>Активность</span>
                                        </RouterLink>
                                        <RouterLink to="/setting" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
                                            <i class="fa-solid fa-gear fs-5"></i>
                                            <span>Настройки</span>
                                        </RouterLink>
                                    </nav>
                                </div>
                                <div class="border-top p-3">
                                    <div class="p-3 shadow rounded-4 bg-corp-light text-sm">
                                        <p class="text-center fw-light mb-1">Школа диабета</p>
                                        <a href="#" class="d-block text-center text-corp">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center gap-3">
                <div class="">
                    <a href="authorization.html" class="btn d-flex align-items-center">
                        <i class="bi bi-person-circle me-2 opacity-75"></i> <span class="fw-medium text-sm">Войти</span>
                    </a>
                </div>
                <div class="dropdown">
                    <button class="bg-transparent p-0 border-0 dropdown-toggle position-relative notifications" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-bell"></i>
                        <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                        </span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
</script>