<script setup>
</script>

<template>
    <body>
        <video autoplay muted loop>
            <source src="../assets/video/Day.mp4" type="video/mp4">
        </video>
    </body>
  </template>

<style scoped>

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