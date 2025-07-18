<template>
    <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
        <div class="d-flex align-items-center gap-3 mb-4">
            <i class="fa-solid fa-user text-corp bg-blue p-3 rounded-3"></i>
            <p class="fw-semibold text-xl mb-0">Профиль</p>
        </div>
        <form @submit.prevent="saveProfile" class="settings">
            <div class="row">
                <div class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Имя</label>
                            <input type="text" v-model="form.name" class="form-control" id="firstName"
                                placeholder="Введите ваше имя">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="email" class="form-label">Почта</label>
                            <input type="email" v-model="form.email" class="form-control" value="dmitry@example.com"
                                id="email" placeholder="Введите вашу почту">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="phone" class="form-label">Телефон</label>
                            <input type="tel" v-model="form.phone" class="form-control" value="+998 (99) 909-90-19"
                                id="phone" placeholder="Введите номер телефона">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="birthdate" class="form-label">Дата рождения</label>
                            <input type="text" v-model="form.birthday" class="form-control birthdate" value="15.06.1985"
                                id="birthdate">
                        </div>
                    </div>
                </div>
                <div v-if="role === 'P'" class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="height" class="form-label">Рост (см)</label>
                            <input type="number" v-model="form.height" class="form-control" value="195" id="height">
                        </div>
                    </div>
                </div>
                <div v-if="role === 'P'" class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="weight" class="form-label">Вес (кг)</label>
                            <input type="number" v-model="form.weight" class="form-control" min="1" value="96"
                                id="weight">
                        </div>
                    </div>
                </div>
                <div v-if="role === 'P'" class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="diabetesType" class="form-label">Тип диабета</label>
                            <div class="select-wrapper position-relative">
                                <select class="form-select text-sm" v-model="form.diabet_type" id="diabetesType"
                                    required>
                                    <option value="" disabled>Тип диабета</option>
                                    <option value="1">Тип 1</option>
                                    <option value="2">Тип 2</option>
                                    <option value="3">Гестационный</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="role === 'P'" class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <fieldset class="d-flex text-lg d-flex flex-column">
                                <legend class="fw-semibold w-fit-content text-gray text-lg mb-md-0 mb-3">
                                    Цель:</legend>
                                <div class="gap-md-5 gap-2 mt-3 d-flex flex-sm-row flex-column">
                                    <label class="d-flex align-items-center gap-2">
                                        <input type="checkbox" class="form-check-input mt-0" v-model="form.goals"
                                            value="sugar">
                                        <span class="text-gray">Снижение сахара</span>
                                    </label>
                                    <label class="d-flex align-items-center gap-2">
                                        <input type="checkbox" class="form-check-input mt-0" v-model="form.goals"
                                            value="weight">
                                        <span class="text-gray">Контроль веса</span>
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>

                <div v-if="role === 'D'" class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="work_experience" class="form-label">Опыт
                                работы</label>
                            <div class="select-wrapper position-relative">
                                <select class="form-select text-sm" id="work_experience" v-model="form.experience"
                                    required>
                                    <option value="" disabled selected hidden>Опыт работы
                                    </option>
                                    <option value="0-1">Менее 1 года</option>
                                    <option value="1-3">1–3 года</option>
                                    <option value="3-5">3–5 лет</option>
                                    <option value="5-10">5–10 лет</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="role === 'D'" class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="specialization" class="form-label">Специальность</label>
                            <div class="select-wrapper position-relative">
                                <select class="form-select text-sm" id="specialization" v-model="form.specialization"
                                    required>
                                    <option value="" disabled selected hidden>Специальность
                                    </option>
                                    <option value="endocrinologist">Эндокринолог</option>
                                    <option value="nutritionist">Диетолог</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="role === 'D'" class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="doctors_category" class="form-label">Категория
                                врача</label>
                            <div class="select-wrapper position-relative">
                                <select class="form-select text-sm" id="doctors_category" v-model="form.category"
                                    required>
                                    <option value="" disabled selected hidden>Категория врача
                                    </option>
                                    <option value="first">Первая категория</option>
                                    <option value="highest">Высшая категория</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="role === 'D'" class="col-lg-6">
                    <div class="w-100">
                        <div class="mb-3">
                            <label for="licence" class="form-label">Лицензия</label>
                            <input type="text" v-model="form.license" class="form-control" id="licence">
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary shadow mt-3">Сохранить изменения</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                birthday: '',
                height: '',
                weight: '',
                diabet_type: '',
                specialization: '',
                experience: '',
                category: '',
                license: '',
                goals: []
            },
            role: '', // 'P' или 'D'
            userId: null
        };
    },
    mounted() {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        this.role = user.type === 'doctor' ? 'D' : 'P';
        this.userId = user.id;
        this.fetchProfile();
    },
    methods: {
        async fetchProfile() {
            try {
                const endpoint =
                    this.role === 'D'
                        ? `https://059.uz/api/user/doctor?user_id=${this.userId}`
                        : `https://059.uz/api/user/patient?user_id=${this.userId}`;

                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (data && typeof data === 'object') {
                    Object.assign(this.form, data);

                    if (this.role === 'P') {
                        this.form.goals = this.getGoalsFromAim(data.aim);
                    }
                } else {
                    console.warn('Непредвиденный формат данных', data);
                }
            } catch (err) {
                console.error('Ошибка загрузки профиля', err);
            }
        },
        async saveProfile() {

            try {
                const formData = new FormData();
                formData.append('user_id', this.userId);
                formData.append('name', this.form.name);
                formData.append('email', this.form.email);
                formData.append('phone', this.form.phone);
                formData.append('birthday', this.form.birthday);

                if (this.role === 'P') {
                    formData.append('height', this.form.height);
                    formData.append('weight', this.form.weight);
                    formData.append('diabet_type', this.form.diabet_type);

                    const aim = this.getAimFromGoals(this.form.goals);
                    formData.append('aim', aim);
                }

                if (this.role === 'D') {
                    formData.append('specialization', this.form.specialization);
                    formData.append('experience', this.form.experience);
                    formData.append('category', this.form.category);
                    formData.append('license', this.form.license);
                }

                const response = await fetch('https://059.uz/api/user/update', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.success) {
                    alert('Профиль обновлён');
                } else {
                    alert('Ошибка обновления профиля');
                }
            } catch (err) {
                console.error('Ошибка при сохранении', err);

                alert('Ошибка сети');
            }
        },
        cancelChanges() {
            this.fetchProfile();
        },
        getGoalsFromAim(aim) {
            switch (aim) {
                case 1: return ['sugar'];
                case 2: return ['weight'];
                case 3: return ['sugar', 'weight'];
                default: return [];
            }
        },
        getAimFromGoals(goals) {
            if (goals.includes('sugar') && goals.includes('weight')) return 3;
            if (goals.includes('sugar')) return 1;
            if (goals.includes('weight')) return 2;
            return 0;
        },
    }
};
</script>
