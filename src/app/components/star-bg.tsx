"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { TextureLoader } from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref: any = useRef();

  // Create random sphere of points
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(3000), { radius: 1.2 })
  );

  // Load a circular sprite texture for rounded particles
  const texture = useLoader(
    TextureLoader,
    "https://threejs.org/examples/textures/sprites/circle.png"
  );

  // Rotate the starfield slowly
  // useFrame((state, delta) => {
  //   ref.current.rotation.x -= delta / 20;
  //   ref.current.rotation.y -= delta / 15;
  // });
   useFrame((state, delta) => {
    ref.current.rotation.x += delta / 20; 
    ref.current.rotation.y = 0; 
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          map={texture}
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
