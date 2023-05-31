"use client"

import { OrbitControls, Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import Stage from "./stage"

export default function Scene() {
  // Everything defined in here will persist between route changes, only children are swapped

  return (
    <Canvas camera={{ fov: 100, near: 0.1, far: 1000 }}>
      <directionalLight intensity={0.2} position={[-1, 1, 0]} />
      <ambientLight intensity={1} />
      <Stage />
    </Canvas>
  )
}
