import React from "react";

import logo from "../assets/logo.png";
import Dashboard from "../components/Dashboard";

import styles from "./App.module.scss";

function App() {
  return (
    <main>
        <div className={styles.header}>
          <img alt="Softvision" src={logo} width={320} />
          <h1 className={styles.title}>Lets get this party started</h1>
        </div>
        <Dashboard />
    </main>
  );
}

export default App;
