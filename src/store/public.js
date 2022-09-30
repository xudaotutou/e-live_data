import { defineStore } from "pinia";
export const publicStore = defineStore('public',{
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