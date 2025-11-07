'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { useTheme } from '../ThemeProvider'

interface Background3DProps {
  variant?: 'default' | 'shop' | 'product'
}

function AnimatedSphere({ position, color, speed }: any) {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function Scene({ variant = 'default' }: Background3DProps) {
  const { theme } = useTheme()
  
  const lightColor = theme === 'dark' ? '#0ea5e9' : '#38bdf8'
  const accentColor = theme === 'dark' ? '#d946ef' : '#e879f9'
  const tertiaryColor = theme === 'dark' ? '#8b5cf6' : '#a78bfa'

  const sphereConfigs = variant === 'shop' ? [
    { position: [-3, 2, -5], color: lightColor, speed: 1.5 },
    { position: [3, -2, -8], color: accentColor, speed: 2 },
    { position: [0, 3, -6], color: tertiaryColor, speed: 1.8 },
    { position: [-2, -3, -7], color: lightColor, speed: 1.3 },
  ] : variant === 'product' ? [
    { position: [0, 0, -5], color: lightColor, speed: 1 },
    { position: [4, 2, -8], color: accentColor, speed: 1.5 },
    { position: [-4, -2, -6], color: tertiaryColor, speed: 1.8 },
  ] : [
    { position: [-4, 2, -8], color: lightColor, speed: 1.5 },
    { position: [4, -1, -6], color: accentColor, speed: 2 },
    { position: [0, 3, -10], color: tertiaryColor, speed: 1.8 },
  ]

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color={lightColor} />
      
      {sphereConfigs.map((config, index) => (
        <AnimatedSphere key={index} {...config} />
      ))}
    </>
  )
}

export function Background3D({ variant = 'default' }: Background3DProps) {
  return (
    <div className="fixed inset-0 -z-10 opacity-30 dark:opacity-20">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Scene variant={variant} />
      </Canvas>
    </div>
  )
}
