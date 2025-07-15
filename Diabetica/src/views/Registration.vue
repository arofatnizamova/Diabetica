<template>
    <section>
        <div class="row gx-0">
            <div class="col-lg-6">
                <img src="../assets/images/authorization-and-registration/2.png" alt=""
                    class="d-lg-block d-none w-100 h-100vh img-fluid object-fit-cover">
            </div>
            <div class="col-lg-6">
                <div
                    class="w-100 h-100 py-lg-0 py-5 d-flex flex-column align-items-center justify-content-center position-relative">
                    <div
                        class="position-absolute top-0 end-0 d-flex align-items-center justify-content-end gap-3 pt-4 pe-4 w-100">
                        <a href="#" class="d-flex align-items-center gap-2">
                            <img src="../assets/icons/ru.svg" alt="" class="flag-icon">
                            <span class="fw-light">Ру</span>
                        </a>
                        <a href="#" class="d-flex align-items-center gap-2">
                            <img src="../assets/icons/uz.svg" alt="" class="flag-icon">
                            <span class="fw-light">Uz</span>
                        </a>
                        <a href="#" class="d-flex align-items-center gap-2">
                            <img src="../assets/icons/gb.svg" alt="" class="flag-icon">
                            <span class="fw-light">En</span>
                        </a>
                    </div>
                    <h1 class="mb-5 mt-lg-0 mt-5 text-gray">Регистрация</h1>
                    <ul class="nav nav-pills registration-tab mb-3 gap-lg-4 gap-2" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" :class="{ active: userType === 'patient' }"
                                @click="userType = 'patient'">
                                Я пациент
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" :class="{ active: userType === 'doctor' }"
                                @click="userType = 'doctor'">
                                Я врач
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content w-100 mt-lg-5 mt-4">
                        <div class="row gx-0 justify-content-center">
                            <div class="col-xxl-8 col-11">
                                <div class="w-100">
                                    <PatientForm v-if="userType === 'patient'" @submitForm="handleSubmit" />
                                    <DoctorForm v-else @submitForm="handleSubmit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import PatientForm from '@/components/PatientForm.vue';
import DoctorForm from '@/components/DoctorForm.vue';

export default {
    components: { PatientForm, DoctorForm },
    data() {
        return {
            userType: 'patient',
        };
    },
    methods: {
        async handleSubmit(formData) {
            try {
                const endpoint =
                    this.userType === 'patient'
                        ? 'https://059.uz/api/register/patient'
                        : 'https://059.uz/api/register/doctor'

                const payload = new FormData()
                for (const key in formData) {
                    payload.append(key, formData[key])
                }

                const res = await fetch(endpoint, {
                    method: 'POST',
                    body: payload
                })

                const result = await res.json()

                if (result.success) {
                    localStorage.setItem(
                        'user',
                        JSON.stringify({ id: result.user_id, type: this.userType })
                    )
                    this.$router.push('/')
                } else {
                    alert('Произошла ошибка при регистрации')
                }
            } catch (error) {
                console.error('Ошибка регистрации:', error)
                alert('Не удалось зарегистрироваться. Попробуйте позже.')
            }
        }
    }
};
</script>