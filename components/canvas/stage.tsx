"use client"

// Description: This is main stage component. It contains all the elements of the scene. It stores 3d molecules and lights.
import { MutableRefObject, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function Stage() {
  // remove from atoms symbol property
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
    <group ref={ref} position={[0.2, -0.2, 3.8]}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
      />
    </group>
  )
}
