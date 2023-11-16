import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useCorgiStore = defineStore('corgis', () => {
  const corgis = ref([])

  // const addCorgi = async (corgiInput) => {
  //   try {
  //     const res = await axios.post('http://localhost:7912/corgis', corgiInput)
  //     const corgi = res.data
  //     return corgi
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const viewCorgi = async () => {
    try {
      const view_res = await axios.get('http://localhost:7912/corgis')
      corgis.value = view_res.data
      console.log(corgis.value)
    } catch (error) {
      console.log(error)
    }
  }

  return { corgis, viewCorgi }
})
