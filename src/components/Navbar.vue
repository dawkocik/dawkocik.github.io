<script setup>
import Button from "./Button.vue"
</script>

<template>
  <div class="navbar">
    <Button>Home</Button>
    <Button>Projects</Button>
    <Button>Contact</Button>
  </div>
</template>

<style scoped>
.navbar {
  z-index: 69;
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
