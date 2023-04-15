import React from "react";
import { useRouter } from "next/router";
import Tab from "@/components/Tab";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [tabs, setTabs] = React.useState([]);
  const [subTabs, setSubTabs] = React.useState([]);
  const { query } = useRouter();

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "http://127.0.0.1:1337/api/categoriesp?populate[0]=subcategories"
      );
      const { data } = await res.json();
      setTabs(data);
    };
    fetchData().catch(console.error);
  }, []);

  React.useEffect(() => {
    tabs.map(({ attributes }) => {
      if (attributes.slug === query.category) {
        setSubTabs(attributes.subcategories.data);
      }
    });
  }, [query.category, tabs]);

  return (
    <header className={styles.header}>
      <Tab categories={tabs} activeTab={query.category} />
      <Tab categories={subTabs} activeTab={query.subcategory} isSubTab />
    </header>
  );
};

export default Header;
