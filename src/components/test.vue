<script setup>
import * as THREE from 'three';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';

//sizes of window for window optimization 
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const pointlight = new THREE.PointLight(0xffffff, 50)
const backlight = new THREE.PointLight(0xffffff, 15);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0xff0f00 } );
const cube = new THREE.Mesh( geometry, material );
cube.castShadow = true;
scene.add( cube );
pointlight.position.set(3, 5, 4);
backlight.position.set(-3, -1, -5);
scene.add(backlight)
scene.add(pointlight)
camera.position.z = 5;

window.addEventListener('resize', () => {
    //update size
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    //update camera
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

const controls = new OrbitControls( camera, renderer.domElement );

function animate() {
	requestAnimationFrame( animate );
    controls.update();
	renderer.render( scene, camera );
}

animate()
</script>