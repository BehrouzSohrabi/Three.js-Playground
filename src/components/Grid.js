import React, { useRef, useState } from 'react'

export default function Grid(props) {
    const ref = useRef()
    return (
      <gridHelper position={[0, -2, 0]} ref={ref} {...props} args={[100, 100, '#ffffff', '#000000']}>
        <meshStandardMaterial opacity={0.1} transparent={true} />
      </gridHelper>
    )
}