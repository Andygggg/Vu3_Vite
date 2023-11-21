<template>
  <button @click="generate">Generate Document</button>
</template>

<script setup>
import {
  Document,
  Table,
  TableCell,
  TableRow,
  Packer,
  Paragraph,
  WidthType,
  TableLayoutType,
} from 'docx'
import { saveAs } from 'file-saver'
import { ref } from 'vue'

const ExportData = ref([
  { title: '圖片1', content: '內容' },
  { title: '圖片2', content: '內容' },
  { title: '圖片3', content: '內容' },
  { title: '圖片4', content: '內容' },
])
const generate = () => {
  console.log(ExportData.value)
  const table = new Table({
    layout: TableLayoutType.FIXED,
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({ children: [new Paragraph('列1')] }),
          new TableCell({ children: [new Paragraph('列2')] }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({ children: [new Paragraph('data1')] }),
          new TableCell({ children: [new Paragraph('data2')] }),
        ],
      }),
    ],
  })

  console.log(table)
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [table],
      },
      {
        properties: {},
        children: [table],
      },
    ],
  })

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, 'example.docx')
  })
}
</script>
