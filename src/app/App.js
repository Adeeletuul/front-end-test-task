import { Route, Routes } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Home from "../home/Home";
import Joke from "../joke/Joke";
import Saved from "../saved/Saved";
import "../App.css";
import React from "react";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joke/:category" element={<Joke />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
