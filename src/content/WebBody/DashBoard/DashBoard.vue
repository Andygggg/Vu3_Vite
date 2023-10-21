<template>
  <div>
    <h2 class="submenu_btn1">A heading with class="example"</h2>
    <p class="submenu_btn1">A paragraph with class="example".</p>

    <p>
      Click the button to add a background color to the first element in the document with
      class="example" (index 0).
    </p>

    <button @click="myFunction">Try it</button>

    <p>
      <strong>Note:</strong> The querySelectorAll() method is not supported in Internet Explorer 8
      and earlier versions.
    </p>
  </div>
  <!-- <div class="cards">
    <div class="card_single">
      <div>
        <h1>54</h1>
        <span>Customer</span>
      </div>
      <div>
        <span class="bx bx-home"></span>
      </div>
    </div>

    <div class="card_single">
      <div>
        <h1>66</h1>
        <span>Customer</span>
      </div>
      <div>
        <span class="bx bx-home"></span>
      </div>
    </div>

    <div class="card_single">
      <div>
        <h1>77</h1>
        <span>Customer</span>
      </div>
      <div>
        <span class="bx bx-home"></span>
      </div>
    </div>

    <div class="card_single">
      <div>
        <h1>88</h1>
        <span>Customer</span>
      </div>
      <div>
        <span class="bx bx-home"></span>
      </div>
    </div>
  </div>

  <div class="recent_grid">
    <div class="projects">
      <div class="card">
        <div class="card_header">
          <h3>Recent Projects</h3>

          <button>
            See all
            <span class="bx bx-home"></span>
          </button>
        </div>

        <div class="card_body">
          <div class="table_responsive">
            <table>
              <thead>
                <tr>
                  <td>Project Title</td>
                  <td>Department</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>UI/UX Design</td>
                  <td>UI Team</td>
                  <td><span class="status purple"></span>review</td>
                </tr>
                <tr>
                  <td>Web development</td>
                  <td>Frontend</td>
                  <td><span class="status pink"></span>in progress</td>
                </tr>
                <tr>
                  <td>UI/UX Design</td>
                  <td>Mobile Team</td>
                  <td><span class="status orange"></span>pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="customers">
      <div class="card">
        <div class="card_header">
          <h3>New customer</h3>

          <button>
            See all
            <span class="bx bx-home"></span>
          </button>
        </div>

        <div class="card_body">
          <div class="customer">
            <div class="info">
              <div class="image"></div>
              <div>
                <h4>Lewis S. Cunningham</h4>
                <small>CEO Excerpt</small>
              </div>
            </div>
            <div class="contact">
              <span class="bx bx-home"></span>
              <span class="bx bx-home"></span>
              <span class="bx bx-home"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="customers">
        <div class="card">
          <div class="card_header">
            <h3>New customer</h3>

            <button>
              See all
              <span class="bx bx-home"></span>
            </button>
          </div>

          <div class="card_body">
            <div class="customer">
              <div class="info">
                <div class="image"></div>
                <div>
                  <h4>Lewis S. Cunningham</h4>
                  <small>CEO Excerpt</small>
                </div>
              </div>
              <div class="contact">
                <span class="bx bx-home"></span>
                <span class="bx bx-home"></span>
                <span class="bx bx-home"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup>
function myFunction() {
  var x = document.querySelectorAll('.submenu_btn1')
  x[0].style.backgroundColor = 'red'
  console.log(x)
}
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
  margin-top: 1rem;
}
.card_single {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
}
.card_single div:last-child span {
  font-size: 3rem;
  color: var(--main-color);
}
.card_single div:first-child span {
  color: var(--text-gray);
}
.card_single:last-child {
  background: var(--main-color);
}
.card_single:last-child h1,
.card_single:last-child div:first-child span,
.card_single:last-child div:last-child span {
  color: #ffffff;
}
.recent_grid {
  margin-top: 3.5rem;
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 65% auto;
}
.card {
  background: #ffffff;
  border-radius: 5px;
}
.card_header {
  padding: 1rem;
}
.card_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}
.card_header button {
  background: var(--main-color);
  border-radius: 10px;
  color: #ffffff;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--main-color);
}
table {
  border-collapse: collapse;
  width: 100%;
}
thead tr {
  border-top: 1px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
}
thead td {
  font-weight: 700;
}
td {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #222;
}
td .status {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 1rem;
}
tr td:last-child {
  display: flex;
  align-items: center;
}
.status.purple {
  background: rebeccapurple;
}
.status.pink {
  background: deeppink;
}
.status.orange {
  background: orangered;
}
.table_responsive {
  width: 100%;
  overflow-x: auto;
}
.customer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.7rem;
}
.info {
  display: flex;
  align-items: center;
}
.info.image {
  margin-right: 1rem;
}
.info h4 {
  font-size: 0.8rem;
  font-weight: 700;
  color: #222;
}
.info small {
  font-weight: 600;
  color: var(--text-gray);
}
.contact span {
  font-size: 1.2rem;
  display: inline-block;
  margin-left: 0.5rem;
  color: var(--main-color);
}
@media only screen and (max-width: 960px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
  .recent_grid {
    grid-template-columns: 60% 40%;
  }
}
@media only screen and (max-width: 960px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
  .recent_grid {
    grid-template-columns: 60% 40%;
  }
}
@media only screen and (max-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .recent_grid {
    grid-template-columns: 100%;
  }
}
@media only screen and (max-width: 560px) {
  .cards {
    grid-template-columns: 100%;
  }
}
</style>
