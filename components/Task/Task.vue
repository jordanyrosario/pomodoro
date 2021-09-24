<template>
  <div>
    <div
      class="
        py-3
        rounded
        w-full
        px-8
        bg-red-100
        hover:bg-red-300
        hover:text-white
        text-black text-xl
        mb-2
        border-2
        list-none
        my-0
        mx-auto
        focus:outline-none
        flex justify-between
        dark:bg-gray-600
        dark:border-gray-400
        dark:text-gray-50
        
      "
    >
      <p
        class="inline text-2xl focus:outline-none dark:text-gray-200"
        v-bind:class="{ 'line-through': task.complete }"
        v-on:dblclick="isCompleted"
      >
        {{ task.title }}
      </p>
      <div>
          <button v-if="!task.complete"
            class="pl-8 text-red-700 hover:text-white  dark:text-gray-100 "
            @click="isCompleted"
          >
            Done
          </button>
          <button v-if="task.complete"
            class="pl-8 text-red-700 hover:text-white dark:text-gray-100 "
            @click="isCompleted"
          >
            Unmark
          </button>
          <button
            class="pl-8 text-red-700 hover:text-white  dark:text-gray-100"
            @click="$emit('delete', task.title)"
          >
            Delete
          </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Task",
  props: ["task"],
  data() {
    return {};
  },
  methods: {
    isCompleted() {
      this.task.complete = !this.task.complete;
    },
  },
};
</script>
<style scoped>
</style>