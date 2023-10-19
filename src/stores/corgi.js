import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const corgis = []

  const addCorgi = async (corgiInput) => {
    try {
      const res = await axios.post('http://localhost:7912/corgis', corgiInput)
      const corgi = res.data
      return corgi
    } catch (error) {
      console.log(error)
    }
  }

  return { corgis, addCorgi }
})
