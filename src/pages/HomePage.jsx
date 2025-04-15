import { NavLink } from "react-router";
import { menuItems } from "../helpers/MenuItems";
import "./Page.css";

export const HomePage = () => {
  return (
    <div className="base home">
      {menuItems.slice(1).map((item) => (
        <NavLink key={item.id} to={item.to} className={"button"}>
          <div className="icon">{item.icon}</div>
          <div>
            <span>{item.text}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
