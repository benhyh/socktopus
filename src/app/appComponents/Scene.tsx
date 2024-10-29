// i just want to keep my github streak ngl
// shameless github streak

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Octopus from "./Octopus";
const Scene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 1, -5],
        fov: 130,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={2} />
        <Octopus
          position={[0, -2, 0]}
          scale={0.015}
          rotation={[0, Math.PI, 0]}
        />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
