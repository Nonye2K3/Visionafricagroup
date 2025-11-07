'use client';

import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Color, Vector3 } from 'three';

type LayerConfig = {
  position: [number, number, number];
  color: string;
  distort?: number;
  speed?: number;
  scale?: number;
};

const layers: LayerConfig[] = [
  { position: [-6, 2.5, -8], color: '#6366f1', distort: 0.4, speed: 2.2, scale: 3.6 },
  { position: [5.5, -1, -7], color: '#22d3ee', distort: 0.32, speed: 2.5, scale: 2.8 },
  { position: [-1, -3.5, -6], color: '#fb7185', distort: 0.24, speed: 1.8, scale: 4.2 },
];

function LayeredOrb({ config }: { config: LayerConfig }) {
  const color = useMemo(() => new Color(config.color), [config.color]);

  return (
    <Float
      speed={config.speed ?? 2}
      rotationIntensity={1.5}
      floatIntensity={1.2}
      position={new Vector3(...config.position)}
    >
      <mesh scale={config.scale ?? 3}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial
          color={color}
          emissive={color.clone().multiplyScalar(0.35)}
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.2}
          speed={config.speed ?? 2}
          distort={config.distort ?? 0.3}
        />
      </mesh>
    </Float>
  );
}

export function LayeredBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.28),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.45),transparent_45%)] dark:bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.75),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-white/30 to-transparent mix-blend-screen dark:from-slate-950/60 dark:via-slate-950/30 dark:to-transparent" />

      <Suspense fallback={null}>
        <Canvas
          className="h-full w-full"
          camera={{ position: [0, 0, 14], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <color attach="background" args={['transparent']} />
          <ambientLight intensity={0.8} />
          <directionalLight position={[6, 8, 4]} intensity={0.7} />
          <directionalLight position={[-8, -6, -4]} intensity={0.3} />

          {layers.map((layer) => (
            <LayeredOrb key={layer.color} config={layer} />
          ))}

          <mesh rotation={[-0.6, 0.25, -0.2]} position={[0, -9, -4]} scale={[20, 12, 1]}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <meshStandardMaterial
              color="#0f172a"
              transparent
              opacity={0.25}
              metalness={0.1}
              roughness={0.8}
            />
          </mesh>
        </Canvas>
      </Suspense>

      <div className="absolute inset-x-8 top-24 mx-auto h-[120px] max-w-5xl rounded-full bg-gradient-to-r from-indigo-400/20 via-emerald-200/10 to-pink-300/20 blur-3xl dark:from-indigo-500/25 dark:via-sky-500/20 dark:to-rose-400/15" />
    </div>
  );
}
