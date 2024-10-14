import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Octopus from "./Octopus";
const Scene = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Octopus />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
