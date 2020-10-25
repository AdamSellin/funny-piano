<template>
  <div id="app">
    <VPiano />
   <!-- <VEmoji />-->
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import VPiano from "./components/VPiano";
//import VEmoji from "./components/VEmoji";

export default {
  name: 'App',
  components: {
    VPiano
    //VEmoji
  }
}
</script>

