import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashbaord, Home } from "./feature";
import { Navbar, ProfileLayout } from "./layouts";

const WrapNavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full flex-row max-[550px]:flex-col">
      <Navbar />
      <div>{children} </div>
    </div>
  );
};

function App() {
  return (
    <div className="h-screen w-full">
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
