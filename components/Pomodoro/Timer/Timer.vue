<template>
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
                v-if="!isActive "
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
                v-if="isActive"
              >
                STOP
              </button>
            </div>
          </div>
      </div>
</template>
<script>
const notificationSound = new require("@/assets/beep-06.mp3").default;
export default {
  props:{
    time:{
      type: Number,
      default: 25
    },
  },

  name: "Timer",
  data() {
    return {
      isActive: false,
      timerType: 0,
      totalSeconds: this.time * 60,
      pomodoroInstance: null,
      notificationSound,
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
          this.$emit('stopped');
          clearInterval(this.pomodoroInstance);

          this.$nextTick(function(){
              (this.totalSeconds = this.time * 60), (this.isActive = false);
          });
          
          console.log(audio);
        }
      }, 1000);
      this.isActive = true;
      this.$emit('started');
    },
    // stop the timer interval
    stop() {
      clearInterval(this.pomodoroInstance);
      this.isActive = false;
      this.$emit('reset');
      this.$nextTick(function(){
                (this.totalSeconds = this.time * 60), (this.isActive = false);
            });
      },
  },
};
</script>
