<template>
    <form class="registration" @submit.prevent="submit">
        <div class="row justify-content-center gx-sm-2 gx-0 gy-3">
            <div class="col-sm-6">
                <label for="doctor_name" class="visually-hidden">Ф.И.О</label>
                <input v-model="form.name" id="doctor_name" type="text" class="form-control" required
                    placeholder="Ф.И.О">
            </div>
            <div class="col-sm-6">
                <label for="doctor_phone" class="visually-hidden">Номер
                    телефона</label>
                <input v-model="form.phone" id="doctor_phone" type="tel" class="form-control"
                    placeholder="Номер телефона ">
            </div>
            <div class="col-sm-6">
                <label for="doctor_email" class="visually-hidden">E-mail</label>
                <input v-model="form.email" type="email" id="doctor_email" class="form-control" required
                    placeholder="E-mail ">
            </div>
            <div class="col-sm-6">
                <label for="doctor_password" class="visually-hidden">Пароль</label>
                <input v-model="form.password" type="password" id="doctor_password" class="form-control" required
                    placeholder="Пароль ">
            </div>
            <div class="col-sm-6">
                <label for="doctor_birthDate" class="visually-hidden">Дата
                    рождения</label>
                <DateInput v-model="form.birthday" id="doctor_birthDate" placeholder="Дата рождения"
                    input-class="birthdate" />
            </div>
            <div class="col-sm-6">
                <div class="select-wrapper position-relative">
                    <label for="specialization" class="visually-hidden">Специальность</label>
                    <select class="form-select text-sm" id="specialization" v-model="form.specialization" required>
                        <option value="" disabled selected hidden>Специальность
                        </option>
                        <option value="endocrinologist">Эндокринолог</option>
                        <option value="nutritionist">Диетолог</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="select-wrapper position-relative">
                    <label for="doctors_category" class="visually-hidden">Категория
                        врача</label>
                    <select class="form-select text-sm" id="doctors_category" v-model="form.category" required>
                        <option value="" disabled selected hidden>Категория врача
                        </option>
                        <option value="first">Первая категория</option>
                        <option value="highest">Высшая категория</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="select-wrapper position-relative">
                    <label for="work_experience" class="visually-hidden">Опыт
                        работы</label>
                    <select class="form-select text-sm" id="work_experience" v-model="form.experience" required>
                        <option value="" disabled selected hidden>Опыт работы
                        </option>
                        <option value="0-1">Менее 1 года</option>
                        <option value="1-3">1–3 года</option>
                        <option value="3-5">3–5 лет</option>
                        <option value="5-10">5–10 лет</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-6">
                <label for="licence" class="visually-hidden">Лицензия</label>
                <input v-model="form.license" id="licence" type="text" class="form-control" placeholder="Лицензия">
            </div>
        </div>
        <button type="submit" class="btn btn-primary shadow mt-4 mx-auto d-block btn-long">Продолжить</button>
    </form>
</template>
<script>
import DateInput from '@/components/DateInput.vue'
export default {
    components: {
        DateInput
    },
    emits: ['submitForm'],
    data() {
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                birthday: '',
                password: '',
                specialization: '',
                category: '',
                experience: '',
                license: ''
            }
        };
    },
    methods: {
        submit() {
            this.$emit('submitForm', this.form);
        }
    }
};
</script>
