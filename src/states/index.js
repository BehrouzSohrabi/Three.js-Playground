import React, { createContext } from "react";

const Context = createContext({
    UIState: "",
    userName: "",
    highScore: 0,
    score: 0,
    usedScore: 0,
    cubesToDrop: [],
    shopItems: {},
    setUIState: () => {},
    setUserName: () => {},
    setHighScore: () => {},
    setScore: () => {},
    setUsedScore: () => {},
    setCubesToDrop: () => {},
    setShopItems: () => {}
});

const initialState = {
    UIState: "Menu",
    userName: "",
    highScore: 0,
    score: 0,
    usedScore: 0,
    cubesToDrop: [],
    shopItems : {
        cubes: [],
        background:[]
    }
}

export {
    initialState,
    Context
};