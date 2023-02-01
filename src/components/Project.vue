<script setup>
import Gallery from "./Gallery.vue"
</script>

<template>
  <div v-if="variant === 'left'" class="project left">
    <Gallery id="image" :images="this.data.images" />
    <div class="description-wrapper">
      <div class="description">{{ data.description }}</div>
      <img v-for="img in data.technologies" :src="img + '.svg'" class="icon" />
    </div>
  </div>
  <div v-else class="project right">
    <div class="description-wrapper">
      <div class="description">{{ data.description }}</div>
      <img v-for="img in data.technologies" :src="img + '.svg'" class="icon" />
    </div>
    <Gallery id="image" :images="this.data.images" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
    iteration: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    variant() {
      return this.iteration % 2 == 0 ? "left" : "right"
    },
  },
}
</script>

<style>
#image {
  aspect-ratio: 16 / 9;
  width: 45vw;
  background-color: #d9d9d9;
  border-radius: 4px;
  border: 3px solid #000000;
  position: relative;
  float: left;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

#image::after {
  position: absolute;
  content: "";
  top: 5px;
  left: 5px;
  background-color: #768a7e;
  border: 3px solid #000;
  border-radius: 4px;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.icon {
  position: relative;
  height: 10vh;
  margin-top: 3vh;
  margin-right: 1vw;
}

.description {
  width: 30vw;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.32vw;
  line-height: 111.8%;
  text-align: left;
  letter-spacing: 0.05rem;
  position: relative;
  top: 8px;

  background-color: #9ea1d4;
  border: 3px solid #000;
  border-radius: 4px;
  height: fit-content;
  padding: 5px;
  clear: both;
}

.project {
  clear: both;
  display: flex;
  justify-content: center;
}

.right > .description-wrapper > .description {
  text-align: right;
}

.right > #image {
  margin-left: calc(2vw - (5px + 3px));
}

.left > #image {
  margin-right: 2vw;
}
</style>
