<template>
  <div  class="dark:bg-gray-700">
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
