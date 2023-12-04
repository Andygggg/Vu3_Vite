<template>
  <div class="">
    <img
      src="https://media.istockphoto.com/id/592031250/zh/%E7%85%A7%E7%89%87/milky-way-and-pink-light-at-mountains-night-colorful-landscape.jpg?s=612x612&w=0&k=20&c=XjvBw-fCG-ZVlOe1L7OMmw0vT66twMnKr9O2CbPch04="
      alt=""
      ref="imageCon"
      crossorigin="anonymous"
    />
    <button @click="handleAddWaterMarker">添加水印</button>
    <img :src="image" alt="" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const imageCon = ref(null)
const image = ref('')

const handleAddWaterMarker = async () => {
  const content = '我就是一个水印'
  const canvas = document.createElement('canvas')
  canvas.width = imageCon.value.width
  canvas.height = imageCon.value.height

  const ctx = canvas.getContext('2d')
  ctx.drawImage(imageCon.value, 0, 0, imageCon.value.width, imageCon.value.height)

  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.font = '14px 標楷體'
  ctx.fillStyle = 'rgba(255, 255, 255, 1)'

  ctx.fillText(
    content,
    imageCon.value.width - (content.split('').length * 14 + 10),
    imageCon.value.height - (14 + 10),
    imageCon.value.width,
  )

  image.value = canvas.toDataURL('image/png')
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'))
  console.log(blob)
}

onMounted(() => {
  // Additional setup code that needs to run after the component is mounted
})
</script>
