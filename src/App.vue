<script setup>
import Home from "./components/Home.vue"
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <div class="container">
    <Home />
    <Navbar />
  </div>
</template>

<style>
body {
  background: linear-gradient(111.76deg, #9ea1d4 0.37%, #d39ed4 87.93%);
  width: 100%;
  height: 100%;
}
.container {
  margin: 0;
}
</style>
