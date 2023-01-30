<template>
  <div class="footer">Copyright &copy; Dawid Kocik 2023</div>
</template>

<script>
export default {
  created() {
    window.addEventListener("resize", this.eventHandler)
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.eventHandler()
      }
    }
  },
  unmounted() {
    window.removeEventListener("resize", this.eventHandler)
  },
  methods: {
    eventHandler() {
      const footer = document.getElementsByClassName("footer")[0]
      const navbar = document.getElementsByClassName("navbar")[0]
      let navbarHeight = navbar.offsetHeight
      footer.style.marginBottom = navbarHeight + 10 + "px"
    },
  },
}
</script>

<style>
.footer {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.32vw;
  line-height: 111.8%;
  text-align: center;
  letter-spacing: 0.05rem;

  margin-top: 5vh;
  /* margin-bottom: 15rem; */
}
</style>
