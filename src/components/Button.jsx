import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/StateProvider";

export default function Button({ children }) {
  const { router, routerDispatch } = useContext(StateContext);
  useEffect(() => {
    window.localStorage.setItem("router", JSON.stringify(router));
  }, [router]);

  const handleRouter = () => {
    routerDispatch({ type: `to${children}` });
    // console.log(router);
  };

  return <button onClick={handleRouter}>{children}</button>;
}
