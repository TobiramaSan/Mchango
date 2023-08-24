import React from "react";
import "./upgrade.css";
import SideBar from "../../components/sidebar/sidebar";
import Search from "../../components/search/search";
import UpgradeHero from "../../components/upgradeHero/upgradeHero";

const Upgrade = () => {
  return (
    <div className="upgrade">
      <div className="navbar">
        <SideBar />
      </div>
      <div className="upgrade-content">
        <Search />
        <UpgradeHero />
      </div>
    </div>
  );
};
export default Upgrade;
