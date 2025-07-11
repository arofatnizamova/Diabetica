<template>
    <div class="row gy-xl-0 gy-4">
        <div class="col-xl-5">
            <!-- info -->
            <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
                <div class="row gx-0">
                    <div class="col-8">
                        <div class="w-100 h-100 d-flex flex-column justify-content-center py-3">
                            <h2 class="fs-smaller">Дневник питания</h2>
                            <p class="text-lg fs-smaller lh-sm mb-0">Записывайте и анализируйте свой рацион</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="w-100 h-100 d-flex align-items-center justify-content-center">
                            <img src="../assets/images/men.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <!-- MetricsCards mobile -->
            <div id="MetricsCards-desctop">
                <div class="d-lg-none d-block mb-4">
                    <div class="row gx-sm-3 gx-2 gy-3">
                        <div class="col-6">
                            <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                                <div class="d-flex justify-content-between">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Всего углеводов </p>
                                    <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                        <i class="fa-solid fa-apple-whole fs-5"></i>
                                    </div>
                                </div>
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">186 г</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                                <div class="d-flex justify-content-between">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Белки</p>
                                    <div class="text-success bg-green p-sm-2 p-1 rounded-3 h-fit-content">
                                        <i class="fa-solid fa-apple-whole fs-5"></i>
                                    </div>
                                </div>
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">95 г</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                                <div class="d-flex justify-content-between">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Калории</p>
                                    <div class="text-warning bg-yellow p-sm-2 p-1 rounded-3 h-fit-content">
                                        <i class="fa-solid fa-apple-whole fs-5"></i>
                                    </div>
                                </div>
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">1850 ккал</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover">
                                <div class="d-flex justify-content-between">
                                    <p class="opacity-75 fw-semibold mb-1 text-md fs-extra-smaller">Жиры</p>
                                    <div class="text-primary bg-blue p-sm-2 p-1 rounded-3 h-fit-content">
                                        <i class="fa-solid fa-apple-whole fs-5"></i>
                                    </div>
                                </div>
                                <p class="text-xl fs-extra-smaller fw-bold mb-0">68 г</p>
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
                            <p class="mb-3 text-lg fw-medium">Зафиксировать прием пищи</p>
                            <input type="text" placeholder="120 г" class="form-control input-data-custom">
                        </div>
                        <div class="col-xxl-4">
                            <div class="dropdown text-sm fs-larger mb-3">
                                <button class="bg-transparent p-0 border-0 dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Указать вручную
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Выбрать из базы</a></li>
                                    <li><a class="dropdown-item" href="#">Выбрать из фото</a></li>
                                    <li><a class="dropdown-item" href="#">С камеры</a></li>
                                </ul>
                            </div>
                            <button class="btn btn-primary shadow w-100">Сохранить</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
                <form>
                    <p class="mb-3 text-lg fw-medium">Зафиксировать прием пищи</p>
                    <div class="row gy-3">
                        <div class="col-xxl-8">
                            <p class="text-gray fs-sm">Выберите блюдо</p>
                            <input type="text" placeholder="Салат из капусты (120 г)"
                                class="form-control input-data-custom">
                        </div>
                        <div class="col-xxl-4">
                            <div class="dropdown text-sm fs-larger mb-3">
                                <button class="bg-transparent p-0 border-0 dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Выбрать из базы
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Выбрать из базы</a></li>
                                    <li><a class="dropdown-item" href="#">Выбрать из фото</a></li>
                                    <li><a class="dropdown-item" href="#">С камеры</a></li>
                                </ul>
                            </div>
                            <button class="btn btn-primary shadow w-100">Сохранить</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
                <form>
                    <p class="mb-3 text-lg fw-medium">Зафиксировать прием пищи</p>
                    <div class="row gy-3">
                        <div class="col-xxl-8">
                            <p class="text-gray fs-sm">Выберите из фото</p>
                            <input type="text" placeholder="MyFood.png" class="form-control input-data-custom">
                            <button
                                class="btn btn-primary shadow w-fit-content mt-3 d-lg-block d-none">Сохранить</button>
                        </div>
                        <div class="col-xxl-4">
                            <div class="dropdown text-sm fs-larger mb-3">
                                <button class="bg-transparent p-0 border-0 dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Выберите фото
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Выбрать из базы</a></li>
                                    <li><a class="dropdown-item" href="#">Выбрать из фото</a></li>
                                    <li><a class="dropdown-item" href="#">С камеры</a></li>
                                </ul>
                            </div>
                            <button class="btn btn-white border-dashed w-100">Сканировать</button>
                        </div>
                    </div>
                    <button class="btn btn-primary shadow w-lg-fit-content mt-3 d-lg-none d-block">Сохранить</button>
                </form>
            </div>
            <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
                <form>
                    <p class="mb-3 text-lg fw-medium">Зафиксировать прием пищи</p>
                    <div class="row gy-3">
                        <div class="col-xxl-8">
                            <p class="text-gray fs-sm">Количество углеводов</p>
                            <input type="text" placeholder="На фото: 11 гр углеводов"
                                class="form-control input-data-custom">
                            <button
                                class="btn btn-primary shadow w-fit-content mt-3 d-lg-block d-none">Сохранить</button>
                        </div>
                        <div class="col-xxl-4">
                            <div class="dropdown text-sm fs-larger mb-3">
                                <button class="bg-transparent p-0 border-0 dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    С камеры
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Выбрать из базы</a></li>
                                    <li><a class="dropdown-item" href="#">Выбрать из фото</a></li>
                                    <li><a class="dropdown-item" href="#">С камеры</a></li>
                                </ul>
                            </div>
                            <button class="btn btn-white border-dashed w-100">Открыть камеру</button>
                        </div>
                    </div>
                    <button class="btn btn-primary shadow w-lg-fit-content mt-3 d-lg-none d-block">Сохранить</button>
                </form>
            </div>
            <!-- DailyFoodMeasurements -->
            <div id="DailyFoodMeasurements">
                <div class="w-100 bg-white rounded-4 mt-4 card-hover p-4">
                    <div
                        class="d-flex align-items-center justify-content-sm-between justify-content-center flex-sm-row flex-column mb-4">
                        <p class="text-2xl fs-extra-smaller fw-semibold mb-sm-0 mb-4 fs-larger">История приемов пищи</p>
                        <div class="d-flex align-items-center gap-3">
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
                    <ul class="nav custom-beauty nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">Завтрак</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">Обед</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">Ужин</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled"
                                aria-selected="false">Перекус</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab" tabindex="0">
                            <div
                                class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center gap-sm-4 gap-2">
                                    <img src="../assets/images/food/1.png" alt=""
                                        class="food-img img-fluid object-fit-cover">
                                    <div class="d-flex flex-column justify-content-center">
                                        <p class="text-lg fs-smaller fw-medium mb-0 lh-sm">Тостер с авокадо</p>
                                        <span class="text-sm text-gray">Углеводы : <span>42</span>г</span>
                                    </div>
                                </div>
                                <p class="fw-medium text-gray text-sm">08:00</p>
                            </div>
                            <div
                                class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center gap-sm-4 gap-2">
                                    <img src="../assets/images/food/2.png" alt=""
                                        class="food-img img-fluid object-fit-cover">
                                    <div class="d-flex flex-column justify-content-center">
                                        <p class="text-lg fs-smaller fw-medium mb-0 lh-sm">Овсянка с ягодами</p>
                                        <span class="text-sm text-gray">Углеводы : <span>42</span>г</span>
                                    </div>
                                </div>
                                <p class="fw-medium text-gray text-sm">08:00</p>
                            </div>
                            <div
                                class="card-hover-bg rounded-4 mb-2 p-3 d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center gap-sm-4 gap-2">
                                    <img src="../assets/images/food/3.png" alt=""
                                        class="food-img img-fluid object-fit-cover">
                                    <div class="d-flex flex-column justify-content-center">
                                        <p class="text-lg fs-smaller fw-medium mb-0 lh-sm">Яичница</p>
                                        <span class="text-sm text-gray">Углеводы : <span>42</span>г</span>
                                    </div>
                                </div>
                                <p class="fw-medium text-gray text-sm">08:00</p>
                            </div>
                            <button class="btn btn-primary text-sm w-100" type="button">
                                <i class="fa-solid fa-plus me-2"></i>
                                <span class="fw-medium">Добавить блюдо</span>
                            </button>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab" tabindex="0">...</div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                            aria-labelledby="pills-contact-tab" tabindex="0">...</div>
                        <div class="tab-pane fade" id="pills-disabled" role="tabpanel"
                            aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-xl-7">
            <!-- MetricsCards -->
            <div id="MetricsCards">
                <div class="d-lg-block d-none">
                    <div class="row gx-sm-3 gx-0 gy-3">
                        <div class="col-sm-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div>
                                    <p class="opacity-75 fw-semibold mb-1">Всего углеводов </p>
                                    <p class="text-2xl fw-bold mb-0">186 г</p>
                                </div>
                                <div class="text-primary bg-blue p-2 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-apple-whole fs-5"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div>
                                    <p class="opacity-75 fw-semibold mb-1">Белки</p>
                                    <p class="text-2xl fw-bold mb-0">95 г</p>
                                </div>
                                <div class="text-success bg-green p-2 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-apple-whole fs-5"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div>
                                    <p class="opacity-75 fw-semibold mb-1">Калории</p>
                                    <p class="text-2xl fw-bold mb-0">1850 ккал</p>
                                </div>
                                <div class="text-warning bg-yellow p-2 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-apple-whole fs-5"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div
                                class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                <div>
                                    <p class="opacity-75 fw-semibold mb-1">Жиры</p>
                                    <p class="text-2xl fw-bold mb-0">68 г</p>
                                </div>
                                <div class="text-primary bg-blue p-2 rounded-3 h-fit-content">
                                    <i class="fa-solid fa-apple-whole fs-5"></i>
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