import React, { useState } from 'react'
import { useBox} from '@react-three/cannon'

export default function Cube(props) {
    const [ref] = useBox(() => ({ mass: 1, ...props }))
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    return (
      <mesh
        ref={ref}
        castShadow={true}
        scale={clicked ? .5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial  roughness={0} metalness={0.1} color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
}