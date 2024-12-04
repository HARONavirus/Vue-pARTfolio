<script setup>
import Menu from '@/components/Menu.vue';
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const theme = ref('dark');

const changeTheme = (newTheme) => {
  theme.value = newTheme;
};

const nightVideo = ref(null);
const dayVideo = ref(null);
</script>

<template>
    <Menu :theme="theme" @toggleTheme="changeTheme" />
    <body>
      <video ref="nightVideo" autoplay muted loop v-if="theme === 'dark'">
        <source src="./assets/video/Night.mp4" type="video/mp4" />
      </video>
      <video ref="dayVideo" autoplay muted loop v-else>
        <source src="./assets/video/Day.mp4" type="video/mp4" />
      </video>
    </body>
    <RouterView />
</template>

<style scoped>

body {
  background-color: black;
  z-index: -1;
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
    z-index: 0;
}

</style>
