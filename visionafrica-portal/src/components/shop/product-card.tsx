'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import type { Mesh } from 'three';

type ProductCardProps = {
  name: string;
  description: string;
  tone: string;
};

function ShowcaseBlock({ tone }: { tone: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.9;
    ref.current.rotation.x += delta * 0.35;
  });

  return (
    <Float floatIntensity={0.8} rotationIntensity={1} speed={2}>
      <RoundedBox ref={ref} args={[2.2, 1.2, 1.4]} radius={0.22} smoothness={5}>
        <MeshDistortMaterial
          color={tone}
          emissive={tone}
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.45}
          speed={2.5}
          distort={0.28}
        />
      </RoundedBox>
    </Float>
  );
}

export function ProductCard({ name, description, tone }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/60 p-6 shadow-xl shadow-slate-900/5 ring-1 ring-black/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/50 dark:ring-white/10"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-900/60 dark:border-white/10 dark:bg-slate-900/70">
        <Canvas camera={{ position: [0, 0, 5.4], fov: 50 }} dpr={[1, 1.8]}>
          <color attach="background" args={['transparent']} />
          <ambientLight intensity={0.9} />
          <directionalLight position={[6, 5, 4]} intensity={0.6} />
          <directionalLight position={[-6, -5, -4]} intensity={0.3} />
          <ShowcaseBlock tone={tone} />
        </Canvas>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-60" />
      </div>
      <div className="mt-5 space-y-2">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{name}</h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </motion.div>
  );
}
