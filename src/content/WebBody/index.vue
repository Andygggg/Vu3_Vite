<template>
  <div class="body_box">
    <div class="sidebar">
      <div class="logo"></div>
      <ul class="menu">
        <li class="active">
          <a>
            <i class="bx bx-home"></i>
            <span>DashBoard</span>
          </a>
        </li>
        <li>
          <a>
            <i class="bx bx-home"></i>
            <span>DashBoard</span>
          </a>
        </li>
        <li class="logout">
          <a>
            <i class="bx bx-home"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="main_content">
      <div class="header_wrapper">
        <div class="header_tittle">
          <span>Primary</span>
          <h2>DashBoard</h2>
        </div>
        <div class="user_info">
          <div class="search_box">
            <i class="bx bx-home"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div class="image"></div>
        </div>
      </div>

      <div class="card_container">
        <h3 class="main_title">Today's Data</h3>
        <div class="card_wrapper">
          <div class="payment_card light_red">
            <div class="card_header">
              <div class="amount">
                <span class="title">Payment amount </span>
                <span class="amount_value">$500.00</span>
              </div>
              <i class="bx bx-home icon"></i>
            </div>
            <span class="card_detail">**** **** **** 3333</span>
          </div>

          <div class="payment_card light_purple">
            <div class="card_header">
              <div class="amount">
                <span class="title">Payment order </span>
                <span class="amount_value">$500.00</span>
              </div>
              <i class="bx bx-home icon dark_purple"></i>
            </div>
            <span class="card_detail">**** **** **** 3333</span>
          </div>

          <div class="payment_card light_green">
            <div class="card_header">
              <div class="amount">
                <span class="title">Payment order </span>
                <span class="amount_value">$500.00</span>
              </div>
              <i class="bx bx-home icon dark_green"></i>
            </div>
            <span class="card_detail">**** **** **** 3333</span>
          </div>

          <div class="payment_card light_blue">
            <div class="card_header">
              <div class="amount">
                <span class="title">Payment order </span>
                <span class="amount_value">$500.00</span>
              </div>
              <i class="bx bx-home icon dark_blue"></i>
            </div>
            <span class="card_detail">**** **** **** 3333</span>
          </div>
        </div>
      </div>

      <div class="tabular_wrapper">
        <h3 class="main_title">Finance Data</h3>
        <div class="table_container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction Type</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <td>2023-10-17</td>
              <td>Expenses</td>
              <td>Office Supplies</td>
              <td>$250</td>
              <td>Office Supplies</td>
              <td>Pending</td>
              <td><button>Edit</button></td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins');
.body_box {
  margin: 0%;
  padding: 0%;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  display: flex;
}
/* sidebar */
.sidebar {
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  width: 110px;
  height: 100vh;
  padding: 0 1.7rem;
  color: #ffffff;
  overflow: hidden;
  transition: all 0.5s linear;
  background-color: rgba(113, 99, 186, 255);
}
.sidebar:hover {
  width: 240px;
  transition: 0.5s;
}
.logo {
  height: 80px;
  padding: 16px;
}
.menu {
  height: 88%;
  position: relative;
  list-style: none;
  padding: 0;
}
.menu li {
  padding: 1rem;
  margin: 8px 0;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
}
.menu li:hover,
.active {
  background-color: #e0e0e058;
}
.menu a {
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.menu a span {
  overflow: hidden;
}
.menu a i {
  font-size: 1.2rem;
}
.logout {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
/* body */
.main_content {
  position: relative;
  background: #ebe9e9;
  width: 100%;
  padding: 1rem;
}
/* navbar */
.header_wrapper .image {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  background: black;
}
.header_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #ffffff;
  border-radius: 10px;
  padding: 10px 2rem;
  margin-bottom: 1rem;
}
.header_tittle {
  color: rgba(113, 99, 186, 255);
}
.user_info {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.search_box {
  background: rgb(237, 237, 237);
  border-radius: 15px;
  color: rgba(113, 99, 186, 255);
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 12px;
}
.search_box input {
  background: transparent;
  padding: 10px;
  border: none;
  outline: none;
}
.search_box i {
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.5s ease-out;
}
.search_box i:hover {
  transform: scale(1.2);
}
/* card */
.card_container {
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
}
.card_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.main_title {
  color: rgba(113, 99, 186, 255);
  padding-bottom: 10px;
  font-size: 15px;
}
.payment_card {
  background: rgb(229, 223, 223);
  border-radius: 10px;
  padding: 1.2rem;
  width: 290px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
}
.payment_card:hover {
  transform: translateY(-5px);
}
.card_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.amount {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 12px;
  font-weight: 200;
}
.amount_value {
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
}
.icon {
  color: #ffffff;
  padding: 1rem;
  height: 60px;
  width: 60px;
  text-align: center;
  border-radius: 50%;
  font-size: 1.5rem;
  background: red;
}
.card_detail {
  font-size: 18px;
  color: #777777;
  letter-spacing: 2px;
  font-family: 'Courier New', Courier, monospace;
}
/* color css */
.light_red {
  background: rgb(251, 233, 233);
}
.light_purple {
  background: rgb(254, 226, 254);
}
.light_green {
  background: rgb(235, 254, 235);
}
.light_blue {
  background: rgb(236, 236, 254);
}
.dark_red {
  background: red;
}
.dark_purple {
  background: purple;
}
.dark_green {
  background: green;
}
.dark_blue {
  background: blue;
}
/* tabular */
.tabular_wrapper {
  background: #ffffff;
  margin-top: 1rem;
  border-radius: 10px;
  padding: 2rem;
}
.table_container {
  width: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background: rgba(113, 99, 186, 255);
  color: #ffffff;
}
th {
  padding: 15px;
  text-align: center;
}
tbody {
  background: #f2f2f2;
}
td {
  padding: 15px;
  font-size: 14px;
  color: #333;
  text-align: center;
}
tr:nth-child(even) {
  background: #ffffff;
}
tfoot {
  background: rgba(113, 99, 186, 255);
  font-weight: bold;
  color: #ffffff;
}
tfoot td {
  padding: 15px;
}
.table_container button {
  color: green;
  background: none;
  cursor: pointer;
  outline: none;
  border: none;
}
</style>
