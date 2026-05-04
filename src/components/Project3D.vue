<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const props = defineProps({
    seed: { type: Number, default: 0 },
    model: { type: String, default: null },
});

const container = ref(null);
let scene, camera, renderer, object;
let animationId = null;

const geometries = [
    () => new THREE.IcosahedronGeometry(1, 0),
    () => new THREE.TorusKnotGeometry(0.8, 0.3, 48, 8),
    () => new THREE.OctahedronGeometry(1, 0),
    () => new THREE.TorusGeometry(0.8, 0.3, 16, 32),
    () => new THREE.TetrahedronGeometry(1, 0),
];

const colors = [0x7c6ff0, 0x4f8cff, 0xc084fc, 0x6ee7b7, 0xf472b6];

function addLights(scene) {
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(2, 2, 4);
    scene.add(light);
    const rim = new THREE.DirectionalLight(0xa898ff, 0.4);
    rim.position.set(-2, -1, -2);
    scene.add(rim);
    const ambient = new THREE.AmbientLight(0x4488ff, 0.2);
    scene.add(ambient);
}

onMounted(() => {
    if (!container.value) return;

    const el = container.value;
    const size = el.clientWidth || 180;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 3.5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    addLights(scene);

    if (props.model) {
        // ── Load a custom .glb model ────────────
        const loader = new GLTFLoader();
        loader.load(
            props.model,
            (gltf) => {
                object = gltf.scene;
                // Center and scale the model to fit
                const box = new THREE.Box3().setFromObject(object);
                const size = box.getSize(new THREE.Vector3()).length();
                const scale = 2.5 / size;
                object.scale.setScalar(scale);
                object.position.set(0, -0.2, 0);
                scene.add(object);
            },
            undefined,
            () => {
                // On error, fall back to procedural shape
                fallbackShape();
            },
        );
    } else {
        // ── Procedural shape ────────────────────
        fallbackShape();
    }

    function fallbackShape() {
        const geometry = geometries[props.seed % geometries.length]();
        const material = new THREE.MeshPhysicalMaterial({
            color: colors[props.seed % colors.length],
            metalness: 0.3,
            roughness: 0.4,
            flatShading: true,
            clearcoat: 0.1,
        });
        object = new THREE.Mesh(geometry, material);
        scene.add(object);
    }

    function animate() {
        animationId = requestAnimationFrame(animate);
        if (object) {
            object.rotation.x += 0.005;
            object.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
    }
    animate();
});

onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId);
    if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
    }
    if (scene) {
        scene.traverse((o) => {
            if (o.geometry) o.geometry.dispose();
            if (o.material) o.material.dispose();
        });
    }
});
</script>

<template>
    <div ref="container" class="three-canvas"></div>
</template>

<style scoped>
.three-canvas {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.three-canvas :deep(canvas) {
    display: block;
    width: 100% !important;
    height: 100% !important;
}
</style>
