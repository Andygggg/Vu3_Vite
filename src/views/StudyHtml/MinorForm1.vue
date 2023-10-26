<template>
  <div class="minor_container">
    <div class="select_object">
      <div class="select_btn">
        <input type="text" v-model="target" placeholder="請填寫文字" />
        <i class="bx bxs-chevrons-down"></i>
      </div>
      <ul class="option_menu">
        <li class="option" v-for="item in filterMenu" :key="item" @click="Choose(item)">
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed } from 'vue'

const target = ref(null)
const Menu = reactive(['test1', 'test2', 'test3'])
onMounted(() => {
  const optionMenu = document.querySelector('.select_object')
  const selectBtn = optionMenu.querySelector('.select_btn')

  selectBtn.addEventListener('click', () => {
    optionMenu.classList.toggle('active')
  })
})

function Choose(value) {
  target.value = value
}
const filterMenu = computed(() => {
  if (target.value === null) {
    return Menu
  } else {
    return Menu.filter((item) => item.toLowerCase().includes(target.value))
  }
})
</script>

<style scoped>
.minor_container {
  background-color: rgb(186, 230, 255);
  box-shadow:
    rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 1rem;
}
.select_object {
  width: 100%;
}
.select_btn {
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  position: relative;
  display: inline-block;
  width: 100%;
}
.select_btn input {
  width: 100%;
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 400;
  color: black;
  outline: none;
}
.select_btn i {
  transform: 1s;
  position: absolute;
  right: 3px;
  top: calc(50% - 0.5em);
}
.select_object.active .select_btn i {
  transform: rotate(-180deg);
}
.select_object .option_menu {
  position: relative;
  border-radius: 0 0 8px 8px;
  border-top: 1px solid black;
  background-color: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  list-style: none;
  display: none;
  padding: 0%;
}
.select_object.active .option_menu {
  display: block;
}
.option_menu .option {
  display: flex;
  cursor: pointer;
  align-items: center;
}
.option span {
  padding-left: 1.3rem;
  padding-bottom: 0.3rem;
}
.option_menu .option:hover {
  background-color: #dfdfdf;
}
</style>
