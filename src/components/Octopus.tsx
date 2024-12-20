/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 octopus.gltf 
Author: Zainal Abd. Kahar (https://sketchfab.com/zsuperxtreme)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/octopus-fa048c4ac32a4d4988214a5e3fe70a86
Title: Octopus
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Color_0: THREE.Mesh;
    Mouth_Color_0: THREE.Mesh;
    Eyes_Color_0: THREE.Mesh;
    Iris_Color_0: THREE.Mesh;
    Plane_Color_0: THREE.Mesh;
    Plane001_Color_0: THREE.Mesh;
    Plane002_Color_0: THREE.Mesh;
    Plane003_Color_0: THREE.Mesh;
    Plane004_Color_0: THREE.Mesh;
    Plane005_Color_0: THREE.Mesh;
  };
  materials: {
    Color: THREE.MeshStandardMaterial;
  };
};

type ModelProps = JSX.IntrinsicElements["group"];

export default function Octopus(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    "/model/octopus.gltf"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere_Color_0.geometry}
        material={materials.Color}
        position={[0, 231.474, 6.24]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={140.754}
      />
      <mesh
        geometry={nodes.Mouth_Color_0.geometry}
        material={materials.Color}
        position={[0, 193.086, 156.37]}
        rotation={[-2.857, 0, -Math.PI]}
        scale={[-4.96, 4.96, 6.644]}
      />
      <mesh
        geometry={nodes.Eyes_Color_0.geometry}
        material={materials.Color}
        position={[0, 240.885, 135.691]}
        rotation={[-1.679, 0, 0]}
        scale={[40.677, 24.659, 49.608]}
      />
      <mesh
        geometry={nodes.Iris_Color_0.geometry}
        material={materials.Color}
        position={[0, 240.885, 158.506]}
        rotation={[-1.679, 0, 0]}
        scale={[12.905, 7.823, 15.739]}
      />
      <mesh
        geometry={nodes.Plane_Color_0.geometry}
        material={materials.Color}
        position={[5.293, 248.413, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane001_Color_0.geometry}
        material={materials.Color}
        position={[5.293, 248.413, 0]}
        rotation={[0, -0.919, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane002_Color_0.geometry}
        material={materials.Color}
        position={[5.293, 248.413, 0]}
        rotation={[Math.PI, -0.738, Math.PI]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane003_Color_0.geometry}
        material={materials.Color}
        position={[5.293, 248.413, 0]}
        rotation={[Math.PI, -0.02, Math.PI]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane004_Color_0.geometry}
        material={materials.Color}
        position={[5.293, 248.413, 0]}
        rotation={[Math.PI, 0.773, -Math.PI]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane005_Color_0.geometry}
        material={materials.Color}
        position={[5.293, 248.413, 0]}
        rotation={[0, 0.985, 0]}
        scale={100}
      />
    </group>
  );
}