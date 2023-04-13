import React from "react";
import Tab from "@/components/Tab";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>("cosmetic");
  const [activeSubTab, setActiveSubTab] = React.useState<string>("mask");

  const category = [
    {
      title: "Косметика",
      url: "cosmetic",
    },
    {
      title: "Хоз.товары",
      url: "house-goods",
    },
  ];
  const subCategory = [
    {
      title: "Маски",
      url: "mask",
    },
    {
      title: "Патчи",
      url: "patches",
    },
    {
      title: "Пудра",
      url: "face-powder",
    },
    {
      title: "Помада",
      url: "lipstick",
    },
    {
      title: "Тушь",
      url: "drawing-ink",
    },
  ];

  return (
    <header className={styles.header}>
      <Tab
        categories={category}
        size="big"
        activeTab={activeTab}
        toggleTab={setActiveTab}
      />
      <Tab
        categories={subCategory}
        activeTab={activeSubTab}
        toggleTab={setActiveSubTab}
      />
    </header>
  );
};

export default Header;
