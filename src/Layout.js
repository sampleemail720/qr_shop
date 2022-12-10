import React from "react";
import OptionCard1 from "./components/option-cards/OptionCard1";
import OptionCard2 from "./components/option-cards/OptionCard2";
import ItemCard1 from "./components/item-cards/ItemCard1";
import fontIcons from "./fonts/fonts";

export default function Layout({ children }) {
  let items = [
    {
      name: "Breakfast",
      link: "#",
    },
    {
      name: "Food",
      link: "#",
    },
    {
      name: "The drinks",
      link: "#",
    },
  ];

  let items2 = [
    {
      name: "Wifi",
      link: "#",
      icon: fontIcons().wifi(),
    },
  ];

  console.log("items2", items2);

  return (
    <div>
      <ItemCard1 />
      <OptionCard1 items={items} />
      <OptionCard2 items={items2} />
      <p className="media-query-test"></p>
    </div>
  );
}
