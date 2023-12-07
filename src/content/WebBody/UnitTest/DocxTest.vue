<template>
  <button @click="ExportWord.generate">Generate Document</button>
</template>

<script setup>
import { exportWordStore } from '../../../stores/exportWord.js'

const ExportWord = exportWordStore()
</script>
