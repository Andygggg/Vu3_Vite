<template>
  <div class="dashboard_box">
    <input type="checkbox" id="nav-toggle" style="display: none" />
    <div class="sidebar">
      <div class="sidebar_brand">
        <h2>
          <label for="nav-toggle">
            <i class="bx bx-menu-alt-left"></i>
          </label>
        </h2>
      </div>

      <div class="sidebar_menu">
        <ul>
          <li v-for="(item, index) in RouterMenu" :key="index">
            <div :class="{ active: Choose.meta.title === item.meta.title }">
              <i :class="item.meta.icon"></i>
              <span>{{ item.meta.title }}</span>
            </div>
          </li>
          <li>
            <div class="footer">
              <i class="bx bx-log-out"></i>
              <span>登出</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="main_content">
      <header>
        <h2>DashBoard</h2>

        <div class="user_wrapper">
          <div class="image"></div>
          <div>
            <h4>Andy Wu</h4>
            <small>Master</small>
          </div>
        </div>
      </header>

      <main>
        123
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

const RouterMenu = computed(() => {
  var Map = router.options.routes.find((element) => element.name === 'Project')
  return Map.children.filter((choose) => choose.meta.isOnSidebar === true)
})
const Choose = computed(() => {
  var Now = router.currentRoute.value
  return Now
})
// console.log(RouterMenu.value)
console.log(Choose.value)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins');
.dashboard_box {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}
.sidebar {
  width: 70px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: var(--main-color);
  z-index: 100;
  transition: width 300ms;
}
.sidebar_brand {
  height: 70px;
  padding: 1.5rem;
  color: #ffffff;
}
.sidebar_brand span {
  display: inline-block;
  padding-right: 1rem;
}
.sidebar_menu {
  margin-top: 1rem;
}
.sidebar_menu ul {
  padding: 0%;
}
.sidebar_menu li {
  width: 100%;
  padding: 1rem 0 1rem 0;
  list-style: none;
}
.sidebar_menu div {
  color: #ffffff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.active {
  background-color: #ffffff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 30px 0px 0px 30px;
  color: var(--main-color) !important;
}
.sidebar_menu li div i {
  font-size: 1.5rem;
  padding: 0 1.5rem 0 1.5rem;
}
.footer {
  position: absolute;
  bottom: 0;
  padding-bottom: 2rem;
}
.sidebar_menu li div span {
  display: none;
}
.sidebar_menu a span:first-child {
  font-size: 1.5rem;
  padding-right: 1rem;
}
#nav-toggle:checked + .sidebar {
  width: 240px;
}
#nav-toggle:checked + .sidebar .sidebar_menu li div span {
  display: inline-block;
  font-weight: 600;
  animation: show 2s;
}
@keyframes show {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.main_content {
  width: calc(100vw - 70px);
  position: fixed;
  left: 70px;
}
header {
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: calc(100vw - 70px);
  top: 0;
}
header h2 {
  color: #222;
}
header label span {
  font-size: 1.7rem;
  padding-right: 1rem;
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
main {
  margin-top: 85px;
  padding: 1.5rem;
  background: #f1f5f9;
  min-height: calc(100vh - 90px);
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 960px) {
}
@media only screen and (max-width: 768px) {
}
@media only screen and (max-width: 560px) {
}
</style>
