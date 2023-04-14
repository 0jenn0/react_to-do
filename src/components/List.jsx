import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/StateProvider";
import styles from "./List.module.css";

export default function List({ id, text, checked }) {
  const { state, dispatch } = useContext(StateContext);
  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  const handleRemove = () => {
    dispatch({ type: "remove", id });
  };
  const handleCheck = () => {
    dispatch({ type: "check", id });
  };
  return (
    <div className={styles.container}>
      <input type="checkbox" onChange={() => handleCheck()} checked={checked} />
      <div>{text}</div>
      <button onClick={() => handleRemove()}>remove</button>
    </div>
  );
}
