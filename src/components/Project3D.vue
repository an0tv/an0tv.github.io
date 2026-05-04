<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const props = defineProps({
    seed: { type: Number, default: 0 },
    model: { type: String, default: null },
    autoplay: { type: Boolean, default: false },
    k: { type: Number, default: 0.2 }, // spring stiffness
    b: { type: Number, default: 0.5 }, // damping coefficient
});

const container = ref(null);
const isHovered = ref(false);

let scene, camera, renderer, object;
let animationId = null;
let rotX = 0,
    rotY = 0;
let velX = 0,
    velY = 0;
const spinSpeedX = 0.005 * (Math.random() < 0.5 ? 1 : -1),
    spinSpeedY = 0.01 * (Math.random() < 0.5 ? 1 : -1);

const geometries = [
    () => new THREE.IcosahedronGeometry(1, 0),
    () => new THREE.TorusKnotGeometry(0.8, 0.3, 48, 8),
    () => new THREE.OctahedronGeometry(1, 0),
    () => new THREE.TorusGeometry(0.8, 0.3, 16, 32),
    () => new THREE.TetrahedronGeometry(1, 0),
];

const colors = [0x7c6ff0, 0x4f8cff, 0xc084fc, 0x6ee7b7, 0xf472b6];

function addLights(scene) {
    // Key light — from the camera's direction (front-top)
    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(0, 1.5, 5);
    scene.add(key);

    // Fill light from the side
    const fill = new THREE.DirectionalLight(0x8888ff, 1.0);
    fill.position.set(-3, 1, 2);
    scene.add(fill);

    // Subtle back rim
    const rim = new THREE.DirectionalLight(0xffffff, 0.3);
    rim.position.set(0, -1, -4);
    scene.add(rim);

    // Hemisphere for soft natural ambient
    const hemi = new THREE.HemisphereLight(0x8888ff, 0x444422, 0.8);
    scene.add(hemi);
}

onMounted(() => {
    if (!container.value) return;

    const el = container.value;
    const size = el.clientWidth || 180;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 4.5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    addLights(scene);

    if (props.model) {
        const modelPath = props.model.startsWith("/")
            ? props.model
            : `/assets/${props.model}`;
        console.log("Loading GLB from:", modelPath);

        // Test fetch first
        fetch(modelPath)
            .then((r) => {
                console.log("Fetch status:", r.status, r.ok);
                return r.arrayBuffer();
            })
            .then((buf) => {
                console.log("GLB bytes:", buf.byteLength);
            })
            .catch((e) => console.error("Fetch failed:", e));

        const loader = new GLTFLoader();
        loader.load(
            modelPath,
            (gltf) => {
                object = gltf.scene;
                console.log(
                    "GLB loaded, scene children:",
                    object.children.length,
                );
                console.log("GLB animations:", gltf.animations?.length);
                const box = new THREE.Box3().setFromObject(object);
                const boxSize = box.getSize(new THREE.Vector3()).length();
                if (boxSize > 0.001) {
                    const scale = 2.5 / boxSize;
                    object.scale.setScalar(scale);
                }
                object.position.set(0, -0.2, 0);
                scene.add(object);
            },
            (xhr) => {
                if (xhr.total) {
                    console.log(
                        `GLB: ${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`,
                    );
                }
            },
            (err) => {
                console.error("GLB load error:", err);
                if (err instanceof ErrorEvent) {
                    console.error("Message:", err.message);
                } else if (err instanceof ProgressEvent) {
                    console.error("Status:", err.target?.status);
                }
                console.error("Stack:", new Error().stack);
                fallbackShape();
            },
        );
    } else {
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
            if (props.autoplay) {
                // Always spin
                rotX += spinSpeedX;
                rotY += spinSpeedY;
                object.rotation.x = rotX;
                object.rotation.y = rotY;
            } else if (isHovered.value) {
                // Spin while hovered
                rotX += spinSpeedX;
                rotY += spinSpeedY;
                velX = 0;
                velY = 0;
                object.rotation.x = rotX;
                object.rotation.y = rotY;
            } else {
                // Spring back toward rest
                // acceleration = -k * position - b * velocity
                const ax = -props.k * rotX - props.b * velX;
                const ay = -props.k * rotY - props.b * velY;
                velX += ax;
                velY += ay;
                rotX += velX;
                rotY += velY;
                // Snap when both position and velocity are near zero
                if (Math.abs(rotX) < 0.0001 && Math.abs(velX) < 0.0001) {
                    rotX = 0;
                    velX = 0;
                }
                if (Math.abs(rotY) < 0.0001 && Math.abs(velY) < 0.0001) {
                    rotY = 0;
                    velY = 0;
                }
                object.rotation.x = rotX;
                object.rotation.y = rotY;
            }
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
    <div
        ref="container"
        class="three-canvas"
        @mouseenter="
            isHovered = true;
            velX = 0;
            velY = 0;
        "
        @mouseleave="isHovered = false"
    ></div>
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
