import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={1}>
  <ambientLight intensity={1} />
  <directionalLight position={[0, 0, 1]} />
  <mesh castShadow receiveShadow scale={2.5}>
    <sphereGeometry args={[1, 32, 32]} /> 
    <meshBasicMaterial color="white" />
    <Decal 
      position={[0, 0, 1]}
      rotation={[2 * Math.PI, 0, 6.25]}
      map={decal}
      flatShading
    />
  </mesh>
</Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas