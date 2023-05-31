"use client"

import { Canvas } from "@react-three/fiber"

import Stage from "./stage"

export default function Scene() {
  // Everything defined in here are scenes properties

  return (
    <Canvas camera={{ fov: 100, near: 0.1, far: 1000 }}>
      <directionalLight intensity={0.2} position={[-1, 1, 0]} />
      <ambientLight intensity={1} />
      <Stage />
    </Canvas>
  )
}
