<script>
export default {
  data() {
    return {
      json: json,
    }
  },
}
</script>

<script setup>
import Project from "./Project.vue"
import json from "../assets/projects.json"
</script>

<template>
  <div class="projects">
    <Project
      v-for="(data, index) in json.projects"
      v-bind:data="data"
      :iteration="index"
    />
  </div>
</template>

<style scoped>
.projects {
  width: 90%;
  margin: 0 auto;
  margin-top: 13vh;
}

.project {
  margin-top: 5vh;
}
</style>
