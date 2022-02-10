import React, { useState } from 'react'
import { usePlane } from '@react-three/cannon'

export default function Floor(props) {
    const [ref] = usePlane(() => ({
        position: [0, -2, 0],
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))
    return (
      <mesh ref={ref} receiveShadow={true}>
        <planeGeometry args={[300, 300]} />
        <meshStandardMaterial color='#ffffff' />
      </mesh>
    )
}