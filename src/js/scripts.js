import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import starsTexture from "../img/stars.jpg";

import jupiterTexture from "../img/jupiter.jpg";

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({
  color: 0x0000ff,
});

const postX = -100;
const pointsH1 = [];
pointsH1.push(new THREE.Vector3(postX, 20, 20));
pointsH1.push(new THREE.Vector3(postX, 14, 19));
pointsH1.push(new THREE.Vector3(postX, 5, 21));

pointsH1.push(new THREE.Vector3(postX, 14, 19));
pointsH1.push(new THREE.Vector3(postX, 14, 15));

pointsH1.push(new THREE.Vector3(postX, 20, 15));
pointsH1.push(new THREE.Vector3(postX, 14, 15.2));
pointsH1.push(new THREE.Vector3(postX, 4, 15));

const geometry = new THREE.BufferGeometry().setFromPoints(pointsH1);

const line = new THREE.Line(geometry, material);
scene.add(line);

const pointA = [];
pointA.push(new THREE.Vector3(postX, 5, 13));
pointA.push(new THREE.Vector3(postX, 13, 12));
pointA.push(new THREE.Vector3(postX, 20, 10));

pointA.push(new THREE.Vector3(postX, 12.6, 7));
pointA.push(new THREE.Vector3(postX, 5, 6));

pointA.push(new THREE.Vector3(postX, 12.6, 7));
pointA.push(new THREE.Vector3(postX, 13, 12));

const geometryA = new THREE.BufferGeometry().setFromPoints(pointA);

const lineA = new THREE.Line(geometryA, material);
scene.add(lineA);

const pointP = [];
pointP.push(new THREE.Vector3(postX, 4, 4));
pointP.push(new THREE.Vector3(postX, 20, 4));
pointP.push(new THREE.Vector3(postX, 18, 1));

pointP.push(new THREE.Vector3(postX, 12.6, 4));

const geometryP = new THREE.BufferGeometry().setFromPoints(pointP);

const lineP = new THREE.Line(geometryP, material);
scene.add(lineP);

// P2
const pointP2 = [];
pointP2.push(new THREE.Vector3(postX, 4, -1));
pointP2.push(new THREE.Vector3(postX, 20, -1));
pointP2.push(new THREE.Vector3(postX, 18, -5));

pointP2.push(new THREE.Vector3(postX, 12.6, -1));

const geometryP2 = new THREE.BufferGeometry().setFromPoints(pointP2);

const lineP2 = new THREE.Line(geometryP2, material);
scene.add(lineP2);

// Y

const pointY = [];
pointY.push(new THREE.Vector3(postX, 4, -6));
pointY.push(new THREE.Vector3(postX, 15, -7));
pointY.push(new THREE.Vector3(postX, 20, -8));
pointY.push(new THREE.Vector3(postX, 15, -7));

pointY.push(new THREE.Vector3(postX, 20, -6));

const geometryY = new THREE.BufferGeometry().setFromPoints(pointY);

const lineY = new THREE.Line(geometryY, material);
scene.add(lineY);

const pointB = [];
pointB.push(new THREE.Vector3(postX, -1, 15));
pointB.push(new THREE.Vector3(postX, -12, 15));
pointB.push(new THREE.Vector3(postX, -6, 11));
pointB.push(new THREE.Vector3(postX, -6, 15));
pointB.push(new THREE.Vector3(postX, -1, 10));

pointB.push(new THREE.Vector3(postX, -1, 15));

const geometryB = new THREE.BufferGeometry().setFromPoints(pointB);

const lineB = new THREE.Line(geometryB, material);
scene.add(lineB);

const pointI = [];
pointI.push(new THREE.Vector3(postX, -1, 8));
pointI.push(new THREE.Vector3(postX, -12, 8));

const geometryI = new THREE.BufferGeometry().setFromPoints(pointI);

const lineI = new THREE.Line(geometryI, material);
scene.add(lineI);

const pointR = [];
pointR.push(new THREE.Vector3(postX, -12, 6));
pointR.push(new THREE.Vector3(postX, -1, 6));
pointR.push(new THREE.Vector3(postX, -4.5, 3));
pointR.push(new THREE.Vector3(postX, -5, 6));
pointR.push(new THREE.Vector3(postX, -12, 2));

const geometryR = new THREE.BufferGeometry().setFromPoints(pointR);

const lineR = new THREE.Line(geometryR, material);
scene.add(lineR);

const pointT = [];
pointT.push(new THREE.Vector3(postX, -1, 1));
pointT.push(new THREE.Vector3(postX, -1, -3));
pointT.push(new THREE.Vector3(postX, -1, -1));
pointT.push(new THREE.Vector3(postX, -12, -1));

const geometryT = new THREE.BufferGeometry().setFromPoints(pointT);

const lineT = new THREE.Line(geometryT, material);
scene.add(lineT);

// H2

const pointsH2 = [];
pointsH2.push(new THREE.Vector3(postX, -1, -5));
pointsH2.push(new THREE.Vector3(postX, -12, -5));
pointsH2.push(new THREE.Vector3(postX, -7, -5));

pointsH2.push(new THREE.Vector3(postX, -7, -5));
pointsH2.push(new THREE.Vector3(postX, -7, -10));

pointsH2.push(new THREE.Vector3(postX, -1, -10));

pointsH2.push(new THREE.Vector3(postX, -12, -10));

const geometryH2 = new THREE.BufferGeometry().setFromPoints(pointsH2);

const lineH2 = new THREE.Line(geometryH2, material);
scene.add(lineH2);

const pointD = [];
pointD.push(new THREE.Vector3(postX, -1, -12));
pointD.push(new THREE.Vector3(postX, -12, -12));
pointD.push(new THREE.Vector3(postX, -7, -15));
pointD.push(new THREE.Vector3(postX, -1, -12));

const geometryD = new THREE.BufferGeometry().setFromPoints(pointD);

const lineD = new THREE.Line(geometryD, material);
scene.add(lineD);

const pointA2 = [];
pointA2.push(new THREE.Vector3(postX, -12, -16.5));
pointA2.push(new THREE.Vector3(postX, -1, -18));
pointA2.push(new THREE.Vector3(postX, -12, -20));

pointA2.push(new THREE.Vector3(postX, -6, -18.9));
pointA2.push(new THREE.Vector3(postX, -6, -16));

const geometryA2 = new THREE.BufferGeometry().setFromPoints(pointA2);

const lineA2 = new THREE.Line(geometryA2, material);
scene.add(lineA2);

const pointY2 = [];
pointY2.push(new THREE.Vector3(postX, -1, -20));
pointY2.push(new THREE.Vector3(postX, -5, -23));
pointY2.push(new THREE.Vector3(postX, -1, -26));
pointY2.push(new THREE.Vector3(postX, -5, -23));

pointY2.push(new THREE.Vector3(postX, -12, -21));

const geometryY2 = new THREE.BufferGeometry().setFromPoints(pointY2);

const lineY2 = new THREE.Line(geometryY2, material);
scene.add(lineY2);

const pointA3 = [];
pointA3.push(new THREE.Vector3(postX, -26, -0.5));
pointA3.push(new THREE.Vector3(postX, -15, -2));
pointA3.push(new THREE.Vector3(postX, -26, -3));

pointA3.push(new THREE.Vector3(postX, -20, -2.9));
pointA3.push(new THREE.Vector3(postX, -20, 0));

const geometryA3 = new THREE.BufferGeometry().setFromPoints(pointA3);

const lineA3 = new THREE.Line(geometryA3, material);
scene.add(lineA3);

const pointL = [];
pointL.push(new THREE.Vector3(postX, -15, -4.5));
pointL.push(new THREE.Vector3(postX, -26, -4.5));
pointL.push(new THREE.Vector3(postX, -26, -7));

const geometryL = new THREE.BufferGeometry().setFromPoints(pointL);

const lineL = new THREE.Line(geometryL, material);
scene.add(lineL);

const pointI1 = [];
pointI1.push(new THREE.Vector3(postX, -15, -8));
pointI1.push(new THREE.Vector3(postX, -26, -8));

const geometryI1 = new THREE.BufferGeometry().setFromPoints(pointI1);

const lineI1 = new THREE.Line(geometryI1, material);
scene.add(lineI1);

const pointDot = [];
pointDot.push(new THREE.Vector3(postX, -26.5, -8));
pointDot.push(new THREE.Vector3(postX, -26.8, -8));

const geometryDot = new THREE.BufferGeometry().setFromPoints(pointDot);

const lineDot = new THREE.Line(geometryDot, material);
scene.add(lineDot);

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
  BOTTOM: postX, // down arrow
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
