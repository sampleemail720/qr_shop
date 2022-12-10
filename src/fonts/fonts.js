import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function fontIcons() {
  // const font = (name, style) => {
  //   console.log(name);
  //   return <FontAwesomeIcon icon={icon({ name: `${name}` })} />;
  // };

  return {
    coffee: () => <FontAwesomeIcon icon={icon({ name: "coffee" })} />,
    right: () => <FontAwesomeIcon icon={icon({ name: "angle-right" })} />,
    wifi: () => <FontAwesomeIcon icon={icon({ name: "wifi" })} />,
    carrot: () => <FontAwesomeIcon icon={icon({ name: "carrot" })} />,
    pepperHot: () => <FontAwesomeIcon icon={icon({ name: "pepper-hot" })} />,
  };
}
