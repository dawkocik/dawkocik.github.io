<template>
  <div class="home">
    <h1>D<span>a</span>wid Kocik</h1>
    <div class="content">
      <p>
        I am an experienced graphic designer and UI/UX designer with a strong
        background in visual communication and user experience design. I have a
        proven track record of creating visually stunning designs and intuitive
        user interfaces for web and mobile applications. Skilled in Adobe
        Creative Suite, Sketch, and InVision, I am a strong collaborator and
        communicator, and am excited to bring my expertise to a new challenge.
      </p>
      <div class="tv">
        <img src="../assets/tv.png" class="tv" />
        <img src="../assets/shadow.svg" class="shadow" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  margin: 0;
}

.content {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 5vh;
}

span {
  letter-spacing: -3vw;
}

h1 {
  font-family: "Metro Retro NF";
  font-size: 12vw;
  font-weight: 400;
}

p {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.9vw;
  line-height: 111.8%;
  text-align: right;
  letter-spacing: 0.05rem;

  width: 40vw;
  float: left;

  margin-right: 3vw;

  transform: translateY(5%);
}

img {
  clear: both;
}

.tv {
  width: 40vw;
}
.shadow {
  margin-top: 10px;
  width: 50%;
  filter: blur(12px);
}
</style>
