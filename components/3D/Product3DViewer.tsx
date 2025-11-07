'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, Box, Sphere } from '@react-three/drei'
import { Product } from '@/lib/products'
import { useTheme } from '../ThemeProvider'

interface Product3DViewerProps {
  product: Product
}

function Product3DModel() {
  const { theme } = useTheme()
  const primaryColor = theme === 'dark' ? '#0ea5e9' : '#38bdf8'

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* Main Product Box */}
        <Box args={[2, 2, 2]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color={primaryColor}
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Box>
        
        {/* Accent Spheres */}
        <Sphere args={[0.5, 32, 32]} position={[1.5, 1.5, 0]}>
          <meshStandardMaterial color="#d946ef" metalness={0.8} roughness={0.2} />
        </Sphere>
        
        <Sphere args={[0.3, 32, 32]} position={[-1.5, -1.5, 0.5]}>
          <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
        </Sphere>
      </group>
    </Float>
  )
}

export function Product3DViewer({ product }: Product3DViewerProps) {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#d946ef" />
        
        <Product3DModel />
        
        {/* Environment */}
        <mesh position={[0, 0, -5]} scale={[20, 20, 1]}>
          <planeGeometry />
          <meshStandardMaterial color="#1e293b" opacity={0.1} transparent />
        </mesh>
      </Canvas>
      
      {/* Overlay Info */}
      <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-lg">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  )
}
