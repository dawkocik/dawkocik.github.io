<template>
  <div class="contact">
    <div class="entry">
      <img src="../assets/email.svg" />
      <p>dawkocik@gmail.com</p>
    </div>
    <div class="entry">
      <img src="../assets/telegram.svg" />
      <p>@knuieiey</p>
    </div>
    <div class="entry">
      <img src="../assets/discord.svg" />
      <p>kn#1960</p>
    </div>
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
  height: 10vh;
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

  padding-top: 1vh;
  padding-bottom: 1vh;

  margin-right: 1vw;
}

p {
  font-size: 1.7vw;
  font-family: "Lato", sans-serif;
}
</style>
