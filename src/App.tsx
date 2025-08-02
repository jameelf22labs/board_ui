import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashbaord, Home } from "./feature";
import { Navbar, ProfileLayout } from "./layouts";

const WrapNavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-[100vw] h-[100vh] flex-row max-[550px]:flex-col">
      <Navbar />
      <div>{children} </div>
    </div>
  );
};

function App() {
  return (
    <div className="h-[100%] w-[100%] m-0 overflow-hidden">
      <BrowserRouter>
        <ProfileLayout />
        <Routes>
          <Route
            path="/"
            element={
              <WrapNavBar>
                <Dashbaord />
              </WrapNavBar>
            }
          />
          <Route
            path="/board"
            element={
              <WrapNavBar>
                <Home />
              </WrapNavBar>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
