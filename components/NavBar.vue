<template>
<div>    
    
<nav class="bg-red-400 shadow-lg dark:bg-gray-900" >
  <div class="container mx-auto px-4 md:px-0 ">
    <div class="relative flex items-center justify-between h-16">
      <div class=" flex items-center md:hidden">
        <!-- Mobile menu button-->
        <button  type="button" class="inline-flex items-center border border-solid border-red-400 justify-center p-2 rounded-md text-red-400 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-gray-100 dark:bg-gray-700 dark:border-gray-200" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex  items-center justify-center md:items-stretch md:justify-start">
        <div class="flex-shrink-0 flex items-center">
         
        <span class="text-3xl font-bold dark:text-gray-300">Pomodor</span>
        </div>
        <div class="hidden md:block  md:ml-6 ">
          <div class="flex space-x-4">

            
          </div>
        </div>
      </div>
      <div class=" inset-y-0 right-0 flex items-center pr-2 sm:static ml-4 sm:inset-auto sm:ml-6 sm:pr-0">
        <button @click="notify = !notify" class="p-1 rounded-full text-gray-400 dark:text-gray-50  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        
      </div>
       <select
        v-model="$colorMode.preference"
        class="border  h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  </div>


</nav>

          
</div>
</template>
<script>



export default {

methods:{


}
    
}
</script>

<style >

</style>