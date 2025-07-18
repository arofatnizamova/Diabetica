<template>
    <div class="row justify-content-center">
        <div class="col-xxl-8 col-lg-10">
            <div class="w-100 h-100">
                <div class="row gy-xl-0 gy-4">
                    <div class="col-xl-7">
                        <!-- info -->
                        <InfoCard title="Настройки" subtitle="Управляйте профилем и настройками приложения"
                            :image="imageSrc" />
                    </div>
                </div>
                <!-- form -->
                <ProfileSettings />
                <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
                    <div class="d-flex align-items-center gap-3 mb-4">
                        <i class="fa-solid fa-bell text-corp bg-blue p-3 rounded-3"></i>
                        <p class="fw-semibold text-xl mb-0">Уведомления</p>
                    </div>
                    <form class="settings">
                        <div class="border-bottom pb-2 mb-sm-5 mb-4 d-flex align-items-center justify-content-between">
                            <div class="d-flex flex-column">
                                <label for="reminder-glucose" class="text-lg lh-sm mb-0 fw-medium">Напоминание о
                                    глюкозе</label>
                                <span class="text-gray text-sm lh-sm fw-light">Напоминания об измерении сахара</span>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="" id="reminder-glucose">
                            </div>
                        </div>
                        <div class="border-bottom pb-2 mb-sm-5 mb-4 d-flex align-items-center justify-content-between">
                            <div class="d-flex flex-column">
                                <label for="reminder-medicine" class="text-lg lh-sm mb-0 fw-medium">Напоминания о
                                    лекарстве</label>
                                <span class="text-gray text-sm lh-sm fw-light">Напоминания о приеме инсулина и
                                    препаратов</span>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="" id="reminder-medicine">
                            </div>
                        </div>
                        <div class="border-bottom pb-2 mb-sm-5 mb-4 d-flex align-items-center justify-content-between">
                            <div class="d-flex flex-column">
                                <label for="reminder-food" class="text-lg lh-sm mb-0 fw-medium">Уведомление о
                                    еде</label>
                                <span class="text-gray text-sm lh-sm fw-light">Напоминания о приемах пищи</span>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="" id="reminder-food">
                            </div>
                        </div>
                        <div class="border-bottom pb-2 mb-sm-5 mb-4 d-flex align-items-center justify-content-between">
                            <div class="d-flex flex-column">
                                <label for="reminder-activity" class="text-lg lh-sm mb-0 fw-medium">Напоминания об
                                    активности</label>
                                <span class="text-gray text-sm lh-sm fw-light">Напоминания о физической
                                    активности</span>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="" id="reminder-activity">
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex flex-column">
                                <label for="reminder-critical" class="text-lg lh-sm mb-0 fw-medium">Критические
                                    уведомления</label>
                                <span class="text-gray text-sm lh-sm fw-light">Предупреждение о высоком/низком
                                    сахаре</span>
                            </div>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="" id="reminder-critical">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary shadow mt-5">Сохранить изменения</button>
                    </form>
                </div>
                <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
                    <div class="d-flex align-items-center gap-3 mb-4">
                        <i class="fa-solid fa-gear  text-corp bg-blue p-3 rounded-3"></i>
                        <p class="fw-semibold text-xl mb-0">Настройки приложения</p>
                    </div>
                    <form class="settings">
                        <div class="row">
                            <!-- Units of measurement -->
                            <div class="col-lg-6">
                                <div class="w-100">
                                    <div class="mb-3">
                                        <label for="glucose-unit" class="form-label">Единицы измерения глюкозы</label>
                                        <div class="select-wrapper position-relative">
                                            <select class="form-select text-sm" name="glucose_unit" id="glucose-unit">
                                                <option value="mmol" selected>ммоль/л</option>
                                                <option value="mgdl">мг/дл</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Language -->
                            <div class="col-lg-6">
                                <div class="w-100">
                                    <div class="mb-3">
                                        <label for="language-select" class="form-label">Язык</label>
                                        <div class="select-wrapper position-relative">
                                            <select class="form-select text-sm" name="language" id="language-select">
                                                <option value="ru" selected>Русский</option>
                                                <option value="uz">O‘zbekcha</option>
                                                <option value="en">English</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Glucose diaposone -->
                            <div class="col-lg-12">
                                <div class="w-100">
                                    <p class="fw-medium mb-0">Диапазон нормы глюкозы</p>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3 w-100">
                                                <label for="glucose-range-from"
                                                    class="form-label text-dirt text-sm">От</label>
                                                <input type="number" step="0.1" class="form-control" min="0" max="10"
                                                    value="3.9" id="glucose-range-from" name="glucose_range_from">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3 w-100">
                                                <label for="glucose-range-to"
                                                    class="form-label text-dirt text-sm">До</label>
                                                <input type="number" step="0.1" class="form-control" min="0" max="10"
                                                    value="7.0" id="glucose-range-to" name="glucose_range_to">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary shadow mt-3">Сохранить изменения</button>
                    </form>
                </div>
                <div class="mt-4 text-lg">
                    <button class="btn btn-danger rounded-5" data-bs-toggle="modal" data-bs-target="#logoutModal">
                        Выйти из аккаунта
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Модальное окно -->
    <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="logoutModalLabel">Подтверждение выхода</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body">
                    Вы действительно хотите выйти из аккаунта?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                    <button type="button" class="btn btn-danger" @click="logout">Выйти</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import InfoCard from '@/components/InfoCard.vue';
import imageSrc from '@/assets/images/men.png'
import ProfileSettings from '@/components/ProfileSettings.vue';

export default {
    name: 'SettingsView',
    components: {
        InfoCard,
        ProfileSettings
    },
    data() {
        return {
            imageSrc
        };
    },
    methods: {
        logout() {
            localStorage.removeItem('user');
            location.reload();
        }
    }
}
</script>