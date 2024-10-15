import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Octopus from "./Octopus";
const Scene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 130,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
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
