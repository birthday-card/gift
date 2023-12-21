import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import starsTexture from "../img/stars.jpg";

import jupiterTexture from "../img/jupiter.jpg";

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const points = [];
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

points.push(new THREE.Vector3(10, 20, -25));
points.push(new THREE.Vector3(10, 16, -23));
points.push(new THREE.Vector3(10, 16, -20));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);
scene.add(line);

const camera = new THREE.PerspectiveCamera(
  20,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);

const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(-90, 15, 0);
orbit.update();
// orbit.maxPolarAngle = Math.PI / 2; // Limit angle of visibility
orbit.keys = {
  LEFT: 17, //left arrow
  UP: 18, // up arrow
  RIGHT: 19, // right arrow
  BOTTOM: 10, // down arrow
};
orbit.maxAzimuthAngle = Math.PI / 2;

const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
scene.add(ambientLight);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
]);

const textureLoader = new THREE.TextureLoader();

// const sunGeo = new THREE.SphereGeometry(16, 30, 30);
// const sunMat = new THREE.MeshBasicMaterial({
//   map: textureLoader.load(sunTexture),
// });
// const sun = new THREE.Mesh(sunGeo, sunMat);
// scene.add(sun);

function createPlanete(size, texture, position, ring) {
  const geo = new THREE.SphereGeometry(size, 30, 30);
  const mat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(texture),
  });
  const mesh = new THREE.Mesh(geo, mat);
  const obj = new THREE.Object3D();
  obj.add(mesh);
  if (ring) {
    const ringGeo = new THREE.RingGeometry(
      ring.innerRadius,
      ring.outerRadius,
      32
    );
    const ringMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load(ring.texture),
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    obj.add(ringMesh);
    ringMesh.position.x = position;
    ringMesh.rotation.x = -0.5 * Math.PI;
  }
  scene.add(obj);
  mesh.position.x = position;
  return { mesh, obj };
}

function createStar(positionX, positionY, positionZ) {
  const geo = new THREE.SphereGeometry(size, 30, 30);
  const mat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(texture),
  });
}

// TODO
const jupiter = createPlanete(12, jupiterTexture, 30);

const pointLight = new THREE.PointLight(0xffffff, 1.6, 300);
scene.add(pointLight);

function animate() {
  //Self-rotation

  jupiter.mesh.rotateY(0.02);

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
