<template>
  <div>
    <div
      class="
        py-3
        rounded
        w-3/4
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
      "
    >
      <p
        class="inline text-2xl focus:outline-none"
        v-bind:class="{ 'line-through': task.complete }"
        v-on:dblclick="isCompleted"
      >
        {{ task.title }}
      </p>
      <div>
          <button v-if="!task.complete"
            class="pl-8 text-red-700 hover:text-white "
            @click="isCompleted"
          >
            Done
          </button>
          <button v-if="task.complete"
            class="pl-8 text-red-700 hover:text-white { visible == isComplete}"
            @click="isCompleted"
          >
            Unmark
          </button>
          <button
            class="pl-8 text-red-700 hover:text-white "
            @click="$emit('deleteTask', task.title)"
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