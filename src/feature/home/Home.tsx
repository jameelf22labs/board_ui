import type { JSX } from "react";
import Style from "./Home.module.css";
import { ProfileLayout } from "../../layouts";

const Home = (): JSX.Element => {
  return (
    <div className={Style.homeRoot}>
      <ProfileLayout />
    </div>
  );
};

export default Home;
