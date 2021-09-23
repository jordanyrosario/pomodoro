<template>
  <div>
    <div class="timer">
      <div class="text-center flex justify-center pb-0 mb-0 mt-4 h-16">
       
          <div >
            <button
              class="
                text-lg
                ml-3
                bg-red-300
                hover:bg-red-400
                rounded
                py-1.5
                px-5
              "
              @click="startPomodoro"
            >
              Pomodoro
            </button >
          </div>
          <div >
            <button
              class="
                text-lg
                ml-3
                bg-red-300
                hover:bg-red-400
                rounded
                py-1.5
                px-5
              "
              @click="startShortBreak"
            >
              Short Break
            </button>
          </div>
        </div>
      </div>
      <div class="container flex justify-center mx-auto">
          <div class="mx-auto">
            <h4 class="text-9xl pt-0 mx-auto mt-0 font-bold">
              {{ timerMinutes }}:{{ timerSeconds }}
            </h4>
            <div class="button-toggle flex justify-center">
              <button
                class="
                  text-4xl
                  mt-4
                  rounded
                  font-bold
                  px-14
                  py-3
                  mx-auto
                  shadow-lg
                  bg-red-600
                  hover:shadow-xl
                  hover:bg-red-700
                "
                @click="start"
                v-if="isActive === false"
              >
                START
              </button>
              <button
                class="
                  text-4xl
                  mt-4
                  rounded
                  font-bold
                  px-14
                  py-3
                  shadow-lg
                  bg-red-600
                  hover:shadow-xl
                  hover:bg-red-700
                "
                @click="stop"
                v-if="isActive === true"
              >
                STOP
              </button>
            </div>
          </div>
      </div>
  


    <div class="tasks container mx-auto flex flex-col">
      
      <div class="my-0 mx-auto">
        <hr class="py-4" />
      </div>
     
      <div class="addtask">

        <form @submit.prevent="addTasks">
          <input
            type="text"
            class="
              py-3
              rounded
              w-96
              px-8
              bg-red-600
              hover:bg-red-800
              text-white text-xl
              mb-2
              border-l-4
              outline-none
              text-center
            "
            name="task"
            id="task"
            v-model="addtask"
            placeholder="Add tasks here ..."
          />
        </form>
      </div>

      <div class="my-0 mx-auto">
        <hr class="py-4 bg-red-300 h-1 relative w-3/4" />
      </div>

       <h2 class="pt-8 flex  text-2xl py-6">Tasks:</h2>


      <div v-for="task in tasks" :key="task.title" id="task.title">
          <task :task="task"  />
        
      </div>
    </div>
  </div>

</template>
<script>
import Task from '../Task/Task.vue';
const notificationSound = new require("@/assets/beep-06.mp3").default;
export default {
  components: { Task },
  name: "Home",
  data() {
    return {
      minutes: 25,
      isActive: false,
      tasks: [
      
      ],
      addtask: "",
      timerType: 0,
      totalSeconds: 25 * 60,
      pomodoroInstance: null,
    };
  },
  computed: {
    
    timerMinutes() {
      const minutes = Math.floor(this.totalSeconds / 60);
      return this.formatTime(minutes);
    },
  
    timerSeconds() {
      let sec = this.totalSeconds % 60;

      return this.formatTime(sec);
    },
  },
  methods: {

    startPomodoro(){
        this.totalSeconds = 25 * 60;
        this.start();
    },
    startShortBreak(){
        this.totalSeconds = 5 * 60;
        this.start();
    },
    formatTime(time) {
      if (time < 10) {
        return "0" + time;
      }
      return time.toString();
    },
  
    start() {
      this.pomodoroInstance = setInterval(() => {
        this.totalSeconds -= 1;
        if (
          Math.floor(this.totalSeconds / 60) === 0 &&
          this.totalSeconds % 60 === 0
        ) {
          var audio = new Audio(this.notificationSound);
          audio.play();
          clearInterval(this.pomodoroInstance);
          (this.totalSeconds = 25 * 60), (this.isActive = false);
          console.log(audio);
        }
      }, 1000);
      this.isActive = true;
    },
    
    stop() {
      clearInterval(this.pomodoroInstance);
      this.isActive = false;
    },
    
    addTasks() {
      if (this.addtask === "") {
        alert("First add a task to proceed");
      } else {
        let newTask = {
          title: this.addtask,
          complete: false,
          edit: false,
        };
        this.tasks.push(newTask);
        this.addtask = "";
        console.log("Task has been updated successfully");
      }
    },
    
    // deleteTask(id) {
    //   this.tasks = this.tasks.filter((task) => task.title !== id);
    // },
  },
};
</script>
<style scoped>
</style>
