<template>
  <div id="MonthlyGlucoseChart">
    <div class="mt-sm-4 mt-2 bg-white mb-sm-3 rounded-4 p-3 card-hover">
      <div
        class="d-flex mb-4 align-items-center justify-content-sm-between justify-content-center flex-sm-row flex-column">
        <p class="mb-0 text-dark-custom fw-bold text-2xl">График измерений глюкозы</p>

        <div class="d-flex align-items-center gap-3 mt-sm-0 mt-3">
          <button @click="prevMonth" class="text-sm fw-semibold hovered-btn">
            <span class="text-dark-custom"><i class="fa-solid fa-chevron-left"></i></span>
          </button>

          <h3 class="text-lg fw-semibold mb-0">{{ formattedMonth }}</h3>

          <button @click="nextMonth" class="text-sm fw-semibold hovered-btn">
            <span class="text-dark-custom opacity-50"><i class="fa-solid fa-chevron-right"></i></span>
          </button>
        </div>
      </div>

      <div class="px-2">
        <div id="glucoseChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { renderGlucoseChart, destroyChart } from '@/utils/glucose-timeline'

export default {
  data() {
    return {
      currentDate: new Date()
    }
  },

  computed: {
    formattedMonth() {
      return this.currentDate.toLocaleString('ru-RU', {
        month: 'long',
        year: 'numeric',
      })
    },
  },

  methods: {
    prevMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 1,
        1
      )
      this.updateChart()
    },

    nextMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        1
      )
      this.updateChart()
    },

    async updateChart() {
      const year = this.currentDate.getFullYear()
      const month = this.currentDate.getMonth() + 1

      const storedUser = JSON.parse(localStorage.getItem('user'))
      const userId = storedUser?.id
      if (!userId) return

      const url = new URL('https://059.uz/api/glucose/graph')
      url.searchParams.set('user_id', userId)
      url.searchParams.set('year', year)
      url.searchParams.set('month', month)

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        const labels = []
        const totalData = []
        const avgGlucoseData = []

        const daysInMonth = new Date(year, month, 0).getDate()

        for (let day = 1; day <= daysInMonth; day++) {
          labels.push(day)
          const entry = data.find((item) => {
            const date = new Date(item.date)
            return date.getFullYear() === year &&
              date.getMonth() + 1 === month &&
              date.getDate() === day
          })

          totalData.push(entry?.total || 0)
          avgGlucoseData.push(entry?.count || 0)
        }

        destroyChart('glucoseChart')


        renderGlucoseChart('glucoseChart', labels, [
          { name: 'Частота измерений', data: totalData },
          { name: 'Средняя глюкоза', data: avgGlucoseData },
        ])
      } catch (error) {
        console.error('Ошибка при загрузке графика:', error)
      }
    },
  },

  mounted() {
    this.updateChart()
  },

  beforeUnmount() {
    destroyChart('glucoseChart')
  }
}
</script>
