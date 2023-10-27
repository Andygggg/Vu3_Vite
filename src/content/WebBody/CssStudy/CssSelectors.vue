<template>
  <div class="Selector_box">
    <div class="box_1"><h4>css選擇器: *為指向頁面上所有的元素</h4></div>
    <div id="box_2"><h4>css選擇器: #為指向id</h4></div>
    <div class="box_3"><h4>css選擇器: .為指向class</h4></div>
    <div class="box_4"><h4>css選擇器: x y為指向子對象class</h4></div>
    <div class="box_5"><h4>css選擇器: x為指向當前頁面所有的相同的元素</h4></div>
    <div class="box_6">
      <h4>
        css選擇器:
        X:link為來選擇所有的錨點標籤並且你還沒有點擊過。X:visited為已經被點擊過或者訪問過的錨點標籤。
      </h4>
      <ul>
        <li>
          <a href="">link 1</a>
        </li>
      </ul>
    </div>
    <div class="box_7">
      <h4>css選擇器: X + Y為影響到後方同層級的第一個元素</h4>
      <div>123(x)</div>
      <p>test1(y)</p>
      <p>test2</p>
    </div>
    <div class="box_8">
      <h4>css選擇器: X > Y響到box這個div底下所有的p元素</h4>
      <p>test1()</p>
      <p>test2</p>
    </div>
    <div class="box_9">
      <h4>css選擇器: X ~ Y為影響到後方同層級的全部元素</h4>
      <div>123(x)</div>
      <p>test1</p>
      <p>test2</p>
    </div>
    <div class="box_10">
      <h4>css選擇器: X[title]為選擇所有包含有title屬性的元素</h4>
      <div title="have">have title</div>
      <div>no title</div>
    </div>
    <div class="box_11">
      <h4>css選擇器: X[href="foo"]為選擇所有包含此(foo)鏈接的屬性添加元素</h4>
      <a href="https://www.youtube.com/">yt</a>
    </div>
    <div class="box_12">
      <h4>css選擇器: X[href*="foo"]為選擇所有url中含有(foo)此字串的屬性添加元素</h4>
      <a href="https://www.youtube.com/">yt</a>
      <a href="https://www.w3schools.com/">w3</a>
    </div>
    <div class="box_13">
      <h4>X[data-*="foo"]為自定義屬性(data-filetype)指向元素</h4>
      <a href="path/to/image.jpg" data-filetype="image"> Image Link </a>
    </div>
    <div class="box_14">
      <h4>X[foo~="bar"]為自定義屬性擁有的多個屬性值</h4>
      "<a href="path/to/image.jpg" data-info="external image"> Click Me, Fool </a>
    </div>
    <div class="box_15">
      <input type="checkbox" id="a1" />
      <label for="a1">checked</label>
    </div>
    <div class="box_16">
      <h4>css選擇器: X::before X::after</h4>
      <div class="intro">我是Andy！</div>
    </div>
    <div class="box_17">
      <h4>css選擇器: X:hover</h4>
      <div>touch me</div>
    </div>
    <div class="box_18">
      <h4>css選擇器: X:not(selector)</h4>
      <div>have color</div>
      <div id="no">no color</div>
    </div>
    <div class="box_19">
      <h4>css選擇器: X::pseudoElement來為元素的分段添加樣式，比如第一行、或者第一個文字等</h4>
    </div>
    <div class="box_20">
      <h4>css選擇器: X:nth-child(n)</h4>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
    <div class="box_21">
      <h4>css選擇器: X:nth-last-child(n)</h4>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
    <div class="box_22">
      <h4>css選擇器: X:nth-of-type(n)</h4>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
    <div class="box_23">
      <h4>css選擇器:X:nth-last-of-type(n)</h4>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
    <div class="box_24">
      <h4>css選擇器:X:first-child</h4>
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
    <div class="box_25">
      <h4>css選擇器:X:last-child</h4>
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
    <div class="box_26">
      <h4>css選擇器:X:only-child</h4>
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div>
        <span>only</span>
      </div>
    </div>
    <div class="box_27">
      <h4>css選擇器: X:only-of-type</h4>
      <span>only 1 span</span>
    </div>
    <div class="box_28">
      <h4>css選擇器: X:first-of-type</h4>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.Selector_box {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 100%;
  width: 100%;
}
* .box_1 {
  background-color: rgb(188, 255, 255);
}
#box_2 {
  background-color: rgb(255, 213, 188);
}
.box_3 {
  background-color: rgb(215, 255, 188);
}
.Selector_box .box_4 {
  background-color: rgb(217, 188, 255);
}
.box_5 h4 {
  background-color: rgb(253, 188, 255);
}
.box_6 a:link {
  color: red;
}
.box_6 a:visited {
  color: rgb(0, 117, 6);
}
.box_7 div + p {
  color: red;
}
.box_8 > p {
  color: red;
}
.box_9 div ~ p {
  color: red;
}
.box_10 div[title] {
  color: red;
}
.box_11 a[href="https://www.youtube.com/"]
{
  color: red;
}
.box_12 a[href*='w3'] {
  color: rgb(5, 102, 18);
}
.box_13 a[data-filetype='image'] {
  color: red;
}
.box_14 a[data-info~='external'] {
  color: red;
}
.box_14 a[data-info~='image'] {
  background-color: black;
}
.box_15 #a1:checked ~ label {
  color: red;
}
.box_16 .intro::before {
  content: '嗨！大家好，'; /*加入這些內容在整個<div>的前面*/
  color: blue; /*字體為藍色*/
}

.box_16 .intro::after {
  content: '請多指教！'; /*加入這些內容在整個<div>的後面*/
  color: green; /*字體為綠色*/
}
.box_17 div:hover {
  color: red;
}
.box_18 div:not(#no) {
  color: red;
}
.box_19 h4::first-letter {
  color: red;
}
.box_19 h4::first-line {
  color: blue;
}
.box_20 span:nth-child(2) {
  color: red;
}
.box_21 span:nth-last-child(1) {
  color: red;
}
.box_22 span:nth-of-type(1) {
  color: red;
}
.box_23 span:nth-last-of-type(2) {
  color: red;
}
.box_24 div span:first-child {
  color: red;
}
.box_25 div span:last-child {
  color: red;
}
.box_26 div span:only-child {
  color: red;
}
.box_27 span:only-of-type {
  color: red;
}
.box_28 span:first-of-type {
  color: red;
}
</style>
