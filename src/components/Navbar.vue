<script setup>
import Button from "./Button.vue"
</script>

<template>
  <div class="navbar">
    <Button @click="scrollTo('home')">Home</Button>
    <Button @click="scrollTo('projects')">Projects</Button>
    <Button @click="scrollTo('contact')">Contact</Button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo(component) {
      const element = document.getElementsByClassName(component)[0]
      const y = element.getBoundingClientRect().top + window.scrollY - 30
      window.scrollTo({ top: y, behavior: "smooth" })
    },
  },
}
</script>

<style scoped>
.navbar {
  z-index: 999;
  border-top: 2px solid;
  width: 100%;
  background: #9085b0;
  position: fixed;
  bottom: 0;
}

Button {
  margin-right: 40px;
  margin-top: 6px;
  margin-bottom: calc(6px + 5px + 3px);
}
</style>
