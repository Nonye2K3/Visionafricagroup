'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import { Mesh, BufferGeometry, Vector3 } from 'three'
import { useTheme } from '../ThemeProvider'
import * as THREE from 'three'

// Layer 1: Large abstract triangular mesh (semi-transparent), floating slowly
function TriangularMesh() {
  const meshRef = useRef<Mesh>(null)
  const { theme } = useTheme()
  
  const geometry = useMemo(() => {
    const geo = new BufferGeometry()
    const vertices: number[] = []
    const indices: number[] = []
    
    // Create a large triangular mesh pattern
    const size = 20
    const divisions = 8
    const step = size / divisions
    
    for (let i = 0; i <= divisions; i++) {
      for (let j = 0; j <= divisions; j++) {
        const x = (i * step) - size / 2
        const y = (j * step) - size / 2
        const z = Math.sin(i * 0.5) * Math.cos(j * 0.5) * 2
        vertices.push(x, y, z)
      }
    }
    
    for (let i = 0; i < divisions; i++) {
      for (let j = 0; j < divisions; j++) {
        const a = i * (divisions + 1) + j
        const b = a + 1
        const c = a + divisions + 1
        const d = c + 1
        
        indices.push(a, b, c)
        indices.push(b, d, c)
      }
    }
    
    geo.setIndex(indices)
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geo.computeVertexNormals()
    
    return geo
  }, [])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5
    }
  })
  
  const color = theme === 'dark' ? '#3399FF' : '#0055A5'
  
  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0, -15]}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        wireframe
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

// Layer 2: Mid-size 3D icon shapes (cubes, spheres) swirling subtly
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null)
  const { theme } = useTheme()
  
  const shapes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      type: i % 2 === 0 ? 'cube' : 'sphere',
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        -10 + Math.random() * 5,
      ] as [number, number, number],
      scale: 0.5 + Math.random() * 0.8,
      speed: 0.5 + Math.random() * 0.5,
    }))
  }, [])
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03
      groupRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime * shapes[i].speed) * 0.002
        child.rotation.x += 0.003
        child.rotation.z += 0.002
      })
    }
  })
  
  const primaryColor = theme === 'dark' ? '#3399FF' : '#0055A5'
  const accentColor = theme === 'dark' ? '#FFD960' : '#FFB600'
  
  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position} scale={shape.scale}>
          {shape.type === 'cube' ? (
            <boxGeometry args={[1, 1, 1]} />
          ) : (
            <sphereGeometry args={[0.6, 16, 16]} />
          )}
          <meshStandardMaterial
            color={i % 3 === 0 ? accentColor : primaryColor}
            transparent
            opacity={0.3}
            metalness={0.5}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

// Layer 3: Small particle or light-dot field in the far background
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const { theme } = useTheme()
  
  const particlesGeometry = useMemo(() => {
    const geometry = new BufferGeometry()
    const particleCount = 300
    const positions = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 40
      positions[i + 1] = (Math.random() - 0.5) * 30
      positions[i + 2] = -20 - Math.random() * 10
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [])
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01
      
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime + i) * 0.002
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })
  
  const color = theme === 'dark' ? '#FFD960' : '#FFB600'
  
  return (
    <points ref={pointsRef} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.1}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

interface LayeredBackground3DProps {
  variant?: 'default' | 'shop' | 'product'
}

export function LayeredBackground3D({ variant = 'default' }: LayeredBackground3DProps) {
  return (
    <div className="fixed inset-0 -z-10 opacity-40 dark:opacity-30 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        
        {/* Three distinct layers with different motion speeds for parallax */}
        <TriangularMesh />
        <FloatingShapes />
        <ParticleField />
      </Canvas>
    </div>
  )
}
