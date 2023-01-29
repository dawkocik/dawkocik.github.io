<script setup>
import Home from "./components/Home.vue"
import Navbar from "./components/Navbar.vue"
import Projects from "./components/Projects.vue"
import Footer from "./components/Footer.vue"
import Contact from "./components/Contact.vue"
</script>

<template>
  <div class="container">
    <Home />
    <Navbar />
    <Projects />
    <Contact />
    <Footer />
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
