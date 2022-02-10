import React, { useRef, useEffect, useContext } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { OrbitControls } from "@react-three/drei"
import { Context } from '../states';
import Cube from "./Cube"


export default function Cubes(){

  const { cubesToDrop, setCubesToDrop } = useContext(Context);
  const { userName } = useContext(Context);

  console.log(userName)    

  useEffect(() => {
    if(cubesToDrop.length == 0){
      setCubesToDrop([
        {
          position: [8, 6, 7]
        }
      ])
    }
  });
  console.log(cubesToDrop)
  
    const ref = useRef()
    return(
      <instancedMesh ref={ref}>
        {cubesToDrop.map((cube, i) => {
          return <Cube position={cube.position} key={i} />;
        })}
      </instancedMesh>
    )
  }