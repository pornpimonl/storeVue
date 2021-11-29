<template>
  <div>
      <form @submit.prevent="onSubmit">
          <label>Todo Text : </label>
          <input type="text" v-model="todoText" />
          <br/>
          <button type="submit">Add</button>
      </form>
      <router-link to="/list">List</router-link>
  </div>
</template>

<script>
import store from '../store.js'
export default {
    data(){
        return{
            todoText:'',
        }
    },
    methods:{
        onSubmit(){
            store.addtodo(this.todoText)
            this.todoText = ''
            this.$router.push('/list')
        }
    }
}
</script>

<style>

</style>