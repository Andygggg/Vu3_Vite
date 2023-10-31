<template>
  <div class="calendar_box">
    <div class="calender">
      <div class="calender_header">
        <button @click="prevMonth">back</button>
        <span>{{ currentYear }} | {{ currentMonth }}</span>
        <button @click="nextMonth">next</button>
      </div>

      <div class="calender_week">
        <div>星期日</div>
        <div>星期一</div>
        <div>星期二</div>
        <div>星期三</div>
        <div>星期四</div>
        <div>星期五</div>
        <div>星期六</div>
      </div>
      <div class="calender_day">
        <div
          v-for="(item, i) in calendar"
          :key="i"
          :class="{ active: item.Format_Date === today.toLocaleDateString() }"
        >
          {{ item.Today }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

//當天日期
const today = new Date()
//當年
const currentYear = ref(today.getFullYear())
//當月
const currentMonth = ref(today.getMonth() + 1)

//當月天數
const daysOFMonth = computed(() => {
  const date = new Date(currentYear.value, currentMonth.value - 1, 1)
  date.setMonth(date.getMonth() + 1)
  date.setDate(date.getDate() - 1)
  return date.getDate()
})

const calendar = computed(() => {
  const Month_Days = []
  for (let index = 1; index <= daysOFMonth.value; index++) {
    const date = new Date(currentYear.value, currentMonth.value - 1, index)
    let dayOfWeek = null
    switch (date.getDay()) {
      case 0:
        dayOfWeek = 'SUN'
        break
      case 1:
        dayOfWeek = 'MON'
        break
      case 2:
        dayOfWeek = 'TUE'
        break
      case 3:
        dayOfWeek = 'WED'
        break
      case 4:
        dayOfWeek = 'THU'
        break
      case 5:
        dayOfWeek = 'FRI'
        break
      case 6:
        dayOfWeek = 'SAT'
        break
    }
    Month_Days.push({
      Date: date,
      DayOfWeek: dayOfWeek,
      Format_Date: date.toLocaleDateString(),
      Today: index,
    })
  }
  return Month_Days
})

//下一個月
const prevMonth = () => {
  currentMonth.value -= 1
  if (currentMonth.value < 1) {
    currentMonth.value = 12
    currentYear.value -= 1
  }
  console.log(currentYear.value, currentMonth.value, daysOFMonth.value)
}
//上一個月
const nextMonth = () => {
  currentMonth.value += 1
  if (currentMonth.value > 12) {
    currentMonth.value = 1
    currentYear.value += 1
  }
  console.log(currentYear.value, currentMonth.value, daysOFMonth.value)
}
console.log(calendar.value)
</script>

<style scoped>
.calendar_box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.calender {
  background-color: rgb(255, 255, 255);
  height: 90%;
  width: 90%;
  color: black;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgb(202, 202, 202);
  display: grid;
  grid-template-rows: 10% 10% 80%;
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 1px 2px,
    rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px,
    rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px,
    rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
.calender_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.calender_header span {
  padding-left: 2rem;
  padding-right: 2rem;
}
.calender_week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
}
.calender_day {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  height: auto;
}
.active {
  color: red !important;
}
</style>
