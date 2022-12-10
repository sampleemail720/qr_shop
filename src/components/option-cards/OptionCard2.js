import React from "react";
import styles from "./OptionCard2.module.scss";

export default function OptionCard2({ items = [] }) {
  console.log("styles", styles.container);
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <a href={item.link}>
              <div className={`row js-between pv-15 ${styles.item}`}>
                <div className={`${styles.left} flex-center`}>{item.icon}</div>
                <div className={styles.right}>
                  <div>
                    <p className="font-bold size-16">{item.name}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
