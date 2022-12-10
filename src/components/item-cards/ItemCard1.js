import React from "react";
import styles from "./ItemCard1.module.scss";
import food1 from "../../assets/food1.jpeg";
import fontIcons from "../../fonts/fonts";

export default function ItemCard1({ item }) {
  const vegan = fontIcons().carrot();
  const spicy = fontIcons().pepperHot();
  return (
    <div className={styles.container}>
      <a href={item?.link}>
        <div className="row js-between pv-15">
          <div className={styles.left}>
            <div>
              <div>
                <p className="font-bold">Dumplings with cheese</p>
              </div>
              <div className="pt-10">
                <p className="font-regular">500gms</p>
              </div>
            </div>
            <div className="row pt-10" style={{ gap: 10 }}>
              <div>
                <p className={`${styles.price} font-regular`}>$ 10.00</p>
              </div>

              <div>
                <p className={`${styles.vegan} font-regular`}>
                  <span className="pr-5">{vegan}</span>
                  <span className="pr-5 spicy-icon">{spicy}</span>
                  Vegan
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <img src={food1} alt="" className={styles.img} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
