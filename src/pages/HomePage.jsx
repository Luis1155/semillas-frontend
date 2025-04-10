import { NavLink } from "react-router";
import { menuItems } from "../helpers/MenuItems";
import "./Page.css";

export const HomePage = () => {
  return (
    <div className="base home">
      HomePage
      {menuItems.slice(1).map((item) => (
        <NavLink key={item.id} to={item.to} className={"menu-item"}>
          <div>{item.icon}</div>
          <div className="item-text">
            <span>{item.text}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
