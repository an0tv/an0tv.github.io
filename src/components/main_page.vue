<script setup>
import * as THREE from 'three';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from '/node_modules/three/examples/jsm/renderers/CSS2DRenderer.js';
import { onBeforeUnmount } from 'vue';
//sizes of window for window optimization 
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const pageRenderer = new CSS2DRenderer();
var id;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const pointlight = new THREE.PointLight(0xffffff, 50);
const backlight = new THREE.PointLight(0xffffff, 15);
var renderer = new THREE.WebGLRenderer();
const raycaster = new THREE.Raycaster();
const clickcaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const mouse = new THREE.Vector2();
var floor = new THREE.Group();
var clickable = new THREE.Group();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
pointer.set(1, -1);
mouse.set(1, -1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
console.log('started');

//functions for both raycasting and selecting objects
function onPointerMove( event ) {
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1 ;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1  ;
    //console.log(pointer)
}

function onMouseClick( event ) {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1 ;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1  ;
    //console.log(pointer)
}

const ground = new THREE.BoxGeometry(100, 1, 100);
const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const path = new THREE.Mesh(ground, groundMaterial);
path.position.set(0, -3, 0);
path.receiveShadow = true;
floor.add(path);
//cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: 0xff0f00 } );
const cube = new THREE.Mesh( geometry, material );
cube.castShadow = true;
clickable.add(cube);

//lighting magic


//postion adjustments
pointlight.position.set(3, 5, 4);
pointlight.castShadow = true;
//backlight.position.set(-3, -1, -5);
camera.position.set(5,5,5);
pointlight.intensity = 100;
backlight.intensity = 20;
//scene additions
scene.add( floor);
scene.add( clickable );
scene.add(backlight)
scene.add(pointlight)
//scene.add(cube)
//scene.add(path)



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
window.addEventListener( 'pointermove', onPointerMove );
window.addEventListener( 'click' , onMouseClick);



//controls stuff
var controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;
controls.maxPolarAngle = 2.2 * Math.PI/4;
controls.minPolarAngle = Math.PI/4;

//reset function to make sure object is not highlighted
function reset() {
    if(clickable.children.length > 0){
        //console.log(scene.children[0]);
        clickable.children[0].material.opacity = 1.0;
    }
}

function hover() {
    
	// update the picking ray with the camera and pointer position
	raycaster.setFromCamera( pointer, camera );

    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects( clickable.children );

    if (intersects.length > 0) {
        const newMaterial = intersects[0].object.material.clone();
        newMaterial.transparent = true;
        newMaterial.opacity = 0.5;
        intersects[0].object.material = newMaterial;
        //console.log(intersects);
    }
    //console.log(intersects.length);
}

function select() {
    clickcaster.setFromCamera( mouse, camera );

    // calculate objects intersecting the picking ray
    const intersectsClick = clickcaster.intersectObjects( clickable.children );

    if (intersectsClick.length > 0) {
        const newMaterial = intersectsClick[0].object.material.clone();
        newMaterial.color.set(0x00ff00);
        intersectsClick[0].object.material = newMaterial;
        //console.log(intersectsClick);
    }
}





function animate() {
    backlight.position.copy(camera.position);
	requestAnimationFrame( animate );
    controls.update();
    reset();
    hover();
    select();
	renderer.render( scene, camera );
    //requestAnimationFrame(animate);
}
animate()

function dispose(){           
    while (scene.children.length){
        scene.remove(scene.children[0]);
    }
    geometry.dispose();
    material.dispose();
    renderer.domElement.addEventListener('dbclick', null, false);
    controls.dispose();
    renderer.dispose();
    console.log("Dispose!")
    
}




onBeforeUnmount(() => {
    console.log('deleted')
    id = requestAnimationFrame( animate );
    cancelAnimationFrame(id);
    console.log(id);
    dispose();
})
</script>