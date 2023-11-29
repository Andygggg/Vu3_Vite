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
  BorderStyle,
  TextRun,
  Header,
  ImageRun,
} from 'docx'
import { saveAs } from 'file-saver'
import { ref } from 'vue'

const url = 'https://miro.medium.com/v2/resize:fit:1400/1*FKlRYAU5z-74RYqsTYrOAQ@2x.png'
//table test data
const ExportData = ref([
  { title: '圖片1', content: '內容', picture: url },
  { title: '圖片2', content: '內容', picture: url },
  { title: '圖片3', content: '內容', picture: url },
  { title: '圖片4', content: '內容', picture: url },
  { title: '圖片5', content: '內容', picture: url },
  { title: '圖片6', content: '內容', picture: url },
  { title: '圖片7', content: '內容', picture: url },
  { title: '圖片8', content: '內容', picture: url },
])
async function createImage(src) {
  const blob = await fetch(src).then((res) => res.blob())
  return blob
}
//設置table字體樣式
const TableStyle = (text, isContent = true) => {
  const cellChildren = [
    new Paragraph({
      children: [
        isContent
          ? new TextRun({
              text,
              bold: true,
              font: '標楷體',
              size: 24,
            })
          : new ImageRun({
              data: createImage(text),
              transformation: {
                width: 100,
                height: 100,
              },
            }),
      ],
    }),
  ]
  return cellChildren
}
//包裝成docx table格式
const createTableCell = (text, isContent = true) => {
  return new TableCell({
    children: TableStyle(text, isContent),
    borders: {
      top: { style: BorderStyle.DOUBLE, size: 3 },
      bottom: { style: BorderStyle.DOUBLE, size: 3 },
      left: { style: BorderStyle.DOUBLE, size: 3 },
      right: { style: BorderStyle.DOUBLE, size: 3 },
    },
  })
}
//生成table
const generate = () => {
  let table = null
  let sections = []
  let Item = {
    layout: TableLayoutType.FIXED,
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    rows: [],
  }

  for (let index = 1; index < ExportData.value.length; index += 2) {
    const element = ExportData.value[index - 1]
    const Element = ExportData.value[index]

    const addRow = (cells) => {
      Item.rows.push(new TableRow({ children: cells }))
    }

    addRow([createTableCell(element.title), createTableCell(Element.title)])

    addRow([createTableCell(element.picture, false), createTableCell(Element.picture, false)])

    addRow([createTableCell(element.content), createTableCell(Element.content)])

    if (Item.rows.length === 6) {
      table = new Table(Item)
      let sections_item = {
        headers: {
          default: new Header({
            children: [new Paragraph('貴陽大樓新建工程'), new Paragraph('應州工程有限公司')],
          }),
        },
        properties: {},
        children: [table],
      }
      sections.push(sections_item)
      Item.rows = []
    }
  }

  const doc = new Document({ sections })

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, 'example.docx')
  })
}
</script>
