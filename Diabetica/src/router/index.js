import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'glucose',
          name: 'glucose',
          component: () => import('@/views/GlucoseView.vue')
        },
        {
          path: 'activity',
          name: 'activity',
          component: () => import('@/views/ActivityView.vue')
        },
        {
          path: 'feed',
          name: 'feed',
          component: () => import('@/views/FeedView.vue')
        },
        {
          path: 'insuline',
          name: 'insuline',
          component: () => import('@/views/InsulineView.vue')
        },
        {
          path: 'report',
          name: 'report',
          component: () => import('@/views/ReportView.vue')
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('@/views/SettingsView.vue')
        }
      ]
    }
  ]
})

export default router
