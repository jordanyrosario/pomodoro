<template>
  <div class="container flex justify-center mx-auto">
    <div class="mx-auto">
      <h4 class="text-9xl pt-0 mx-auto mt-0 font-bold dark:text-gray-300">
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
            hover:shadow-xl hover:bg-red-700
            dark:text-gray-400 dark:bg-gray-500
            dark-hover:text-gray-600
          "
          @click="start"
          v-if="!isActive || paused"
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
            hover:shadow-xl hover:bg-red-700
            dark:text-gray-400 dark:bg-gray-600
            dark-hover:text-gray-600
          "
          @click="stop"
          v-if="!paused && isActive"
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
  props: {
    time: {
      type: Number,
      default: 25,
    },
  },

  name: "Timer",
  data() {
    return {
      isActive: false,
      totalSeconds: this.time * 60,
      pomodoroInstance: null,
      notificationSound,
      paused: false,
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
      if(this.pomodoroInstance == null){
      this.pomodoroInstance = setInterval(() => {
        this.totalSeconds -= 1;
        this.paused = false;
        if (
          Math.floor(this.totalSeconds / 60) === 0 &&
          this.totalSeconds % 60 === 0
        ) {
          var audio = new Audio(this.notificationSound);

          audio.play();
          if (!paused) 
          this.$emit("stopped");

          clearInterval(this.pomodoroInstance);
          this.pomodoroInstance = null;
          this.$nextTick(function () {
            (this.totalSeconds = this.time * 60), (this.isActive = false);
          });

        }
      }, 1000);
      this.isActive = true;
      this.$emit("started");
    }
      
    },
    stop() {
      clearInterval(this.pomodoroInstance);
      this.pomodoroInstance = null;
      this.paused = true;
    },
    reset() {
      this.$emit("reset");
      this.$nextTick(function () {
        (this.totalSeconds = this.time * 60), (this.isActive = false);
      });
    },
  },
};
</script>
