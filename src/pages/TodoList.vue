<template>
  <div>
      <ul>
          <li v-for="(todo,index) in $root.state.todoList" :key="index">
              {{todo}}
          </li>
      </ul>
      <router-link to="/add">Add</router-link>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$root.state.todoList)
    }
}
</script>

<style>

</style>