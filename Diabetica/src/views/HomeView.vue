<template>
  <!-- DashboardHeader -->
                    <div id="DashboardHeader">
                        <div class="row gy-4">
                            <div class="col-xl-4 col-lg-5">
                                <div class="w-100">
                                    <h2 class="text-2xl fw-bold mb-0">
                                        Добро пожаловать, Дмитрий
                                    </h2>
                                    <p class="text-gray fw-light">вторник, 1 июля</p>
                                </div>
                            </div>
                            <div class="col-xl-8 col-lg-7">
                                <div class="w-100 d-flex flex-wrap justify-content-xl-end gap-3 align-items-center">
                                    <div class="">
                                        <button class="btn btn-white text-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight-2" aria-controls="offcanvasRight-2">
                                            <i class="fa-solid fa-arrow-up-from-bracket me-1"></i>
                                            <span>Загрузить данные</span>
                                        </button>
                                            
                                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight-2" aria-labelledby="offcanvasRightLabel">
                                            <div class="offcanvas-header pb-0">
                                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                            <div class="offcanvas-body pt-0 px-4 text-sm">
                                                <h5 class="text-lg fw-semibold">Импорт данных</h5>
                                                <p class="opacity-75">Загрузите файл с устройства или введите данные вручную</p>
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="data-type" class="form-label fw-semibold">Тип данных</label>
                                                        <select class="form-select text-sm" id="data-type" aria-label="Default select example">
                                                            <option selected>Глюкоза</option>
                                                            <option value="1">Инсулин</option>
                                                            <option value="2">Питание</option>
                                                            <option value="3">Активность</option>
                                                        </select>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="fileInput" class="form-label fw-semibold">Загрузка файла</label>
                                                        <div class="file-upload mt-2" id="file-drop-area">
                                                            <input type="file" id="fileInput" class="file-input">
                                                            <div class="upload-placeholder">
                                                                <i class="bi bi-file-earmark-arrow-up fs-2 text-gray"></i>
                                                                <p class="mt-2 text-sm">Перетащите файл или нажмите для выбора</p>
                                                                <label for="fileInput" class="upload-button text-sm">Выбрать файл</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <p class="form-label fw-semibold">Или введите данные вручную</p>
                                                        <div class="row gx-0">
                                                            <div class="col-6">
                                                                <div class="w-100 px-1">
                                                                    <label for="glucose_value" class="form-label text-xs">Значение (ммоль/л)</label>
                                                                    <input type="number" step="0.1" id="glucose_value" class="form-control" value="5.5" min="0">
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="w-100 px-1">
                                                                    <label for="time" class="form-label text-xs">Дата и время</label>
                                                                    <input type="datetime-local" id="time" class="form-control" value="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary w-100 text-sm">Сохранить данные</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="">
                                        <button class="btn btn-white text-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight-3" aria-controls="offcanvasRight-3">
                                            <i class="fa-solid fa-plus me-1"></i>
                                            <span>Добавить показатель</span></button>
                                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight-3" aria-labelledby="offcanvasRightLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    ...
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="btn btn-primary text-sm">
                                        <i class="fa-solid fa-plus me-1"></i>
                                        <span>Запись</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- HealthToolsPanel -->
                    <div id="HealthToolsPanel">
                        <div class="d-flex pt-3 align-items-center text-sm flex-wrap gap-3">
                            <div>
                                <button class="btn btn-white text-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight-4" aria-controls="offcanvasRight-4">
                                    <i class="bi bi-book me-1"></i>
                                    <span>Школа диабета</span>
                                </button>
                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight-4" aria-labelledby="offcanvasRightLabel">
                                    <div class="offcanvas-header pb-0">
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                    <div class="offcanvas-body pt-0 px-4 text-sm">
                                        <h5 class="text-lg fw-semibold">Школа диабета</h5>
                                        <p class="opacity-75">Образовательные материалы и курсы по управлению диабетом</p>
                                        <div class="bg-corp-light d-flex gap-3 align-items-center rounded-3 card-progress p-3 mb-3 card-hover text-sm">
                                            <i class="fa-solid fa-medal text-corp fs-3"></i>
                                            <div class="">
                                                <p class="text-md fw-semibold">Общий прогресс обучения</p>
                                                <div class="progress-line mt-1 mb-1">
                                                    <div class="progress-line-inside">
                                                    </div>
                                                </div>
                                                <p class="mb-0 text-xs text-gray" data-percent="40"> <span>2</span> из <span>5 </span>уроков начаты</p>
                                            </div>
                                        </div>
                                        <h5 class="text-lg fw-semibold">Доступные курсы</h5>
                                        <div class="bg-white rounded-3 card-progress p-3 mb-3 card-hover text-sm">
                                            <h4 class="fw-semibold text-sm">Основы диабета</h4>
                                            <p class="text-gray text-sm">Что такое диабет, типы, причины и симптомы</p>
                                            <div class="d-flex text-gray justify-content-between">
                                                <p class="mb-0 text-xs"> <span>4</span> из <span>5 </span>уроков</p>
                                                <span class="text-xs" data-percent="80">80%</span>
                                            </div>
                                            <div class="progress-line mt-1 mb-3">
                                                <div class="progress-line-inside">
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-primary text-sm">
                                                <span>Продолжить</span>
                                            </a>
                                        </div>
                                        <div class="bg-white rounded-3 card-progress p-3 mb-3 card-hover text-sm">
                                            <h4 class="fw-semibold text-sm">Питание при диабете</h4>
                                            <p class="text-gray text-sm">Хлебные единицы, гликемический индекс, составление меню</p>
                                            <div class="d-flex text-gray justify-content-between">
                                                <p class="mb-0 text-xs"> <span>2</span> из <span>8 </span>уроков</p>
                                                <span class="text-xs" data-percent="30">30%</span>
                                            </div>
                                            <div class="progress-line mt-1 mb-3">
                                                <div class="progress-line-inside">
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-primary text-sm">
                                                <span>Продолжить</span>
                                            </a>
                                        </div>
                                        <div class="bg-white rounded-3 card-progress p-3 mb-3 card-hover text-sm">
                                            <h4 class="fw-semibold text-sm">Инсулинотерапия</h4>
                                            <p class="text-gray text-sm">Типы инсулина, подсчет дозировки, техника введения</p>
                                            <div class="d-flex text-gray justify-content-between">
                                                <p class="mb-0 text-xs"> <span>0</span> из <span>6 </span>уроков</p>
                                                <span class="text-xs" data-percent="0">0%</span>
                                            </div>
                                            <div class="progress-line mt-1 mb-3">
                                                <div class="progress-line-inside">
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-white text-sm">
                                                <span>Начать обучение</span>
                                            </a>
                                        </div>
                                        <div class="bg-white rounded-3 card-progress p-3 mb-3 card-hover text-sm">
                                            <h4 class="fw-semibold text-sm">Самоконтроль</h4>
                                            <p class="text-gray text-sm">Как правильно измерять уровень глюкозы, вести дневник</p>
                                            <div class="d-flex text-gray justify-content-between">
                                                <p class="mb-0 text-xs"> <span>2</span> из <span>4 </span>уроков</p>
                                                <span class="text-xs" data-percent="50">50%</span>
                                            </div>
                                            <div class="progress-line mt-1 mb-3">
                                                <div class="progress-line-inside">
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-primary text-sm">
                                                <span>Продолжить</span>
                                            </a>
                                        </div>
                                        <a href="#" class="text-sm mt-3  d-block text-center hovered-link">Смотреть все курсы</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button class="btn btn-white text-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight-9" aria-controls="offcanvasRight-9">
                                    <i class="bi bi-calculator me-1"></i>
                                    <span>Хлебные единицы</span>
                                </button>
                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight-9" aria-labelledby="offcanvasRightLabel">
                                    <div class="offcanvas-header pb-0">
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                    <div class="offcanvas-body pt-0 px-4 text-sm">
                                        <h5 class="text-lg fw-semibold">Калькулятор хлебных единиц</h5>
                                        <p class="opacity-75">Рассчитайте углеводы и хлебные единицы в продуктах</p>
                                        <form>
                                            <div class="mb-3">
                                                <label for="product_category" class="form-label fw-semibold">Категория продукта</label>
                                                <select class="form-select text-sm" id="product_category">
                                                    <option selected="">Все продукты</option>
                                                    <option value="1">Хлебобулочные</option>
                                                    <option value="2">Крупы</option>
                                                    <option value="3">Овощи</option>
                                                    <option value="4">Фрукты</option>
                                                    <option value="5">Молочные</option>
                                                    <option value="6">Сладости</option>
                                                </select>
                                                <label for="product" class="form-label mt-3 fw-semibold">Продукт</label>
                                                <select class="form-select text-sm" id="product">
                                                    <option selected="">Выберите продукт</option>
                                                    <option value="1">Хлебобулочные</option>
                                                </select>
                                                <label for="product_weight" class="form-label mt-3 fw-semibold">Вес (грамм)</label>
                                                <input type="number" id="product_weight" class="form-control" value="100" min="1">
                                            </div>
                                            <button type="submit" disabled class="btn btn-primary w-100 text-sm">Расчитать</button>
                                        </form>
                                        <a href="#" class="text-sm mt-3  d-block text-center hovered-link">Справочник продуктов и ХЕ</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="btn btn-white text-sm">
                                <i class="fa-solid fa-apple-whole me-1"></i>
                                <span>Питание</span>
                            </a>
                            <a href="#" class="btn btn-white text-sm">
                                <i class="bi bi-robot me-1"></i>
                                <span>Спросить AI-ассистента</span>
                            </a>
                            <a href="risk-analysis.html" class="btn btn-white text-sm">
                                <i class="bi bi-exclamation-triangle me-1"></i>
                                <span>Анализ рисков</span>
                            </a>
                            <a href="#" class="btn btn-white text-sm">
                                <i class="bi bi-camera-video me-1"></i>
                                <span>Телемедицина</span>
                            </a>
                            <a href="#" class="btn btn-white text-sm">
                                <i class="fa-regular fa-bell me-1"></i>
                                <span>Напоминания</span>
                            </a>
                        </div>
                    </div>
                    <!-- MetricsCards -->
                    <div id="MetricsCards">
                        <div class="pt-3">
                            <div class="row gx-sm-3 gx-0 gy-3">
                                <div class="col-xl-3 col-sm-6">
                                    <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                        <div>
                                            <p class="opacity-75 fw-semibold mb-1">Текущая глюкоза</p>
                                            <p class="text-2xl fw-bold">6 ммоль/л</p>
                                            <p class="mb-0 text-success"><i class="bi bi-arrow-down me-1"></i> В норме</p>
                                        </div>
                                        <div class="text-success bg-green p-2 rounded-3 h-fit-content">
                                            <i class="fa-solid fa-chart-pie fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6">
                                    <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                        <div>
                                            <p class="opacity-75 fw-semibold mb-1">Средняя глюкоза</p>
                                            <p class="text-2xl fw-bold">6.3 ммоль/л</p>
                                            <p class="mb-0 text-primary"><i class="bi bi-arrow-down me-1"></i> -0.4 от вчера</p>
                                        </div>
                                        <div class="text-primary bg-blue p-2 rounded-3 h-fit-content">
                                            <i class="fa-solid fa-chart-pie fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6">
                                    <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                        <div>
                                            <p class="opacity-75 fw-semibold mb-1">Углеводы сегодня</p>
                                            <p class="text-2xl fw-bold">124 г</p>
                                        </div>
                                        <div class="text-warning bg-yellow p-2 rounded-3 h-fit-content">
                                            <i class="fa-solid fa-apple-whole fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6">
                                    <div class="w-100 h-100 bg-white rounded-3 p-3 card-hover text-sm d-flex justify-content-between">
                                        <div>
                                            <p class="opacity-75 fw-semibold mb-1">Активность</p>
                                            <p class="text-2xl fw-bold">3,245 шагов</p>
                                            <p class="mb-0 text-primary"><i class="bi bi-arrow-up me-1"></i> 23% от цели</p>
                                        </div>
                                        <div class="text-primary bg-blue p-2 rounded-3 h-fit-content">
                                            <i class="fa-solid fa-heart-pulse fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- DailyGlucoseChart -->
                    <div id="DailyGlucoseChart">
                        <div class="mt-4 bg-white mb-3 rounded-4 p-3 card-hover">
                            <div class="d-flex mb-4 align-items-center justify-content-between">
                                <h3 class="text-lg fw-semibold">Глюкоза сегодня</h3>
                                <a href="#" class="text-sm fw-semibold hovered-link">Подробнее</a>
                            </div>
                            <div class="px-2">
                                <div id="glucoseChart"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4 gx-lg-3 gx-0 gy-4">
                        <div class="col-xl-8">
                            <!-- MealEntryCardList -->
                            <div id="MealEntryCardList" class="w-100">
                                <div class="d-flex mb-4 align-items-center justify-content-between">
                                    <h3 class="text-lg fw-semibold">Приемы пищи</h3>
                                    <a href="#" class="text-sm fw-semibold hovered-link">Все записи</a>
                                </div>
                                <div class="bg-white mb-3 rounded-4 p-3 card-hover">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100 d-flex gap-3">
                                                <img src="../assets/images/meal.jpg" alt="" class="object-fit-cover meal-img rounded-4">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Завтрак</h6>
                                                    <p class="text-sm mb-0">Углеводы: <span class="fw-semibold">45 г</span></p>
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
                                <div class="bg-white mb-3 rounded-4 p-3 card-hover">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100 d-flex gap-3">
                                                <img src="../assets/images/meal.jpg" alt="" class="object-fit-cover meal-img rounded-4">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Обед</h6>
                                                    <p class="text-sm mb-0">Углеводы: <span class="fw-semibold">65 г</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="w-100 d-flex justify-content-end">
                                                <p class="mb-0 text-gray text-xs">14:30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white rounded-4 p-3 card-hover">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100 d-flex gap-3">
                                                <img src="../assets/images/meal.jpg" alt="" class="object-fit-cover meal-img rounded-4">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Ужин</h6>
                                                    <p class="text-sm mb-0">Углеводы: <span class="fw-semibold">15 г</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="w-100 d-flex justify-content-end">
                                                <p class="mb-0 text-gray text-xs">19:30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- InsulinIntakeList -->
                            <div id="InsulinIntakeList" class="w-100 mt-lg-5 mt-4 ">
                                <div class="d-flex mb-4 align-items-center justify-content-between">
                                    <h3 class="text-lg fw-semibold">Инсулин и препараты</h3>
                                    <a href="#" class="text-sm fw-semibold hovered-link">Расписание</a>
                                </div>
                                <div class="bg-white mb-3 rounded-4 p-3 card-hover">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Инсулин короткий</h6>
                                                    <p class="text-sm mb-2">Доза: <span class="fw-semibold">6 ЕД</span></p>
                                                    <p class="mb-0 text-green text-xs"><i class="bi bi-check2-circle me-1 fs-6"></i>Выполнено</p>
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
                                <div class="bg-white mb-3 rounded-4 p-3 card-hover">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Инсулин короткий</h6>
                                                    <p class="text-sm mb-2">Доза: <span class="fw-semibold">8 ЕД</span></p>
                                                    <p class="mb-0 text-green text-xs"><i class="bi bi-check2-circle me-1 fs-6"></i>Выполнено</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="w-100 d-flex justify-content-end">
                                                <p class="mb-0 text-gray text-xs">13:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white mb-3 rounded-4 p-3 card-hover">
                                    <div class="row justify-content-between">
                                        <div class="col-10">
                                            <div class="w-100">
                                                <div class="text-gray pt-2">
                                                    <h6 class="fw-semibold text-dark-custom">Инсулин длинный</h6>
                                                    <p class="text-sm mb-2">Доза: <span class="fw-semibold">12 ЕД</span></p>
                                                    <p class="mb-0 text-warning text-xs"><i class="bi bi-clock me-1 fs-6"></i>Ожидает</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="w-100 d-flex justify-content-end">
                                                <p class="mb-0 text-gray text-xs">21:30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <!-- AI-prediction -->
                            <div class="w-100 border p-4 bg-white rounded-4">
                                <h3 class="text-2xl fw-semibold mb-4"><i class="bi bi-exclamation-triangle me-2 text-corp fs-5"></i>AI-Прогноз рисков</h3>
                                <div class="bg-main rounded-4 p-3 card-progress ">
                                    <p class="text-md fw-semibold mb-0">Общий риск осложнений<span class="text-gray text-xs fw-normal ms-2"><i class="bi bi-graph-down-arrow me-1 text-green"></i>Снижается</span></p>
                                    <div class="progress-line my-2">
                                        <div class="progress-line-inside">
                                        </div>
                                    </div>
                                    <span class="text-sm text-gray" data-percent="32">32% - Умеренный риск</span>
                                </div>
                                <h6 class="mt-4 mb-3 fw-semibold text-md text-dark-custom">Прогноз по категориям:</h6>
                                <div class="bg-green rounded-4 p-3 card-progress mb-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="text-md fw-semibold mb-0">Гипогликемия</p>
                                        <span class="text-sm text-green fw-semibold" data-percent="25">25%</span>
                                    </div>
                                    <div class="progress-line my-2">
                                        <div class="progress-line-inside">
                                        </div>
                                    </div>
                                    <span class="text-gray text-xs">
                                        Низкий риск в ближайшие 4 часа
                                    </span>
                                </div>
                                <div class="bg-yellow rounded-4 p-3 card-progress mb-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="text-md fw-semibold mb-0">Гипергликемия</p>
                                        <span class="text-sm text-warning fw-semibold" data-percent="60">60%</span>
                                    </div>
                                    <div class="progress-line my-2">
                                        <div class="progress-line-inside">
                                        </div>
                                    </div>
                                    <span class="text-gray text-xs">
                                        Средний риск после еды
                                    </span>
                                </div>
                                <div class="bg-green rounded-4 p-3 card-progress mb-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="text-md fw-semibold mb-0">Нейропатия</p>
                                        <span class="text-sm text-green fw-semibold" data-percent="15">15%</span>
                                    </div>
                                    <div class="progress-line my-2">
                                        <div class="progress-line-inside">
                                        </div>
                                    </div>
                                    <span class="text-gray text-xs">
                                        Хороший контроль глюкозы
                                    </span>
                                </div>
                                <div class="bg-yellow rounded-4 p-3 card-progress mb-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="text-md fw-semibold mb-0">Ретинопатия</p>
                                        <span class="text-sm text-warning fw-semibold" data-percent="30">30%</span>
                                    </div>
                                    <div class="progress-line my-2">
                                        <div class="progress-line-inside">
                                        </div>
                                    </div>
                                    <span class="text-gray text-xs">
                                        Рекомендован осмотр окулиста
                                    </span>
                                </div>
                                <div class="rounded-4 p-3 bg-corp-light text-dark-blue">
                                    <h6 class="text-md fw-semibold"><i class="bi bi-robot me-2 fs-5"></i>AI Рекомендации:</h6>
                                    <ul class="text-sm list-unstyled fw-light ps-0 mb-0">
                                        <li>• Увеличьте физическую активность на 20 мин/день</li>
                                        <li>• Контролируйте углеводы в вечернее время</li>
                                        <li>• Запланируйте визит к офтальмологу</li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Reminders -->
                            <div class="w-100 border p-4 bg-white rounded-4 mt-4">
                                <h3 class="text-2xl fw-semibold mb-4"><i class="fa-solid fa-bell me-2 text-corp fs-5"></i>Напоминания</h3>
                                <div class="border rounded-4 p-3 mb-3 d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center gap-2">
                                        <span>💊</span>
                                        <div class="d-flex flex-column justify-content-center">
                                            <p class="text-md fw-semibold text-dark-custom mb-1">Инсулин короткий</p>
                                            <span class="text-sm text-gray fw-light"><i class="fa-regular fa-clock me-1"></i>08:00</span>
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
                                            <span class="text-sm text-gray fw-light"><i class="fa-regular fa-clock me-1"></i>13:00</span>
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
                                            <span class="text-sm text-gray fw-light"><i class="fa-regular fa-clock me-1"></i>13:00</span>
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
                                        <select name="notification_name" class="form-select text-sm mb-3">
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
                    </div>
</template>

<script setup>
// Здесь может быть логика компонента позже
</script>

<style scoped>
/* При необходимости можно добавить стили */
</style>
