<template>
    <div class="w-100 mb-4 bg-white rounded-4 mt-lg-0 card-hover p-4">
        <div class="row gx-0">
            <div class="col-8">
                <div class="w-100 h-100 d-flex flex-column justify-content-between py-3">
                    <h2 class="fs-smaller">{{ title }}</h2>
                    <p class="text-lg fs-smaller lh-sm mb-0">{{ subtitle }}</p>
                </div>
            </div>
            <div class="col-4">
                <div class="w-100 h-100 d-flex align-items-center justify-content-center">
                    <img :src="image" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    title: String,
    subtitle: String,
    image: String
})
</script>