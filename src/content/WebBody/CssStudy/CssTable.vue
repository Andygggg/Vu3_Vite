<template>
  <div class="table_box">
    <table>
      <thead>
        <tr>
          <th>標題1</th>
          <th>標題2</th>
          <th>標題3</th>
          <th>標題4</th>
          <th>標題5</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in TableList" :key="i">
          <td>{{ item.one }}</td>
          <td>{{ item.two }}</td>
          <td>{{ item.three }}</td>
          <td>{{ item.four }}</td>
          <td>{{ item.five }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const TableList = reactive([
  { one: '內容1-1', two: '內容1-2', three: '內容1-3', four: '內容1-4', five: '內容1-5' },
  { one: '內容2-1', two: '內容2-2', three: '內容2-3', four: '內容2-4', five: '內容2-5' },
  { one: '內容3-1', two: '內容3-2', three: '內容3-3', four: '內容3-4', five: '內容3-5' },
  { one: '內容4-1', two: '內容4-2', three: '內容4-3', four: '內容4-4', five: '內容4-5' },
  { one: '內容5-1', two: '內容5-2', three: '內容5-3', four: '內容5-4', five: '內容5-5' },
  { one: '內容6-1', two: '內容6-2', three: '內容6-3', four: '內容6-4', five: '內容6-5' },
  { one: '內容1-1', two: '內容1-2', three: '內容1-3', four: '內容1-4', five: '內容1-5' },
  { one: '內容2-1', two: '內容2-2', three: '內容2-3', four: '內容2-4', five: '內容2-5' },
  { one: '內容3-1', two: '內容3-2', three: '內容3-3', four: '內容3-4', five: '內容3-5' },
  { one: '內容4-1', two: '內容4-2', three: '內容4-3', four: '內容4-4', five: '內容4-5' },
  { one: '內容5-1', two: '內容5-2', three: '內容5-3', four: '內容5-4', five: '內容5-5' },
  { one: '內容6-1', two: '內容6-2', three: '內容6-3', four: '內容6-4', five: '內容6-5' },
])
</script>

<style scoped>
.table_box {
  height: 90%;
  width: 90%;
  overflow: auto;
}
.table_box table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgb(212, 212, 212);
  min-width: 1100px;
  overflow-x: scroll;
}
.table_box th {
  background-color: var(--main-color);
  padding: 1rem;
  color: #ffffff;
  font-size: 1.1rem;
}
.table_box thead {
  position: sticky;
  top: 0;
}
.table_box td {
  padding: 1rem;
  text-align: center;
  color: black;
  font-size: 1rem;
  font-weight: 500;
}
.table_box tbody tr:nth-of-type(odd) {
  background-color: rgba(221, 221, 221, 0.8) !important;
}
</style>
