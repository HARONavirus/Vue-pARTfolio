<script setup>
import Menu from '@/components/Menu.vue';
import { ref } from 'vue';

const theme = ref('dark');

const changeTheme = (newTheme) => {
  theme.value = newTheme;
};

const nightVideo = ref(null);
const dayVideo = ref(null);
</script>

<template>
    <body>
      <video ref="nightVideo" autoplay muted loop v-if="theme === 'dark'">
        <source src="../assets/video/Night.mp4" type="video/mp4" />
      </video>
      <video ref="dayVideo" autoplay muted loop v-else>
        <source src="../assets/video/Day.mp4" type="video/mp4" />
      </video>
    </body>
  
    <Menu :theme="theme" @toggleTheme="changeTheme" />
  </template>

<style scoped>

body {
  background-color: azure;
}

video {
    position: absolute;
    transform: scaleX(-1);
    object-fit: cover;
    object-position: 90%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

</style>