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
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
pointer.set(1, -1);
function onPointerMove( event ) {
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1 ;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1  ;
    //console.log(pointer)
}

//cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: 0xff0f00 } );
const cube = new THREE.Mesh( geometry, material );
cube.castShadow = true;

//lighting magic


//postion adjustments
pointlight.position.set(3, 5, 4);
backlight.position.set(-3, -1, -5);
camera.position.set(5,5,5);
//scene additions
scene.add( cube );
scene.add(backlight)
scene.add(pointlight)




//event listeners 
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



//controls stuff
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;
controls.maxPolarAngle = 3 * Math.PI/4;
controls.minPolarAngle = Math.PI/4;

function reset() {
    if(scene.children.length > 0){
        scene.children[0].material.opacity = 1.0;
    }
}

function hover() {
    
	// update the picking ray with the camera and pointer position
	raycaster.setFromCamera( pointer, camera );

    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects( scene.children );

    if (intersects.length > 0) {
        const newMaterial = intersects[0].object.material.clone();
        newMaterial.transparent = true;
        newMaterial.opacity = 0.5;
        intersects[0].object.material = newMaterial;
        //console.log(intersects);
    }
    //console.log(intersects.length);
}

window.addEventListener( 'pointermove', onPointerMove );

function animate() {
    pointlight.position.copy(camera.position);
	requestAnimationFrame( animate );
    controls.update();
    reset();
    hover();
	renderer.render( scene, camera );
}

animate()
</script>