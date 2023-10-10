<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="add(1)">test</button>
    <h1>{{ test.name }} {{ test.age }} {{ envTest }}</h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const envTest = ref('')
const test = ref({
  name: 'andy',
  age: '12',
})

function add(i) {
  console.log(i)
  console.log(i + 1)
}
onMounted(() => {
  envTest.value = import.meta.env.VITE_APP_TITLE
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
