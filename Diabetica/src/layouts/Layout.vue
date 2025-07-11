<template>
  <div class="d-flex">
    <!-- Sidebar -->
    <aside class="h-100vh border-end sidebar-fixed d-lg-block d-none position-fixed top-0 start-0">
      <AppAside />
    </aside>

    <!-- Main content + Header -->
    <div class="position-absolute h-100 top-0 end-0 header-fluid">
      <div class="position-relative h-100">
        <header class="position-fixed border-bottom top-0 header-fluid z-1 end-0 bg-white">
          <Header/>
        </header>

        <div class="content pb-5">
          <div class="container">
            <router-view /><!-- сюда будет вставляться содержимое страниц -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import AppAside from '@/components/AppAside.vue';
  import Header from '@/components/Header.vue';
</script>

<style scoped>
/* Можно перекинуть стили из index.html, если нужно */
</style>