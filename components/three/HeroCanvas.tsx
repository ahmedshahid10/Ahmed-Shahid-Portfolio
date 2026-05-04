"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.8 + Math.random() * 3.2;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.04 + pointer.x * 0.06;
    ref.current.rotation.x =
      Math.sin(clock.getElapsedTime() * 0.025) * 0.1 + pointer.y * 0.04;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.022}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function WireframeCore() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.1 + pointer.y * 0.09;
    ref.current.rotation.y = clock.getElapsedTime() * 0.16 + pointer.x * 0.09;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.05, 1]} />
      <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

function OuterRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 4 + clock.getElapsedTime() * 0.06;
    ref.current.rotation.z = clock.getElapsedTime() * 0.035;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.2, 0.004, 8, 120]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.18} />
    </mesh>
  );
}

function InnerRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.PI / 3 + clock.getElapsedTime() * 0.05;
    ref.current.rotation.x = clock.getElapsedTime() * 0.04;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.55, 0.003, 8, 100]} />
      <meshBasicMaterial color="#60a5fa" transparent opacity={0.12} />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <ParticleCloud />
      <WireframeCore />
      <OuterRing />
      <InnerRing />
    </Canvas>
  );
}
