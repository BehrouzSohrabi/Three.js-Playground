import React, { useReducer, useState, useContext } from 'react'
import { Context } from '../states';

function Menu(){

  return (
    <>
      
      <div className=''></div>
    </>
  );
}
function Pause(){

  return (
    <>Pause
    </>
  );
}
function Play(){

  return (
    <>Play
    </>
  );
}
function Score(){

  return (
    <>Score
    </>
  );
}
function Shop(){

  return (
    <>Shop
    </>
  );
}
function Board(){

  return (
    <>Board
    </>
  );
}

export default function UI(){
  const { UIState, setUIState } = useContext(Context); 
  const { cubesToDrop, setCubesToDrop } = useContext(Context);
  const changeHandler = () => {
    setCubesToDrop([])
    let cubes = []
    for(let i =0; i< 20; i++){
      cubes.push({
        position: [
          -5+Math.round(Math.random()*i/3),
          Math.round(Math.random()*i/2),
          -5+Math.round(Math.random()*i/3)
        ]
      })
    }
    setTimeout(() => {
      setCubesToDrop(cubes, 200)
    })
  };

  return (
    <div className='UI'>
      {UIState == "Menu" && (<Menu />)}
      {UIState == "Pause" && (<Pause />)}
      {UIState == "Play" && (<Play />)}
      {UIState == "Score" && (<Score />)}
      {UIState == "Shop" && (<Shop />)}
      {UIState == "Board" && (<Board />)}
    </div>
  )
}