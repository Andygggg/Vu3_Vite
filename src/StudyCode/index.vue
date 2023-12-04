<template>
  <div class="container">
    <div class="record_item" v-for="(item, index) in ExportData" :key="index">
      <div class="picture_area" @click.stop="UploadPhoto(index)">
        <input
          type="file"
          ref="inputImage"
          accept=".jpg, .jpeg, .png"
          multiple
          @change="handleDrop($event.target.files)"
        />
      </div>
      <div class="describe_area">
        <span>{{ item.title }}</span>
        <span>檔名：{{ item.content.name }}</span>
        <span>日期：{{ item.content.date }}</span>
        <span>主題：{{ item.content.main }}</span>
        <span>說明：{{ item.content.direction }}</span>
      </div>
      <div class="design_area">
        <span v-for="design in item.content.design" :key="design">{{ design }}</span>
      </div>
      <div class="design_area">
        <span v-for="actually in item.content.actually" :key="actually">{{ actually }}</span>
        <span>add</span>
      </div>
      <div class="add_area">
        <span @click="addItem"><i class="bx bx-plus-circle"></i></span>
        <span @click="deleteItem(index)"><i class="bx bx-trash"></i></span>
        <span @click="viewArr"><i class="bx bx-pencil"></i></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputImage = ref(null)

//table test data
const ExportData = ref([
  {
    title: '圖1',
    content: {
      name: '貴陽大樓新建工程',
      date: '112. 11. 07.',
      main: '防水工程',
      direction: '2F防水層施作試水自檢(204)',
      design: ['設計：', '滿水試驗', '\u00A0'],
      actually: ['實際：', '開始時間:14:30', '水位高度:3.6CM'],
    },
    picture: {},
  },
])
//新增自檢項目
const addItem = () => {
  let Item = {
    title: `圖${ExportData.value.length + 1}`,
    content: {
      name: '',
      date: '',
      main: '',
      direction: '',
      design: ['設計：'],
      actually: ['實際：'],
    },
    picture: null,
  }
  ExportData.value.push(Item)
}

const deleteItem = (index) => {
  ExportData.value.splice(index, 1)

  ExportData.value.forEach((item, index) => (item.title = `圖${index + 1}`))
}

const viewArr = () => {
  console.log(ExportData.value)
}

const UploadPhoto = (index) => {
  console.log(index)
  inputImage.value[0].click()
}

const handleDrop = (image) => {
  const Image = image[0]
  if (Image.type === 'image/jpeg' || Image.type === 'image/png') {
    const reader = new FileReader()
    reader.readAsDataURL(Image)
    reader.onload = () => {
      let photo_item = {
        name: Image.name,
        type: Image.type,
        size: Image.size,
        Date: Image.lastModifiedDate,
        Url: openImg(reader.result),
      }
      console.log(photo_item)
      console.log(ExportData.value)
    }
  } else {
    alert('不支援的檔案格式！上傳僅支援.jpg, .jpeg, .png圖檔')
  }
}

const openImg = async (src) => {
  if (!src.includes('http')) src = URL.createObjectURL(await (await fetch(src)).blob())
  // window.open(src)
}
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.record_item {
  border: 2px solid rgb(0, 0, 0);
  border-radius: 8px;
  padding: 1%;
  margin-bottom: 0.5rem;
  height: 35%;
  width: 75%;
  display: grid;
  grid-template-columns: 30% 30% 15% 15% 10%;
}
.picture_area {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  color: black;
  border-style: dotted;
  border-color: rgba(0, 0, 0, 0.5);
  border-width: 4px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.picture_area input {
  display: none;
}
.describe_area {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.design_area {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.add_area {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.add_area span {
  padding: 0.8rem;
}
.add_area span i {
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
}
</style>
