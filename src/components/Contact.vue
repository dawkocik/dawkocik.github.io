<template>
  <div class="contact">
    <a href="mailto:dawkocik@gmail.com" target="_blank" class="entry">
      <img src="../assets/gmail.svg" />
      <p>dawkocik@gmail.com</p>
    </a>
    <a href="https://t.me/knuieiey" target="_blank" class="entry">
      <img src="../assets/telegram.svg" />
      <p>@knuieiey</p>
    </a>
    <a
      href="https://discord.com/users/239114767690629120"
      target="_blank"
      class="entry"
    >
      <img src="../assets/discord.svg" />
      <p>kn#1960</p>
    </a>
  </div>
</template>

<style scoped>
.contact {
  margin: auto;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 10vh;
  margin-right: 1vw;
}

.entry {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #9ea1d4;
  border: 3px solid #000;
  border-radius: 4px;
  width: fit-content;

  padding-left: 1vw;
  padding-right: 1vw;

  height: 12vh;

  margin-right: 1vw;
}

p {
  font-size: 1.7vw;
  font-family: "Joystix", sans-serif;
}

a {
  color: #000;
  text-decoration: none;
}
</style>
