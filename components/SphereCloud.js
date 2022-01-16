/* eslint-disable react/no-children-prop */
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import randomWord from "random-words";

const entries = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "React Native",
  "Flutter",
  "Python",
  "MongoDB",
  "NodeJS",
  "ExpressJS",
  "Git",
  "VS Code",
  "Adobe XD",
  "Tailwind CSS",
  "Firebase",
  "NextJS",
];

const coord = [
  { phi: 10, theta: 2.34 },
  { phi: 3, theta: 2.49 },
  { phi: 1.23, theta: 0.1 },
  { phi: 12, theta: 24 },
  { phi: 450, theta: 250 },
  { phi: 61, theta: 34 },
  { phi: 81, theta: 64 },
  { phi: 200, theta: 103 },
  { phi: 0, theta: 20 },
  { phi: 400, theta: 10 },
  { phi: 426, theta: 849 },
  { phi: 859, theta: 100 },
  { phi: 152, theta: 526 },
  { phi: 400, theta: 0 },
  { phi: 931, theta: 573 },
  { phi: 545, theta: 2432 },
];

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/fonts/FiraCode/FiraCode-Regular.ttf",
    fontSize: 2,
    // letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#FFD945" : "white"),
      1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

export default function Cloud({ count = 4, radius = 12 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    spherical.radius = radius;
    // const phiSpan = Math.PI / (count + 1);
    // const thetaSpan = (Math.PI * 2) / count;
    let counter = 0;
    for (let i = 1; i < count + 1; i++) {
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6

      for (let j = 0; j < count; j++) {
        spherical.phi = coord[counter].phi; // Phi is between 0 - PI
        spherical.theta = coord[counter].theta; // Phi is between 0 - 2 PI
        var vec3 = new THREE.Vector3().setFromSpherical(spherical);
        temp.push([vec3, entries[counter]]);
        counter++;
      }
    }

    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}
