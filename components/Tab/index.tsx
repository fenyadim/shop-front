import React from "react";
import cn from "classnames";
import styles from "./Tab.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface ITab {
  categories: [
    {
      attributes: {
        title: string;
        slug: string;
      };
    }
  ];
  isSubTab?: boolean;
  activeTab: string | string[] | undefined;
}

const Tab: React.FC<ITab> = ({ categories, isSubTab = false, activeTab }) => {
  const { query } = useRouter();

  return (
    <ul className={styles.tab_wrapper}>
      {categories.map(({ attributes }, index) => (
        <li
          key={`${attributes.slug}_${index}`}
          className={cn(
            styles.tab_item,
            !isSubTab && styles.big,
            activeTab === attributes.slug && styles.active
          )}
        >
          <Link
            href={
              !isSubTab
                ? `/${attributes.slug}`
                : `/${query.category}/${attributes.slug}`
            }
          >
            {attributes.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tab;
