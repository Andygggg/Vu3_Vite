<template>
  <div class="form_container">
    <MainForm class="master_form" />
    <div class="minor_form"><MinorForm1 /></div>
    <div class="minor_form">456</div>
    <div class="minor_form">789</div>
  </div>
</template>

<script setup>
import MainForm from '../../../views/StudyHtml/MainForm.vue'
import MinorForm1 from '../../../views/StudyHtml/MinorForm1.vue'
</script>

<style scoped>
.form_container {
  height: auto;
  display: grid;
  grid-template-rows: 32% 32% 32%;
  grid-template-columns: 70% 27.5%;
  column-gap: 2.5%;
  row-gap: 1.3%;
  overflow-y: scroll;
  padding: 1rem;
}
.master_form {
  grid-row: 1 / span 3;
  grid-column: 1 / span 1;
}
.minor_form {
}
</style>
