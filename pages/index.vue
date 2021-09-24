<template>
  <div  class="dark:bg-gray-800 bg-red-200 min-h-screen">
    <nav-bar/>
    <div class="conatiner mx-auto"><pomodoro/></div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Pomodoro from '../components/Pomodoro/Pomodoro.vue'
export default {
  components: { NavBar, Pomodoro },}
</script>
