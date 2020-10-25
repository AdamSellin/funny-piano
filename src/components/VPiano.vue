<template>
  <div class="Home bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 h-screen">
    <div class="container">
          <img id="emoji" class="Gif mx-auto mt-32" src="https://urlz.fr/e5H3">
          <div class="title mx-auto mt-8 mb-8">
            <h1 class="text_title">The emoji piano</h1>
          </div>
          <div class="Piano inset-x-0 bottom-0 mx-auto mb-24">
                  <div class="rectangle17">
                    <div  tabindex="1" id="do" class="rectangle4" v-on:click="playDo()"></div>
                    <div tabindex="2" id="re" class="rectangle5" v-on:click="playRe()"></div>
                    <div tabindex="3" id="mi" class="rectangle6" v-on:click="playMi()"></div>
                    <div tabindex="4" id="fa" class="rectangle7" v-on:click="playFa()"></div>
                    <div tabindex="5" id="sol" class="rectangle8" v-on:click="playSol()"></div>
                    <div tabindex="6" id="la" class="rectangle9" v-on:click="playLa()"></div>
                    <div tabindex="7" id="si" class="rectangle10" v-on:click="playSi()"></div>
                    <div tabindex="8" id="re2" class="rectangle12" v-on:click="playRe2()"></div>
                    <div tabindex="9" id="mi2" class="rectangle13" v-on:click="playMi2()"></div>
                    <div tabindex="10" id="sol2" class="rectangle14" v-on:click="playSol2()"></div>
                    <div tabindex="11" id="si2" class="rectangle15" v-on:click="playSi2()"></div>
                    <div tabindex="12" id="do2" class="rectangle16" v-on:click="playDo2()"></div>
                  </div>
                  <div class="note">
                    <div id="noteDo" class="note1">DO</div>
                    <div id="noteRe" class="note2">RÉ</div>
                    <div id="noteMi" class="note3">MI</div>
                    <div id="noteFa" class="note4">FA</div>
                    <div id="noteSol" class="note5">SOL</div>
                    <div id="noteLa" class="note6">LA</div>
                    <div id="noteSi" class="note7">SI</div>
                  </div>
            </div>
    </div>
  </div>
</template>

<script>
//import { Grid } from '@giphy/react-components'
//import { GiphyFetch } from '@giphy/js-fetch-api'
//const gf = new GiphyFetch('hoc7Xw81iwUP2iewXhekupQznVmYDlHK')

//const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })*/

export default {

  methods: {
   async playDo () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/C.mp3")

            audio.play()

      const img = document.querySelector('img');
       /* fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'})
        .then(function(response) {
      return response.json();
      })
        .then(function(response) {
        img.src = response.data.images.original.url;
      });*/

      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;


      document.getElementById("do").style.background = "#FFD12D";
      document.getElementById("noteDo").style.color= "#FFFFFF";
      setTimeout(function(){
      document.getElementById("noteDo").style.color =  "rgba(255, 255, 255, 0.4)";
      }, 400);
      setTimeout(function(){
      document.getElementById("do").style.background =  "#FFFFFF";
      }, 400);

    },

    async playRe () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/D.mp3")

            audio.play()

      const img = document.querySelector('img');
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;

      document.getElementById("re").style.background = "#FFD12D";
      document.getElementById("noteRe").style.color= "#FFFFFF";
      setTimeout(function(){
      document.getElementById("noteRe").style.color =  "rgba(255, 255, 255, 0.4)";
      }, 400);
      setTimeout(function(){
      document.getElementById("re").style.background =  "#FFFFFF";
      }, 400);

    },

    async playMi () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/E.mp3")

            audio.play()

      const img = document.querySelector('img');
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;

      document.getElementById("mi").style.background = "#FFD12D";
      document.getElementById("noteMi").style.color= "#FFFFFF";
      setTimeout(function(){
      document.getElementById("noteMi").style.color =  "rgba(255, 255, 255, 0.4)";
      }, 400);
      setTimeout(function(){
      document.getElementById("mi").style.background =  "#FFFFFF";
      }, 400);
    },

    async playFa () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/F.mp3")

            audio.play()

      const img = document.querySelector('img');
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;

      document.getElementById("fa").style.background = "#FFD12D";
      document.getElementById("noteFa").style.color= "#FFFFFF";
      setTimeout(function(){
      document.getElementById("noteFa").style.color =  "rgba(255, 255, 255, 0.4)";
      }, 400);
      setTimeout(function(){
      document.getElementById("fa").style.background =  "#FFFFFF";
      }, 400);
    },

    async playSol () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/G.mp3")

            audio.play()

      const img = document.querySelector('img');
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;

      document.getElementById("sol").style.background = "#FFD12D";
      document.getElementById("noteSol").style.color= "#FFFFFF";
      setTimeout(function(){
      document.getElementById("noteSol").style.color =  "rgba(255, 255, 255, 0.4)";
      }, 400);
      setTimeout(function(){
      document.getElementById("sol").style.background =  "#FFFFFF";
      }, 400);
    },

    async playLa () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/A.mp3")

            audio.play()

      const img = document.querySelector('img');
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;

      document.getElementById("la").style.background = "#FFD12D";
      document.getElementById("noteLa").style.color= "#FFFFFF";
      setTimeout(function(){
      document.getElementById("noteLa").style.color =  "rgba(255, 255, 255, 0.4)";
      }, 400);
      setTimeout(function(){
      document.getElementById("la").style.background =  "#FFFFFF";
      }, 400);
    },

    async playSi () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/B.mp3")

            audio.play()

      const img = document.querySelector('img');
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;

      document.getElementById("si").style.background = "#FFD12D";
      document.getElementById("noteSi").style.color= "#FFFFFF";
      setTimeout(function(){
      document.getElementById("noteSi").style.color =  "rgba(255, 255, 255, 0.4)";
      }, 400);
      setTimeout(function(){
      document.getElementById("si").style.background =  "#FFFFFF";
      }, 400);
    },

    async playRe2 () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/D#.mp3")

            audio.play()

      const img = document.querySelector('img');
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;

      document.getElementById("re2").style.background = "#E6016F";
      setTimeout(function(){
      document.getElementById("re2").style.background =  "#000000";
      }, 400);
    },

    async playMi2 () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/D#.mp3")

            audio.play()

      const img = document.querySelector('img');
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;

      document.getElementById("mi2").style.background = "#E6016F";
      setTimeout(function(){
      document.getElementById("mi2").style.background =  "#000000";
      }, 400);
    },

    async playSol2 () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/D#.mp3")

            audio.play()

      const img = document.querySelector('img');
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;

      document.getElementById("sol2").style.background = "#E6016F";
      setTimeout(function(){
      document.getElementById("sol2").style.background =  "#000000";
      }, 400);
    },

    async playSi2 () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/D#.mp3")

            audio.play()

      const img = document.querySelector('img');
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;

      document.getElementById("si2").style.background = "#E6016F";
      setTimeout(function(){
      document.getElementById("si2").style.background =  "#000000";
      }, 400);
    },

    async playDo2 () {
      const audio = document.createElement('audio')
            audio.src = require("../../public/assets/sounds/D#.mp3")

            audio.play()

      const img = document.querySelector('img');
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=hoc7Xw81iwUP2iewXhekupQznVmYDlHK&username=Emoji', {mode: 'cors'});
      const catData = await response.json();
      img.src = catData.data.images.original.url;

      document.getElementById("do2").style.background = "#E6016F";
      setTimeout(function(){
      document.getElementById("do2").style.background =  "#000000";
      }, 400);
    }

  }
}

</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');

.Home {
  position: relative;
  /*width: ;
  height: 768px;
  background: linear-gradient(135deg, #FF9D6C 0%, #BB4E75 100%);*/
}

.title {
  position: absolute;
  width: 332px;
  height: 60px;
  left: 554px;
  top: 40px;
  text-align: center;
  position: absolute;
  background: #111111;
  border-radius: 10px;
  left: 0%;
  right: 0%;
  bottom: 0%;
  top: 0%;
}

.text_title {
  position: absolute;
  left: 9.34%;
  right: 9.34%;
  top: 21.67%;
  bottom: 21.67%;

  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 34px;
  /* identical to box height */

  text-align: center;

  color: #FFFFFF;
}

.Piano {
/* piano */

  position: absolute;
  width: 531px;
  height: 276px;
  //left: 20px;
  //top: 388px;

  filter: drop-shadow(0px 12px 80px rgba(0, 0, 0, 0.3));
}

.Keys {
  /* keys

  position: absolute;
  left: 2.26%;
  right: 2.26%;
  top: 4.35%;
  bottom: 4.35%;*/
}

.rectangle17 {
  /* Rectangle 17 */
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #000000;
  border-radius: 10px;
}

.rectangle4 {
  /* Rectangle 4*/
  position: absolute;
  left: 2.26%;
  right: 84.75%;
  top: 4.35%;
  bottom: 4.35%;

  background: #FFFFFF;
  border-radius: 5px 0px 0px 5px;
}

.rectangle5 {
  /* Rectangle 5 */
  position: absolute;
  left: 16.01%;
  right: 71%;
  top: 4.35%;
  bottom: 4.35%;

  background: #FFFFFF;
}

.rectangle6 {
/* Rectangle 6 */
  position: absolute;
  left: 29.76%;
  right: 57.25%;
  top: 4.35%;
  bottom: 4.35%;

  background: #FFFFFF;
}

.rectangle7 {
  /* Rectangle 7 */
  position: absolute;
  left: 43.5%;
  right: 43.5%;
  top: 4.35%;
  bottom: 4.35%;

  background: #FFFFFF;
}

.rectangle8 {
  /* Rectangle 8 */
  position: absolute;
  left: 57.25%;
  right: 29.76%;
  top: 4.35%;
  bottom: 4.35%;

  background: #FFFFFF;
}

.rectangle9 {
  /* Rectangle 9 */
  position: absolute;
  left: 71%;
  right: 16.01%;
  top: 4.35%;
  bottom: 4.35%;

  background: #FFFFFF;
}

.rectangle10 {
  /* Rectangle 10 */
  position: absolute;
  left: 84.75%;
  right: 2.26%;
  top: 4.35%;
  bottom: 4.35%;

  background: #FFFFFF;
  border-radius: 0px 5px 5px 0px;
}

.rectangle12 {
  /* Rectangle 12 */
  position: absolute;
  left: 12.81%;
  right: 81.54%;
  top: 4.35%;
  bottom: 28.99%;

  background: #000000;
  border-radius: 0px 0px 5px 5px;
}

.rectangle13 {
  /* Rectangle 13 */

  position: absolute;
  left: 26.55%;
  right: 67.8%;
  top: 4.35%;
  bottom: 28.99%;

  background: #000000;
  border-radius: 0px 0px 5px 5px;
}

.rectangle14 {
  /* Rectangle 14 */
  position: absolute;
  left: 54.05%;
  right: 40.3%;
  top: 4.35%;
  bottom: 28.99%;

  background: #000000;
  border-radius: 0px 0px 5px 5px;
}

.rectangle15 {
  /* Rectangle 15 */
  position: absolute;
  left: 67.8%;
  right: 26.55%;
  top: 4.35%;
  bottom: 28.99%;

  background: #000000;
  border-radius: 0px 0px 5px 5px;
}

.rectangle16 {
  /* Rectangle 16 */
  position: absolute;
  left: 81.54%;
  right: 12.81%;
  top: 4.35%;
  bottom: 28.99%;

  background: #000000;
  mix-blend-mode: normal;
  border-radius: 0px 0px 5px 5px;
}

.note {
  position: absolute;
  width: 462px;
  height: 22px;
}

.note1 {
  /* DO */
  position: absolute;
  width: 24px;
  height: 22px;
  left: 34px;
  top: 324px;

  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  text-align: center;

  color: rgba(255, 255, 255, 0.4);
}

.note2 {
  /* RÉ */
  position: absolute;
  width: 24px;
  height: 22px;
  left: 106px;
  top: 324px;

  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  text-align: center;

  color: rgba(255, 255, 255, 0.4);
}

.note3 {
  /* MI */
  position: absolute;
  width: 24px;
  height: 22px;
  left: 180px;
  top: 324px;

  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  text-align: center;

  color: rgba(255, 255, 255, 0.4);
}

.note4 {
  /* FA */
  position: absolute;
  width: 24px;
  height: 22px;
  left: 254px;
  top: 324px;

  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  text-align: center;

  color: rgba(255, 255, 255, 0.4);
}

.note5 {
  /* SOL */
  position: absolute;
  width: 36px;
  height: 22px;
  left: 321px;
  top: 324px;

  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  text-align: center;

  color: rgba(255, 255, 255, 0.4);
}

.note6 {
  /* LA */
  position: absolute;
  width: 24px;
  height: 22px;
  left: 400px;
  top: 324px;

  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  text-align: center;

  color: rgba(255, 255, 255, 0.4);
}

.note7 {
  /* SI */
  position: absolute;
  width: 24px;
  height: 22px;
  left: 472px;
  top: 324px;

  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  text-align: center;

  color: rgba(255, 255, 255, 0.4);
}

.Gif {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 0%;
  right: 0%;
  bottom: 0%;
  top: 0%;
}
</style>

