"use client"

import { OrbitControls, Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import Stage from "./stage"

export default function Scene() {
  // Everything defined in here are scenes properties

  return (
    <Canvas
      camera={{
        fov: 100,
        near: 0.1,
        far: 1000,
        position: [0, 0, -1.3],
      }}
    >
      <directionalLight intensity={0.2} position={[-1, 1, 0]} />
      <ambientLight intensity={1} />
      <Stage />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Preload all />
    </Canvas>
  )
}
