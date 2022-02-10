import React, { useState, useRef } from 'react'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

export default function CameraControl() {
    let cameraPosition = [5, 7, 9];
    const ref = useRef()
    return (
      <>
        <PerspectiveCamera
            ref={ref} makeDefault 
            aspect={1200 / 600}
            radius={(1200 + 600) / 4}
            fov={45}
            position={cameraPosition}
        />
        <OrbitControls />
      </>
    )
}