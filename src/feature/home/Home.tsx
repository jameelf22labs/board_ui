import type { JSX } from "react";
import Style from "./Home.module.css";
import { Navbar, ProfileLayout } from "../../layouts";

const Home = (): JSX.Element => {
  return (
    <div className={Style.homeRoot}>
      <ProfileLayout />
      <Navbar />
    </div>
  );
};

export default Home;
