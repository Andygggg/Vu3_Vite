<template>
  <div class="navbar_header">
    <h2>Vue3_Vite學習基地</h2>

    <div class="navbar_title">
      <ul>
        <li v-for="(item, index) in RouterMenu" :key="index">
          <span
            :class="{ choose_navbar: Choose.matched[1].name === item.name }"
            @click="PushTo(item.name)"
            >{{ item.meta.title }}</span
          >
        </li>
      </ul>
    </div>
    <div class="user_wrapper">
      <div class="image"></div>
      <div>
        <h4>Andy Wu</h4>
        <small>Master</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// 主選單
const RouterMenu = computed(() => {
  var Map = router.options.routes.find((element) => element.name === 'Project')
  return Map.children.filter((choose) => choose.meta.isOnNavbar === true)
})
const Choose = computed(() => {
  var Now = router.currentRoute.value
  return Now
})
function PushTo(view) {
  router.push({ name: view })
}
</script>

<style scoped>
.navbar_header {
  display: flex;
  justify-content: space-between;
}
h2 {
  color: #222;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-weight: 600;
}
.user_wrapper {
  display: flex;
  align-items: center;
}
.image {
  width: 40px;
  height: 40px;
  background: black;
  border-radius: 50%;
  margin-right: 1rem;
}
.user_wrapper small {
  display: inline-block;
  color: var(--text-gray);
}
.navbar_title {
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 1rem;
}
.navbar_title ul {
  padding: 0 0.1rem;
  flex-grow: 1;
  list-style: none;
  display: flex;
  justify-content: flex-start;
}
.navbar_title ul li span {
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}
.choose_navbar {
  border-bottom: 0.2rem solid var(--main-color);
}
.navbar_title ul li span:hover {
  border-bottom: 0.2rem solid var(--main-color);
  border-radius: 10px;
}
</style>
