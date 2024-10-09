import { useState } from "react";
import MainNav from "./components/MainNav";
import SiteNav from "./components/SiteNav";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const [activeNav, setActiveNav] = useState(false);

  const navProps = { activeNav, setActiveNav };

  return (
    <>
      <SiteNav {...navProps} />

      <main className="relative">
        <Outlet />
      </main>

      <MainNav {...navProps} />
    </>
  );
}

export default App;
