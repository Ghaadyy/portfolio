import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sphere,
} from "@react-three/drei";

export default function CustomSphere() {
  return (
    // <mesh>
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#81F900"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={1}
      />
      {/* <meshDepthMaterial attach="material" color="blue" /> */}
    </Sphere>
    // </mesh>
  );
}
