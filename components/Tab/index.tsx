import React, { Dispatch, SetStateAction } from "react";
import cn from "classnames";
import styles from "./Tab.module.scss";

enum SizeEnum {
  normal = "normal",
  big = "big",
}

interface ITab {
  categories: [
    {
      title: string;
      url: string;
    }
  ];
  size?: SizeEnum;
  activeTab: string;
  toggleTab: Dispatch<SetStateAction<string>>;
}

const Tab: React.FC<ITab> = ({
  categories,
  size = SizeEnum.normal,
  activeTab,
  toggleTab,
}) => {
  return (
    <ul className={styles.tab_wrapper}>
      {categories.map(({ title, url }, index) => (
        <li
          key={`${url}_${index}`}
          className={cn(
            styles.tab_item,
            size === SizeEnum.big && styles.big,
            activeTab === url && styles.active
          )}
          onClick={() => toggleTab(url)}
        >
          <a href="#">{title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Tab;
