import React from "react";
import Button from "./Button";
import styles from "./Navbar.module.css";
import DarkmodeButton from "./DarkmodeButton";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <DarkmodeButton />
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Complete</Button>
    </div>
  );
}
