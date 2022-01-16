// import { lazy } from "react";
import {
  MeshDistortMaterial,
  Sphere,
  MeshReflectorMaterial,
} from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
export default function CustomSphere() {
  const TextLoader = new THREE.TextureLoader();
  const colorMap = TextLoader.load("/sphere.png");
  colorMap.wrapS = colorMap.wrapT = THREE.MirroredRepeatWrapping;
  return (
    <Sphere visible args={[1, 200, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#FFD945"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.75}
        map={colorMap}
      />
    </Sphere>
  );
}
