<template>
  <button><slot /></button>
</template>

<style>
button {
  cursor: pointer;
  width: max-content;
  padding-left: 23px;
  padding-right: 23px;
  height: 76px;
  font-family: "Joystix";
  font-style: normal;
  font-size: 42px;
  line-height: 50px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #000;
  background: #fff;
  border: 3px solid #000;
  border-radius: 4px;
  position: relative;
  top: 0;
  left: 0;
  transition: all 0.3s;
}

button::after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #768a7e;
  border: 3px solid #000;
  border-radius: 4px;
  z-index: -1;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}

button:hover {
  top: 2.5px;
  left: 2.5px;
}

button:hover::after {
  top: -1px;
  left: -1px;
}
</style>
