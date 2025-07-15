<template>
    <form class="registration" @submit.prevent="submit">
        <div class="row justify-content-center gx-sm-2 gx-0 gy-3">
            <div class="col-sm-6">
                <label for="user_name" class="visually-hidden">Ф.И.О</label>
                <input v-model="form.name" id="user_name" type="text" class="form-control" required placeholder="Ф.И.О">
            </div>
            <div class="col-sm-6">
                <label for="user_phone" class="visually-hidden">Номер
                    телефона</label>
                <input v-model="form.phone" id="user_phone" type="tel" class="form-control"
                    placeholder="Номер телефона">
            </div>
            <div class="col-sm-6">
                <label for="user_email" class="visually-hidden">E-mail</label>
                <input v-model="form.email" id="user_email" type="email" class="form-control" required
                    placeholder="E-mail">
            </div>
            <div class="col-sm-6">
                <label for="user_password" class="visually-hidden">Пароль</label>
                <input v-model="form.password" id="user_password" type="password" class="form-control" required
                    placeholder="Пароль">
            </div>
            <div class="col-sm-6">
                <label for="user_birthDate" class="visually-hidden">Дата
                    рождения</label>
                <DateInput v-model="form.birthday" id="user_birthDate" placeholder="Дата рождения"
                    input-class="birthdate" />
            </div>
            <div class="col-sm-6">
                <div class="select-wrapper position-relative">
                    <label for="diabetes_type" class="visually-hidden">Тип
                        диабета</label>
                    <select class="form-select text-sm" id="diabetes_type" v-model="form.diabet_type" required>
                        <option value="" disabled selected hidden>Тип диабета
                        </option>
                        <option value="1">Тип 1</option>
                        <option value="2">Тип 2</option>
                        <option value="3">Гестационный</option>
                        <option value="4">Другой</option>
                    </select>
                </div>
            </div>
            <div class="col-12">
                <fieldset
                    class="d-flex py-4 text-lg align-items-md-center justify-content-between flex-md-row flex-column">
                    <legend class="fw-semibold w-fit-content text-gray text-lg mb-md-0 mb-3">
                        Цель:</legend>
                    <div class="gap-md-5 gap-2 d-flex flex-sm-row flex-column">
                        <label class="d-flex align-items-center gap-2">
                            <input type="checkbox" class="form-check-input mt-0" v-model="form.goals" value="sugar">
                            <span class="text-gray">Снижение сахара</span>
                        </label>
                        <label class="d-flex align-items-center gap-2">
                            <input type="checkbox" class="form-check-input mt-0" v-model="form.goals" value="weight">
                            <span class="text-gray">Контроль веса</span>
                        </label>
                    </div>
                </fieldset>
            </div>
            <div class="col-sm-6">
                <label for="user_weight" class="visually-hidden">Ваш вес</label>
                <input v-model="form.weight" id="user_weight" type="number" min="1" max="200" class="form-control"
                    required placeholder="Ваш вес">
            </div>
            <div class="col-sm-6">
                <div class="select-wrapper position-relative">
                    <label for="diagnosis_year" class="visually-hidden">Год
                        постановки диагноза</label>
                    <select class="form-select text-sm" id="diagnosis_year" v-model="form.year_of_diagnosis" required>
                        <option value="" disabled selected hidden>Год постановки
                            диагноза</option>
                        <option value="2000">2000</option>
                        <option value="2002">2002</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="select-wrapper position-relative">
                    <label for="current_treatment" class="visually-hidden">Текущее
                        лечение</label>
                    <select class="form-select text-sm" id="current_treatment" v-model="form.current_treatment"
                        required>
                        <option value="" disabled selected hidden>Текущее лечение
                        </option>
                        <option value="1">Лечение 1 </option>
                        <option value="2">Лечение 2</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="select-wrapper position-relative">
                    <label for="sugar_measurements" class="visually-hidden">Частота
                        измерений сахара</label>
                    <select class="form-select text-sm" id="sugar_measurements"
                        v-model="form.glucose_measurement_frequency" required>
                        <option value="" disabled selected hidden>Частота измерений
                            сахара</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
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
                password: '',
                birthday: '',
                weight: '',
                diabet_type: '',
                aim: '',
                year_of_diagnosis: '',
                current_treatment: '',
                glucose_measurement_frequency: '',
                goals: []
            }
        };
    },
    methods: {
        submit() {
            const goals = this.form.goals;

            let aim = 0;
            if (goals.includes('sugar') && goals.includes('weight')) {
                aim = 3;
            } else if (goals.includes('sugar')) {
                aim = 1;
            } else if (goals.includes('weight')) {
                aim = 2;
            }

            const preparedForm = {
                ...this.form,
                aim: aim,
                diabet_type: Number(this.form.diabet_type),
                weight: Number(this.form.weight),
                year_of_diagnosis: Number(this.form.year_of_diagnosis),
                current_treatment: Number(this.form.current_treatment),
                glucose_measurement_frequency: Number(this.form.glucose_measurement_frequency)
            };

            delete preparedForm.goals;
            this.$emit('submitForm', preparedForm);
        }
    }
};
</script>