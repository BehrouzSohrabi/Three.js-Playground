import React, { useEffect } from "react";
import "./styles.css";
import * as THREE from "three";

export default function App() {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(
    500,
    window.innerWidth / window.innerHeight,
    1,
    10
  );
  let renderer = new THREE.WebGLRenderer();
  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshStandardMaterial({
    color: new THREE.Color().setHSL(Math.random(), 1, 0.75),
    roughness: 0.5,
    metalness: 0,
    flatShading: true
  });
  let cube = new THREE.Mesh(geometry, material);
  const planeGeometry = new THREE.PlaneGeometry(999, 999);

  planeGeometry.rotateX(-Math.PI / 2);
  let plane = new THREE.Mesh(planeGeometry, material);
  plane.position.y = -5;
  plane.receiveShadow = true;
  cube.receiveShadow = true;
  cube.castShadow = true;

  useEffect(() => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;

    camera.position.z = 5;
    scene.userData.camera = camera;

    const light = new THREE.SpotLight(0xffffff, 0.5);
    light.position.set(20, 40, 20);
    light.angle = Math.PI * 0.2;
    light.castShadow = true;
    scene.add(light);

    scene.add(cube);
    scene.add(plane);

    let animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
