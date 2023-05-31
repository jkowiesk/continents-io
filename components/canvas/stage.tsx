"use client"

import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function Stage() {
  // Load model
  const ref = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF("/models/earth/scene.gltf") as any

  // rotate earth every frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005 // Adjust the rotation speed as needed
      ref.current.rotation.x += 0.0002
    }
  })

  return (
    <group ref={ref}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
      />
    </group>
  )
}
