<template>
  <div class="home">
    111
    <div id="container"></div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import * as Three from "three";
import { Water } from './utils-three/water.js';
let THREE =  Three
console.log("Water", Water)
export default defineComponent({
    name: "flutterPicture",
    setup() {
      let container: unknown = null;
      let stats: unknown = null;
      let scene: unknown = null;
      let renderer: unknown = null;
      let controls: unknown = null;
      let water: unknown = null;
      let sun: unknown = null;
      let mesh: unknown = null;
      return {
        container,
        stats,
        scene,
        renderer,
        controls,
        water,
        sun,
        mesh,
      };
    },
methods: {
    init() {
        this.container = document.getElementById('container') as HTMLElement;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.container.appendChild( this.renderer.domElement );
    },
    animate() {},
},
mounted() {
    init();
	animate();
},
});
</script>
<style scoped>

#container {

  height: 400px;

}

</style>

function animate() {
  throw new Error("Function not implemented.");
}
