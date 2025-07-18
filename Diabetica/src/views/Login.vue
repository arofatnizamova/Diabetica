<template>
    <section>
        <div class="row gx-0">
            <div class="col-lg-6">
                <div class="w-100 h-sm-100vh  d-flex flex-column align-items-center justify-content-center">
                    <h1 class="mb-5 text-gray">Авторизация</h1>
                    <div class="row justify-content-center w-100">
                        <div class="col-xxl-4 col-xl-6 col-lg-8 col-10">
                            <form class="authorization w-100" @submit.prevent="submit">
                                <label for="login" class="visually-hidden">Email</label>
                                <input type="text" id="login" v-model="form.email" required
                                    class="form-control input-data-custom mb-3 "
                                    placeholder="E-mail или номер телефона">
                                <label for="password" class="visually-hidden">Password</label>
                                <input type="password" id="password" v-model="form.password" required
                                    class="form-control input-data-custom" placeholder="Пароль">
                                <div class="my-3 form-check d-flex gap-2 align-items-center">
                                    <input type="checkbox" class="form-check-input" id="rememberMe">
                                    <label class="form-check-label text-gray fw-light" for="rememberMe">Запомнить меня
                                    </label>
                                </div>
                                <button type="submit"
                                    class="btn btn-primary shadow mt-3 btn-long mx-auto d-block">Войти</button>
                            </form>
                            <div class="text-center mt-3 fw-light">
                                <a href="#" class="underlined-corp">Забыли пароль?</a>
                                <p class="mt-3">Нет аккаунта ? <RouterLink to="/registration"
                                        class="text-corp fw-medium">Зарегистрируйтесь</RouterLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <img src="../assets/images/authorization-and-registration/1.png" alt=""
                    class="d-lg-block d-none w-100 h-100vh img-fluid object-fit-cover">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            form: {
                'email': '',
                'password': ''
            }
        }
    },
    methods: {
        async submit() {
            try {
                const formData = new FormData();
                for (const key in this.form) {
                    formData.append(key, this.form[key]);
                }
                const response = await fetch('https://059.uz/api/auth', {
                    method: 'POST',
                    body: formData
                })
                const result = await response.json();

                if (result && result.user) {
                    localStorage.setItem('user', JSON.stringify({
                        id: result.user.id,
                        type: result.user.role === 'P' ? 'patient' : 'doctor',
                    }));

                    this.$router.push('/');
                } else {
                    alert('Неверный логин или пароль');
                }
            } catch (error) {
                console.error('Ошибка при авторизации:', error);
                alert('Произошла ошибка. Попробуйте позже.');
            }
        }
    }
}
</script>