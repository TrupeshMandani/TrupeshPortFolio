"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
// @ts-expect-error: maath/random lacks type definitions, but it's safe to use
import * as random from "maath/random/dist/maath-random.esm";
import { Group } from "three"; // Import Group explicitly

const StarBackground = (props: JSX.IntrinsicElements["group"]) => {
  const ref = useRef<Group>(null); // Use Group from three
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#fff"
          size={0.0025}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarCanvas = () => (
  <div className="h-auto w-full fixed inset-0 z-[-1]">
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
      camera={{ position: [0, 0, 1] }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarCanvas;
