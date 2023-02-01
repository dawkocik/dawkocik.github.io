<template>
  <div :style="bg" class="dupa" @click="nextImage"></div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: 0,
    }
  },
  methods: {
    nextImage() {
      if (this.currentImage >= Object.keys(this.images).length - 1) {
        this.currentImage = 0
      } else {
        this.currentImage += 1
      }
    },
  },
  props: {
    images: {
      type: Object,
      default: {},
    },
  },
  computed: {
    bg() {
      return (
        'background: url("projects/' +
        this.images[this.currentImage] +
        '") no-repeat center  / cover;'
      )
    },
  },
}
</script>
