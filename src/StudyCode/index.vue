<template>
  <button @click="generate">Generate Document</button>
</template>

<script setup>
import { ref } from 'vue'
import {
  Document,
  Table,
  TableCell,
  TableRow,
  Packer,
  Paragraph,
  VerticalAlign,
  TableLayoutType,
} from 'docx'
import { saveAs } from 'file-saver'

const generate = () => {
  //要匯出的值
  const value = ref([
    {
      key: 'title1',
      value: 'value1'.repeat(50),
    },
    {
      key: 'title2',
      value: ['value2-1', 'value2-2', 'value2-3'],
    },
  ])

  const table = new Table({
    layout: TableLayoutType.FIXED,
    columns: 2,
    width: 0,
    columnWidths: [3213, 6425],
    rows: value.value.reduce((acc, item) => {
      const { key, value } = item
      if (Array.isArray(value)) {
        acc.push(
          ...value.map((item, index) => {
            return new TableRow({
              children: [
                ...(index == 0
                  ? [
                      new TableCell({
                        rowSpan: value.length,
                        children: [
                          new Paragraph({
                            text: key,
                          }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                      }),
                    ]
                  : []),
                new TableCell({
                  children: [
                    new Paragraph({
                      text: item,
                    }),
                  ],
                  verticalAlign: VerticalAlign.CENTER,
                }),
              ],
            })
          }),
        )
      } else {
        acc.push(
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: key,
                  }),
                ],
                verticalAlign: VerticalAlign.CENTER,
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: value,
                  }),
                ],
                verticalAlign: VerticalAlign.CENTER,
              }),
            ],
          }),
        )
      }
      return acc
    }, []),
  })

  const doc = new Document({
    sections: [
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
