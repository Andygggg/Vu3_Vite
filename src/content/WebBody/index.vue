<template>
  <div class="dashboard_box">
    <SideBar />
    <div class="main_content">
      <header><NavBer /></header>

      <main><RouterView /></main>
    </div>
  </div>
</template>

<script setup>
import SideBar from '../../views/Menu/SideBar.vue'
import NavBer from '../../views/Menu/NavBar.vue'
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
.main_content {
  width: calc(100vw - 70px);
  position: fixed;
  left: 70px;
}
.main_content header {
  background: #ffffff;
  padding: 0.5rem 1.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: calc(100vw - 70px);
  top: 0;
}
.main_content main {
  margin-top: 85px;
  padding: 1rem;
  background: #f1f5f9;
  height: calc(100vh - 90px);
  overflow-y: scroll;
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
