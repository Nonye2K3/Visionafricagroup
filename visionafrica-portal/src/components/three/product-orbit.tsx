'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, RoundedBox } from '@react-three/drei';
import type { Mesh } from 'three';

function RotatingCore() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.7;
    ref.current.rotation.x += delta * 0.3;
  });

  return (
    <Float floatIntensity={0.6} rotationIntensity={1.2} speed={2.2}>
      <RoundedBox args={[2.6, 1.4, 1.8]} radius={0.5} smoothness={4} ref={ref}>
        <MeshDistortMaterial
          speed={2}
          distort={0.38}
          color="#6366f1"
          emissive="#4338ca"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.4}
        />
      </RoundedBox>
    </Float>
  );
}

function HaloRing({ radius, color }: { radius: number; color: string }) {
  return (
    <mesh rotation={[-Math.PI / 2.4, 0.4, Math.PI / 6]} position={[0, -0.1, 0]}>
      <torusGeometry args={[radius, 0.04, 64, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.55} />
    </mesh>
  );
}

export function ProductOrbit() {
  return (
    <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-indigo-500/20 ring-1 ring-black/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/40 dark:ring-white/5">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.8]}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[6, 6, 4]} intensity={0.7} />
        <directionalLight position={[-6, -4, -4]} intensity={0.3} />

        <RotatingCore />

        <Float floatIntensity={0.2} rotationIntensity={0.6} speed={1.4}>
          <HaloRing radius={2.2} color="#38bdf8" />
          <HaloRing radius={2.6} color="#f472b6" />
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent dark:from-slate-900/60" />
    </div>
  );
}
