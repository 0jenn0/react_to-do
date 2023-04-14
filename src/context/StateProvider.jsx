import React, { createContext, useReducer } from "react";
import stateReducer from "../reducer/state-reducer";
import routerReducer from "../reducer/router-reducer";

export const StateContext = createContext();

export default function StateProvider({ children }) {
  // const [state, dispatch] = useReducer(stateReducer, initialState);
  const [state, dispatch] = useReducer(
    stateReducer,
    JSON.parse(window.localStorage.getItem("state")) || initialState
  );
  // const [router, routerDispatch] = useReducer(routerReducer, initialRouter);
  const [router, routerDispatch] = useReducer(
    routerReducer,
    JSON.parse(window.localStorage.getItem("router")) || initialRouter
  );

  return (
    <StateContext.Provider value={{ state, dispatch, router, routerDispatch }}>
      {children}
    </StateContext.Provider>
  );
}

const initialState = {
  counter: 2,
  todos: [
    { id: 1, text: "리액트 공부하기", checked: true },
    {
      id: 2,
      text: "넥스트 공부하기",
      checked: false,
    },
  ],
};

const initialRouter = {
  All: true,
  Active: false,
  Complete: false,
};
