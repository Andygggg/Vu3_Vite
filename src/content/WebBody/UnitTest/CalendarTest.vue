<template>
  <div class="calendar_box">
    <div class="calender">
      <div class="calender_header">
        <button @click="prevMonth"><i class="bx bxs-chevron-left"></i></button>
        <button @click="nextMonth"><i class="bx bxs-chevron-right"></i></button>
        <span>{{ currentYear }}年{{ currentMonth }}月</span>
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
          class="date_header"
          :class="{ active: item.Format_Date === today.toLocaleDateString() }"
        >
          <span>{{ item.Today }}</span>
          <div v-for="(todo, index) in item.ToDoList" :key="index">
            {{ todo.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, toRaw } from 'vue'

//當天日期
const today = new Date()
//當年
const currentYear = ref(today.getFullYear())
//當月
const currentMonth = ref(today.getMonth() + 1)

//假設代辦事項
const todo_list = reactive([
  { name: '代辦事項A', start_date: '2023/11/3', final_date: '2023/11/10' },
  { name: '代辦事項B', start_date: '2023/11/4', final_date: '2023/11/11' },
  { name: '代辦事項c', start_date: '2023/11/5', final_date: '2023/11/30' },
  { name: '代辦事項d', start_date: '2023/12/6', final_date: '2023/12/8' },
  // { name: '代辦事項e', start_date: '2023/11/6', final_date: '2023/11/8' },
  // { name: '代辦事項f', start_date: '2023/11/6', final_date: '2023/11/8' },
  // { name: '代辦事項g', start_date: '2023/11/6', final_date: '2023/11/8' },
])
//當月天數
const daysOFMonth = computed(() => {
  const date = new Date(currentYear.value, currentMonth.value - 1, 1)
  date.setMonth(date.getMonth() + 1)
  date.setDate(date.getDate() - 1)
  return date.getDate()
})

const calendar = computed(() => {
  const Month_Days = []
  //獲取當月第一天與最後一天為星期幾
  const first_date = new Date(currentYear.value, currentMonth.value - 1, 1)
  const last_date = new Date(currentYear.value, currentMonth.value - 1, daysOFMonth.value)
  //上個月剩餘天數
  const prevDaysOFMonth = new Date(currentYear.value, currentMonth.value - 1, 0).getDate()
  for (let index = 0; index < first_date.getDay(); index++) {
    const prev_date = new Date(currentYear.value, currentMonth.value - 2, prevDaysOFMonth - index)
    let dayOfWeek = null
    switch (prev_date.getDay()) {
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
    Month_Days.unshift({
      Date: prev_date,
      DayOfWeek: dayOfWeek,
      Format_Date: prev_date.toLocaleDateString(),
      Today: prevDaysOFMonth - index,
      ToDoList: [],
    })
  }
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
      ToDoList: [],
    })
  }
  for (let index = 0; index < 6 - last_date.getDay(); index++) {
    const next_date = new Date(currentYear.value, currentMonth.value, index + 1)
    let dayOfWeek = null
    switch (next_date.getDay()) {
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
      Date: next_date,
      DayOfWeek: dayOfWeek,
      Format_Date: next_date.toLocaleDateString(),
      Today: index + 1,
      ToDoList: [],
    })
  }
  Month_Days.forEach((element) => {
    const filtered_item = toRaw(todo_list).filter(
      (item) =>
        Date.parse(item.start_date) <= Date.parse(element.Format_Date) &&
        Date.parse(item.final_date) >= Date.parse(element.Format_Date),
    )
    element.ToDoList.push(...filtered_item)
  })
  return Month_Days
})
//下一個月
const prevMonth = () => {
  currentMonth.value -= 1
  if (currentMonth.value < 1) {
    currentMonth.value = 12
    currentYear.value -= 1
  }
  console.log(calendar.value)
}
//上一個月
const nextMonth = () => {
  currentMonth.value += 1
  if (currentMonth.value > 12) {
    currentMonth.value = 1
    currentYear.value += 1
  }
  console.log(calendar.value)
}
</script>

<style scoped>
.calendar_box {
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
}
.calender {
  height: 100%;
  width: 100%;
  padding: 1rem 1rem;
  color: black;
  border-radius: 12px;
  border: 1px solid rgb(202, 202, 202);
  display: grid;
  grid-template-rows: 5% 5% 90%;
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
  justify-content: flex-start;
}
.calender_header span {
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
}
.calender_header button {
  border: none;
  background-color: rgba(255, 255, 255, 0);
}
.calender_header button i {
  font-size: 1.5rem;
  cursor: pointer;
}
.calender_week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.calender_week div {
  width: 100%;
  height: 100%;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(148, 91, 240);
  color: #ffffff;
}
.calender_day {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.calender_day .date_header {
  width: 100%;
  height: 100%;
  border: 1px solid rgb(206, 206, 206);
  text-align: center;
}
.active {
  background-color: rgb(225, 204, 252);
}
</style>
