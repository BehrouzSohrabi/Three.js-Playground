import React, { useMemo, useState } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { Context, initialState } from './states';
import CameraControl from "./components/CameraControl"
import Lights from "./components/Lights"
import Cubes from "./components/Cubes"
import Floor from "./components/Floor"
import Grid from "./components/Grid"
import UI from "./components/UI"

import './styles.css'

export default function App() {
  const [UIState, setUIState]         = useState(initialState.UIState);
  const [userName, setUserName]       = useState(initialState.userName);
  const [highScore, setHighScore]     = useState(initialState.highScore);
  const [score, setScore]             = useState(initialState.score);
  const [usedScore, setUsedScore]     = useState(initialState.usedScore);
  const [cubesToDrop, setCubesToDrop] = useState(initialState.cubesToDrop);
  const [shopItems, setShopItems]     = useState(initialState.shopItems);

  const initialMemo = {
    objects: {
        UIState,
        userName,
        highScore,
        score,
        usedScore,
        cubesToDrop,
        shopItems,
        setUIState,
        setUserName,
        setHighScore,
        setScore,
        setUsedScore,
        setCubesToDrop,
        setShopItems,
    },
    arrays: [
        UIState,
        userName,
        highScore,
        score,
        usedScore,
        cubesToDrop,
        shopItems,
    ]
  }

  const value = useMemo(() => (initialMemo.objects), initialMemo.arrays);

  return (
    <>
      <Canvas shadows>
        <CameraControl />
        <Lights />
        <Physics>
          <Context.Provider value={value}>
            <Cubes />
            <Floor />
            <Grid />
          </Context.Provider>
        </Physics>
      </Canvas>
      <Context.Provider value={value}>
        <UI />
      </Context.Provider>
    </>
  )
}
