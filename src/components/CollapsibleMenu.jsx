import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router";

import Header from "./Header";
import { menuItems } from "../helpers/MenuItems";

import "./CollapsibleMenu.css";

export default function CollapsibleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [pageSelect, setPageSelect] = useState(1);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <Header handleIsOpen={handleIsOpen} isOpen={isOpen} />
      <div className="menu-lateral">
        <motion.div
          initial={{ width: "3rem" }}
          animate={{ width: isOpen ? "12rem" : "3rem" }}
          className="menu-container"
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={
                item.id == pageSelect ? "menu-item-select" : "menu-item"
              }
              onClick={() => setPageSelect(item.id)}
            >
              <div>{item.icon}</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="item-text"
              >
                {isOpen && <span>{item.text}</span>}
              </motion.div>
            </NavLink>
          ))}
        </motion.div>
        <Outlet />
      </div>
    </div>
  );
}
