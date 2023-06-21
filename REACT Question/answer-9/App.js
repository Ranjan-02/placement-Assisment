import "./App.css";
import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
// import Header from "./Component/Header";
import HeroSection from "./Component/HeroSection";
import ThemeToggler from "./Component/ThemeToggler";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        {/* <Header /> */}
        {/* <ThemeToggler /> */}
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
