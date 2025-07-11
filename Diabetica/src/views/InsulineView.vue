<template>
    <div class="row  gy-4">
        <div class="col-xxl-5 col-lg-6">
            <!-- info -->
            <div class="w-100 h-100 bg-white rounded-4 mt-lg-0 card-hover p-4">
                <div class="row gx-0">
                    <div class="col-8">
                        <div class="w-100 h-100 d-flex flex-column justify-content-center py-3">
                            <h2 class="fs-smaller">Инсулин и лекарства</h2>
                            <p class="text-lg fs-smaller lh-sm mb-0">Управляйте приемом лекарств и инсулина</p>
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
        <div class="col-xxl-5 col-lg-6">
            <div class="w-100 h-100  bg-white rounded-4 mt-lg-0 card-hover p-4">
                <form>
                    <div class="row gy-3">
                        <div class="col-xxl-8">
                            <p class="mb-3 text-lg fw-medium">Зафиксировать прием</p>
                            <input type="text" placeholder="Доза:7 ЕД" class="form-control input-data-custom">
                        </div>
                        <div class="col-xxl-4">
                            <div class="dropdown text-sm mb-3">
                                <div class="d-flex align-items-center">
                                    <p class="mb-0 me-2 text-md fw-medium">Тип:</p>
                                    <div class="">
                                        <button class="bg-transparent p-0 border-0 dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Короткий
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Длиный</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary shadow w-100">Добавить</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-xl-8">
            <div class="w-100 bg-white rounded-4 mt-4 card-hover p-4">
                <div
                    class="d-flex align-items-center justify-content-sm-between justify-content-center flex-sm-row flex-column mb-4">
                    <p class="text-2xl fs-extra-smaller fw-semibold mb-sm-0 mb-4 fs-larger">Мои лекарства и инсулин</p>
                    <div class="d-flex align-items-center gap-3">
                        <p class="mb-0">Дата:</p>
                        <div class="calendar-wrapper">
                            <input type="text" class="hidden-input flatpickr-input">
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
                            aria-selected="true">Все</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false" tabindex="-1">Выполненные</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false" tabindex="-1">Ожидающие</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled"
                            aria-selected="false" tabindex="-1">Пропущенные</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabindex="0">
                        <div class="row gy-4">
                            <div class="col-lg-6">
                                <div class="w-100 bg-white rounded-4 card-hover px-4 py-3">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Инсулин короткий</h6>
                                                    <p class="text-sm mb-2">Доза: <span class="fw-semibold">6 ЕД</span>
                                                    </p>
                                                    <p class="mb-0 text-green text-xs"><i
                                                            class="bi bi-check2-circle me-1 fs-6"></i>Выполнено</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="w-100 d-flex justify-content-end">
                                                <p class="mb-0 text-gray text-xs">8:30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="w-100 bg-white rounded-4 card-hover px-4 py-3">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Инсулин короткий</h6>
                                                    <p class="text-sm mb-2">Доза: <span class="fw-semibold">6 ЕД</span>
                                                    </p>
                                                    <p class="mb-0 text-green text-xs"><i
                                                            class="bi bi-check2-circle me-1 fs-6"></i>Выполнено</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="w-100 d-flex justify-content-end">
                                                <p class="mb-0 text-gray text-xs">8:30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="w-100 bg-white rounded-4 card-hover px-4 py-3">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Инсулин длинный (Лантус)
                                                    </h6>
                                                    <p class="text-sm mb-2">Доза: <span class="fw-semibold">12 ЕД</span>
                                                    </p>
                                                    <p class="mb-0 text-warning text-xs"><i
                                                            class="bi bi-clock me-1 fs-6"></i>Ожидает</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="w-100 d-flex justify-content-end">
                                                <p class="mb-0 text-gray text-xs">8:30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="w-100 bg-white rounded-4 card-hover px-4 py-3">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Инсулин короткий</h6>
                                                    <p class="text-sm mb-2">Доза: <span class="fw-semibold">6 ЕД</span>
                                                    </p>
                                                    <p class="mb-0 text-danger text-xs"><i
                                                            class="bi bi-exclamation-circle me-1 fs-6"></i>Не выполнено
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="w-100 d-flex justify-content-end">
                                                <p class="mb-0 text-gray text-xs">8:30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="w-100 bg-white rounded-4 card-hover px-4 py-3">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Инсулин короткий</h6>
                                                    <p class="text-sm mb-2">Доза: <span class="fw-semibold">6 ЕД</span>
                                                    </p>
                                                    <p class="mb-0 text-green text-xs"><i
                                                            class="bi bi-check2-circle me-1 fs-6"></i>Выполнено</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="w-100 d-flex justify-content-end">
                                                <p class="mb-0 text-gray text-xs">8:30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="w-100 bg-white rounded-4 card-hover px-4 py-3">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Инсулин короткий</h6>
                                                    <p class="text-sm mb-2">Доза: <span class="fw-semibold">6 ЕД</span>
                                                    </p>
                                                    <p class="mb-0 text-green text-xs"><i
                                                            class="bi bi-check2-circle me-1 fs-6"></i>Выполнено</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="w-100 d-flex justify-content-end">
                                                <p class="mb-0 text-gray text-xs">8:30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-lg-6">
                                <button class="btn btn-white py-sm-5 py-4 text-md fw-semibold w-100 border-dashed"
                                    type="button">
                                    <i class="fa-solid fa-plus me-2"></i>
                                    <span>Добавить препарат</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                        tabindex="0">...</div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                        tabindex="0">...</div>
                    <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab"
                        tabindex="0">...</div>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="w-100 border p-4 bg-white rounded-4 mt-4">
                <h3 class="text-2xl fw-semibold mb-4"><i class="fa-solid fa-bell me-2 text-corp fs-5"></i>Напоминания
                </h3>
                <div class="border rounded-4 p-3 mb-3 d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                        <span>💊</span>
                        <div class="d-flex flex-column justify-content-center">
                            <p class="text-md fw-semibold text-dark-custom mb-1">Инсулин короткий</p>
                            <span class="text-sm text-gray fw-light"><i
                                    class="fa-regular fa-clock me-1"></i>08:00</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" value="" id="checkNativeSwitch-1">
                        </div>
                        <button class="close-btn-custom"><i class="fa-solid fa-xmark text-gray"></i></button>
                    </div>
                </div>
                <div class="border rounded-4 p-3 mb-3 d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                        <span>🩸</span>
                        <div class="d-flex flex-column justify-content-center">
                            <p class="text-md fw-semibold text-dark-custom mb-1">Измерить сахар</p>
                            <span class="text-sm text-gray fw-light"><i
                                    class="fa-regular fa-clock me-1"></i>13:00</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" value="" id="checkNativeSwitch-2">
                        </div>
                        <button class="close-btn-custom"><i class="fa-solid fa-xmark text-gray"></i></button>
                    </div>
                </div>
                <div class="border rounded-4 p-3 mb-3 d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                        <span>🍽️</span>
                        <div class="d-flex flex-column justify-content-center">
                            <p class="text-md fw-semibold text-dark-custom mb-1">Обед</p>
                            <span class="text-sm text-gray fw-light"><i
                                    class="fa-regular fa-clock me-1"></i>13:00</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" value="" id="checkNativeSwitch-3">
                        </div>
                        <button class="close-btn-custom"><i class="fa-solid fa-xmark text-gray"></i></button>
                    </div>
                </div>
                <button class="btn btn-white text-sm w-100 border-dashed" type="button">
                    <i class="fa-solid fa-plus me-2"></i>
                    <span>Добавить напоминание</span>
                </button>
                <div class="border-dashed p-3 rounded-3 mt-4">
                    <form>
                        <input type="text" class="form-control mb-3" placeholder="Название напоминания">
                        <input type="time" class="form-control mb-3">
                        <select name="notification_name" class="form-select text-sm mb-3" id="notification_name">
                            <option value="2">Лекарство</option>
                            <option value="3">Глюкоза</option>
                            <option value="4">Питание</option>
                        </select>
                        <div class="d-flex align-items-center gap-2">
                            <button type="submit" class="btn btn-primary text-sm">
                                <span>Добавить</span>
                            </button>
                            <button class="btn d-flex align-items-center">
                                <span class="fw-medium text-sm">Отмена</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <div class="w-100 bg-white rounded-4 mt-4 card-hover p-4">
                <div class="d-flex align-items-center justify-content-between gap-3 mb-4">
                    <p class="mb-0 fw-semibold text-xl">Расписание на сегодня</p>
                    <div class="calendar-wrapper">
                        <input type="text" class="hidden-input flatpickr-input">
                        <button type="button" class="calendar-button bg-transparent border-0 p-0">
                            <span>Сегодня</span>
                            <i class="bi bi-calendar-event text-gray px-2 py-1 bg-blue rounded-5"></i>
                        </button>
                    </div>
                </div>
                <div class="mb-3 card-hover-bg rounded-4 p-3 ">
                    <div class="row gy-2 justify-content-between align-items-center">
                        <div class="col-sm-8">
                            <div class="w-100 d-flex gap-2">
                                <i class="fa-solid fa-circle text-green"></i>
                                <div class="text-gray">
                                    <div class="d-flex align-items-center gap-2 mb-1">
                                        <span class="text-xs text-gray">08:00</span>
                                        <h6 class="fw-semibold text-dark-custom mb-0">Инсулин короткий</h6>
                                    </div>
                                    <p class="text-sm mb-2">Доза: <span class="fw-bold">6 ЕД</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="w-100 d-flex justify-content-sm-end">
                                <p class="mb-0 text-green text-xs"><i
                                        class="bi bi-check2-circle me-1 fs-6"></i>Выполнено</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3 card-hover-bg rounded-4 p-3 ">
                    <div class="row gy-2 justify-content-between align-items-center">
                        <div class="col-sm-8">
                            <div class="w-100 d-flex gap-2">
                                <i class="fa-solid fa-circle text-green"></i>
                                <div class="text-gray">
                                    <div class="d-flex align-items-center gap-2 mb-1">
                                        <span class="text-xs text-gray">08:00</span>
                                        <h6 class="fw-semibold text-dark-custom mb-0">Инсулин короткий</h6>
                                    </div>
                                    <p class="text-sm mb-2">Доза: <span class="fw-bold">6 ЕД</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="w-100 d-flex justify-content-sm-end">
                                <p class="mb-0 text-green text-xs"><i
                                        class="bi bi-check2-circle me-1 fs-6"></i>Выполнено</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3 card-hover-bg rounded-4 p-3 ">
                    <div class="row gy-2 justify-content-between align-items-center">
                        <div class="col-sm-8">
                            <div class="w-100 d-flex gap-2">
                                <i class="fa-solid fa-circle text-green"></i>
                                <div class="text-gray">
                                    <div class="d-flex align-items-center gap-2 mb-1">
                                        <span class="text-xs text-gray">08:00</span>
                                        <h6 class="fw-semibold text-dark-custom mb-0">Инсулин короткий</h6>
                                    </div>
                                    <p class="text-sm mb-2">Доза: <span class="fw-bold">6 ЕД</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="w-100 d-flex justify-content-sm-end">
                                <p class="mb-0 text-green text-xs"><i
                                        class="bi bi-check2-circle me-1 fs-6"></i>Выполнено</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3 card-hover-bg rounded-4 p-3 ">
                    <div class="row gy-2 justify-content-between align-items-center">
                        <div class="col-sm-8">
                            <div class="w-100 d-flex gap-2">
                                <i class="fa-solid fa-circle text-warning"></i>
                                <div class="text-gray">
                                    <div class="d-flex align-items-center gap-2 mb-1">
                                        <span class="text-xs text-gray">08:00</span>
                                        <h6 class="fw-semibold text-dark-custom mb-0">Инсулин длинный (Лантус)</h6>
                                    </div>
                                    <p class="text-sm mb-2">Доза: <span class="fw-bold">12 ЕД</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="w-100 d-flex justify-content-sm-end">
                                <p class="mb-0 text-warning text-xs"><i class="bi bi-clock me-1 fs-6"></i>Ожидает</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3 card-hover-bg rounded-4 p-3 ">
                    <div class="row gy-2 justify-content-between align-items-center">
                        <div class="col-sm-8">
                            <div class="w-100 d-flex gap-2">
                                <i class="fa-solid fa-circle text-green"></i>
                                <div class="text-gray">
                                    <div class="d-flex align-items-center gap-2 mb-1">
                                        <span class="text-xs text-gray">08:00</span>
                                        <h6 class="fw-semibold text-dark-custom mb-0">Инсулин короткий</h6>
                                    </div>
                                    <p class="text-sm mb-2">Доза: <span class="fw-bold">6 ЕД</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="w-100 d-flex justify-content-sm-end">
                                <p class="mb-0 text-green text-xs"><i
                                        class="bi bi-check2-circle me-1 fs-6"></i>Выполнено</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>