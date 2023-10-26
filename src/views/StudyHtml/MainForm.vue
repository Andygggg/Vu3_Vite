<template>
  <form action="">
    <div class="form_header">
      <span>表單名稱：Vue3_Vite學習基地表單(測試標題過長會長成什麼鬼樣?)</span>
      <span>表單編號：2023102312345678900</span>
    </div>
    <div class="form_body">
      <div class="form_item">
        <div><span>姓名：</span><input placeholder="請填寫你的姓名" type="text" /></div>
        <div>
          <span>性別：</span>
          <input type="radio" id="male" name="choose" value="male" checked />
          <label for="male">男</label>
          <input type="radio" id="female" name="choose" value="female" />
          <label for="female">女</label>
        </div>
      </div>
      <div class="form_item">
        <div><span>生日：</span><input placeholder="請填寫你的生日" type="date" /></div>
        <div><span>手機：</span><input placeholder="請填寫你的手機" type="text" /></div>
      </div>
      <div class="form_item">
        <div class="single"><span>戶籍地址：</span><input type="text" /></div>
      </div>
      <div class="form_item">
        <div class="single"><span>Email信箱：</span><input type="email" /></div>
      </div>
      <div class="form_item">
        <div class="single">
          <span>喜歡吃的水果：</span>
          <select name="fruit" id="fruit">
            <option value="apple">apple</option>
            <option value="pomelo">pomelo</option>
            <option value="tomato">tomato</option>
            <option value="mango">mango</option>
            <optgroup label="fruit">
              <option value="avocado">avocado</option>
              <option value="banana">banana</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div class="form_item">
        <div class="single"><span>自我介紹：</span> <textarea cols="30" rows="10"></textarea></div>
      </div>
    </div>
  </form>
</template>

<script setup></script>

<style scoped>
form {
  background-color: rgb(255, 255, 255);
  box-shadow:
    rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 10px;
}
.form_header {
  display: grid;
  grid-template-columns: 60% 35%;
  column-gap: 5%;
  padding: 1rem;
  background-color: var(--main-color);
  border-radius: 12px 12px 0px 0px;
}
.form_header span {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: sans-serif;
  color: #ffffff;
}
.form_body {
  padding: 1rem;
}
.form_item {
  display: grid;
  grid-template-columns: 47.5% 47.5%;
  column-gap: 5%;
  padding-bottom: 1.5rem;
}
.single {
  grid-column: 1 / 3;
}
.form_item div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.form_item div span {
  font-size: 1.1rem;
  font-weight: 600;
  color: black;
  padding-right: 1rem;
}
.form_item div input[type='email' i],
.form_item div input[type='date' i],
.form_item div input[type='text' i] {
  border: 0px;
  border-bottom: 1px solid #b2b2b2;
  width: 75%;
  font-size: 1.1rem;
  font-weight: 400;
  color: black;
  outline: none;
}
.form_item div input:focus {
  border-bottom: 2px solid rgb(0, 162, 255);
}
.form_item div label {
  font-size: 1.1rem;
  font-weight: 400;
  padding: 0 1rem;
}
.form_item div select {
  border: 0px;
  border-bottom: 1px solid #b2b2b2;
  width: 50%;
  font-size: 1.1rem;
  font-weight: 400;
  color: black;
  outline: none;
}
.form_item div select:focus {
  border-bottom: 2px solid rgb(0, 162, 255);
}
.form_item div textarea {
  width: 50%;
  font-size: 1.1rem;
  font-weight: 400;
  color: black;
  outline: none;
  border-radius: 1rem;
}
.form_item div textarea:focus {
  border: 2px solid rgb(0, 162, 255);
}
</style>
