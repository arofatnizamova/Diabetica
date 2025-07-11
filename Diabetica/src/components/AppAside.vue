<template>
  <div class="d-flex h-100 flex-column justify-content-between">
    <div class="d-flex flex-column sidebar-content">
      <div class="py-3 border-bottom px-4">
        <div class="d-flex align-items-center gap-2">
          <RouterLink to="/" class="py-1 px-2 rounded-3 bg-corp fw-bold text-sm text-white">D</RouterLink>
          <RouterLink to="/" class="fw-bold text-xl">Diabetica</RouterLink>
        </div>
      </div>
      <nav class="d-flex mt-4 px-4 flex-column fw-light overflow-auto">
        <RouterLink to="/" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
          <i class="fa-solid fa-house-user fs-5"></i>
          <span>Обзор</span>
        </RouterLink>
        <RouterLink to="/glucose" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
          <i class="fa-solid fa-chart-pie fs-5"></i>
          <span>Глюкоза</span>
        </RouterLink>
        <RouterLink to="/feed" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
          <i class="fa-solid fa-apple-whole fs-5"></i>
          <span>Питание</span>
        </RouterLink>
        <RouterLink to="/insuline" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
          <i class="fa-solid fa-calendar fs-5"></i>
          <span>Инсулин</span>
        </RouterLink>
        <RouterLink to="/report" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
          <i class="fa-solid fa-file fs-5"></i>
          <span>Отчет</span>
        </RouterLink>
        <RouterLink to="/activity" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
          <i class="fa-solid fa-heart-pulse fs-5"></i>
          <span>Активность</span>
        </RouterLink>
        <RouterLink to="/setting" class="d-flex align-items-center gap-2 mb-3 link-hover p-2">
          <i class="fa-solid fa-gear fs-5"></i>
          <span>Настройки</span>
        </RouterLink>
      </nav>
    </div>
    <div class="border-top p-3">
      <div class="p-3 shadow rounded-4 bg-corp-light text-sm">
        <p class="text-center fw-light mb-1">Школа диабета</p>
        <RouterLink to="#" class="d-block text-center text-corp">Подробнее</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>