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
      let container: any = null;
      let stats: any = null;
      let scene: any = null;
      let renderer: any = null;
      let controls: unknown = null;
      let water: any = null;
      let sun: unknown = null;
      let mesh: any = null;
      let camera: any = null;
      return {
        container,
        stats,
        scene,
        renderer,
        controls,
        water,
        sun,
        mesh,
        camera,
      };
    },
methods: {
    init() {
      this.container = document.getElementById('container') as HTMLElement;
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.container.appendChild( this.renderer.domElement );
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
			this.camera.position.set( 30, 30, 100 );
      this.sun = new THREE.Vector3();
      const waterGeometry = new THREE.PlaneGeometry( 10000, 10000 );
      this.water = new Water(
        waterGeometry,
        {
          textureWidth: 512,
          textureHeight: 512,
          waterNormals: new THREE.TextureLoader().load( 'textures/waternormals.jpg', function ( texture ) {

            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

          } ),
          sunDirection: new THREE.Vector3(),
          sunColor: 0xffffff,
          waterColor: 0x001e0f,
          distortionScale: 3.7,
          fog: this.scene.fog !== undefined
        }
      );
      this.water.rotation.x = - Math.PI / 2;
			this.scene.add( this.water );
      const geometry = new THREE.BoxGeometry( 30, 30, 30 );
      const material = new THREE.MeshStandardMaterial( { roughness: 0 } );
      this.mesh = new THREE.Mesh( geometry, material );
      // this.scene.add( this.mesh );
    },
    animate() {
      requestAnimationFrame( this.animate );
      this.render();
      this.stats.update();
    },
    render() {
      const time = performance.now() * 0.001;
      this.mesh.position.y = Math.sin( time ) * 20 + 5;
      this.mesh.rotation.x = time * 0.5;
      this.mesh.rotation.z = time * 0.51;
      this.water.material.uniforms[ 'time' ].value += 1.0 / 60.0;
      this.renderer.render( this.scene, this.camera );
    }
},
mounted() {
  this.init();
	this.animate();
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
