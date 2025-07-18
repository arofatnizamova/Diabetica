<template>
    <div class="w-100 border p-4 bg-white rounded-4 mt-4">
        <h3 class="text-2xl fw-semibold mb-4"><i class="fa-solid fa-bell me-2 text-corp fs-5"></i>Напоминания
        </h3>
        <div class="border rounded-4 p-3 mb-3 d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
                <span>💊</span>
                <div class="d-flex flex-column justify-content-center">
                    <p class="text-md fw-semibold text-dark-custom mb-1">Инсулин короткий</p>
                    <p class="text-sm mb-2">Доза: <span class="fw-semibold">6 ЕД</span>
                    </p>
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
        <button v-if="!showForm" class="btn btn-white text-sm w-100 border-dashed" type="button"
            @click="showForm = true">
            <i class="fa-solid fa-plus me-2"></i>
            <span>Добавить напоминание</span>
        </button>
        <div v-if="showForm" class="border-dashed p-3 rounded-3 mt-4">
            <form @submit.prevent="saveNotification">
                <input type="text" v-model="form.medicineName" class="form-control mb-3" required
                    placeholder="Название препарата">
                <input type="time" v-model="form.time" class="form-control mb-3">
                <select v-model="form.type" required class="form-select text-sm mb-3" id="notification_name">
                    <option value="" disabled selected hidden>Тип препарата</option>
                    <option value="1">Лекарство</option>
                    <option value="2">Инсулин</option>
                </select>
                <input type="number" v-model="form.quantity" min="0" class="form-control mb-3" placeholder="Доза">
                <div class="d-flex align-items-center gap-2">
                    <button type="submit" class="btn btn-primary text-sm">
                        <span>Добавить</span>
                    </button>
                    <button type="button" class="btn d-flex align-items-center" @click="cancelForm">
                        <span class="fw-medium text-sm">Отмена</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showForm: false,
            form: {
                medicineName: '',
                time: '',
                type: '',
                quantity: ''
            }
        };
    },
    methods: {
        async saveNotification() {
            const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
            const userId = storedUser.id;
            const { quantity, type, time, medicineName } = this.form;

            try {
                const formData = new FormData();
                formData.append('user_id', userId);
                formData.append('quantity', Number(quantity));
                formData.append('type', Number(type));
                formData.append('time', time);
                formData.append('name', medicineName);

                const response = await fetch('https://059.uz/api/medication/add', {
                    method: 'POST',
                    body: formData,
                });

                const result = await response.json();

                if (result.success) {
                    alert('Напомиание добавлено');
                } else {
                    alert('Ошибка при сохранении напоминания');
                }
            } catch (error) {
                console.error(error);
                alert('Ошибка сети при отправке замера');
            }

            this.resetForm();
        },
        cancelForm() {
            this.resetForm();
        },
        resetForm() {
            this.form = {
                medicineName: '',
                time: '',
                type: '',
                quantity: ''
            };
            this.showForm = false;
        }
    }
}

</script>