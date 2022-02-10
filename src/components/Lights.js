import React, { useState } from 'react'

export default function Lights(props) {
    return (
      <>
        <ambientLight intensity={0.4} />
        <pointLight position={[-10, 0, -20]} color="red" intensity={2.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <color attach="background" args={['#ffffff']} />
        <fog attach="fog" args={['#ffffff', 15, 30]} />
      </>
    )
}