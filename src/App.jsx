import React, { Children } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/Footer";

// * Component
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
