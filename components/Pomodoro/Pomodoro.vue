<template>
  <div>
    <div class="timer">
      <div class="text-center flex justify-center pb-0 mb-0 mt-4 h-16">
       
          <div  v-if="currentTimeInterval === onePomodoro">
            <button
              class="
                text-lg
                ml-3
                bg-red-300
                hover:bg-red-400
                 dark:bg-gray-600
               dark:text-white
                rounded
                py-1.5
                px-5
              "
            disabled
             
            >
              Pomodoro
            </button >
          </div>
          <div   v-if=" currentTimeInterval === oneBreak" >
            <button
              class="
                text-lg
                ml-3
                bg-red-300
                hover:bg-red-400
                 dark:bg-gray-600
               dark:text-white
                rounded
                py-1.5
                px-5
              "
              
            disabled
            >
              Short Break
            </button>
          </div>
          <div  v-if="currentTimeInterval === oneLongBreak" >
            <button
              class="
                text-lg
                ml-3
                bg-red-300
                hover:bg-red-400
                rounded
                 dark:bg-gray-600
                dark:text-white
                py-1.5
                px-5
              "
            disabled
              
            >
              Long Break
            </button>
          </div>
        </div>
      </div>
     <timer :time="currentTimeInterval" @stopped="setTimeInteverval" @reset="reset"/>
  


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
              mt-8 md:mt-2
              ml-4 md:ml-0
              bg-red-400
              hover:bg-red-500
              hover:text-white text-xl
              mb-2
             dark:bg-gray-600
             dark:text-white
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

       <h2 class="pt-8 flex ml-4 md:ml-0 text-2xl py-6  
             dark:text-white font-bold">Tasks:</h2>


      <div class="" v-for="task in tasks" :key="task.title" id="task.title">
          <task  class="mx-4" :task="task"  @delete="deleteTask"/>
        
      </div>
    </div>
  </div>

</template>
<script>
import Task from '../Task/Task.vue';
import Timer from './Timer/Timer';
export default {
  components: { Task, Timer },
  name: "Home",
  data() {
    return {
     onePomodoro: 25,
      oneLongBreak: 15,
      oneBreak: 5,
      currentTimeInterval: 25,
      pomodoros: 1,
      
      isActive: false,
      tasks: [
      
      ],
      addtask: "",
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

      setTimeInteverval(){
            if((this.pomodoros % 4) !== 0 && this.currentTimeInterval === this.onePomodoro ) 
                  {   
                      this.currentTimeInterval = this.oneBreak ;
                      console.log({"current": this.currentTimeInterval});
                  }else
                    if((this.pomodoros % 4) !== 0 && this.currentTimeInterval === this.oneLongBreak ) 
                        {this.currentTimeInterval = this.onePomodoro
                        console.log({"current": this.currentTimeInterval})
                     }else
                    if((this.pomodoros % 4) !== 0 && this.currentTimeInterval === this.oneBreak ) 
                        {this.currentTimeInterval = this.onePomodoro
                         this.pomodoros += 1;
                        console.log({"current": this.currentTimeInterval})
                     }else
                        if((this.pomodoros % 4) === 0 && this.currentTimeInterval !== this.oneLongBreak ) 
                            { 
                                this.currentTimeInterval = this.oneLongBreak
                                this.pomodoros += 1;
                                console.log({"current": this.currentTimeInterval})
                            }

            
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
    reset(){
            this.pomodoros = 1;
            this.currentTimeInterval = this.onePomodoro ;
    },
    deleteTask(id) {

        if (confirm("Are you sure?") ) {
       this.tasks = this.tasks.filter((task) => task.title !== id);
        }
   
    },
  },
};
</script>
<style scoped>
</style>
