import React from "react";
import fontIcons from "../../fonts/fonts";
import "./OptionCard1.css";

export default function OptionCard1({ items = [] }) {
  return (
    <div className="container">
      {items.map((item, index) => {
        let icon = fontIcons().right();
        return (
          <div key={index}>
            <a href={item.link}>
              <div className="row js-between pv-15 item">
                <div>
                  <p className="font-bold size-16">{item.name}</p>
                </div>
                <div>{icon}</div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
