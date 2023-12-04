<template>
  <div class="semantic_elements">
    <header>
      <hgroup>
        <h2>header為頁首，或是網頁 or 區塊的上方板塊，通常包含該頁標題。</h2>
        <p>hgroup元素允許將一個標題與任意次要內容</p>
      </hgroup>
    </header>

    <nav><h2>nav為選單、導覽，常用於 menu。</h2></nav>

    <aside>
      <h2>aside為側欄、附加內容，多用於非主要資訊 or 廣告。</h2>
      <mark>mark為強調內容區塊，像是句子中希望使用螢光筆的強調的部分。</mark>
      <details>
        <summary>Details</summary>
        <h2>details定義可查看 or 隱藏的額外細節。</h2>
      </details>
    </aside>

    <main>
      <h2>main為主要內容區塊。</h2>
      <h2>section為自訂的區塊，例如數篇摘要組成的空間。</h2>
      <section class="figure1">
        <figure><h2>figure左</h2></figure>
        <figure><h2>figure右</h2></figure>
      </section>
      <section>
        <article>
          <h2>article為文章內容。</h2>
          <time datetime="2023/10/23"><h2>今天是2023/10/23</h2></time>
        </article>
      </section>
    </main>

    <footer><h2>頁尾，網頁最底部區塊。</h2></footer>
  </div>
</template>

<script setup></script>

<style scoped>
.semantic_elements {
  height: calc(100vh - 85px - 32px);
  padding: 1rem;
}
.semantic_elements header {
  background-color: rgb(255, 0, 0);
  height: 10%;
}
.semantic_elements nav {
  background-color: rgb(255, 136, 0);
  height: 10%;
}
.semantic_elements main {
  background-color: rgb(132, 0, 255);
  height: 70%;
  width: 70%;
  display: flex;
  flex-direction: column;
}
.semantic_elements section {
  height: 100%;
}
.figure1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.figure1 figure {
  flex-grow: 1;
}
.semantic_elements aside {
  background-color: rgb(41, 179, 6);
  float: right;
  width: 30%;
  height: 70%;
}
summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

.semantic_elements footer {
  background-color: rgb(9, 107, 255);
  height: 10%;
}
</style>
