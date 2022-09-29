import { defineStore } from "pinia";
export const tableDataStore = defineStore('tableData',{
  state:()=>({
    text:"hello world"
  }),
  actions:{
    setText(val) {
      this.text = val
    }
  },
  getters:{
    getText(){
      return this.text
    }
  }
})