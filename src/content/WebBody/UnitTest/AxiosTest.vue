<template>
  {{ Counter.count }}
  {{ Counter.doubleCount }}
  <button @click="plus">click</button>
  <div v-for="item in Corgi.corgis" :key="item">{{ item.name }}</div>
  <button @click="getCorgi">Corgi_click</button>
</template>

<script setup>
import { useCounterStore } from '../../../stores/counter.js'
import { useCorgiStore } from '../../../stores/corgi.js'
import { onMounted } from 'vue'

const Counter = useCounterStore()
function plus() {
  Counter.increment()
}

const Corgi = useCorgiStore()
onMounted(async () => {
  await Corgi.viewCorgi()
  console.log(Corgi.corgis)
})

function getCorgi() {
  console.log(Corgi.corgis)
}
</script>

<style scoped></style>
