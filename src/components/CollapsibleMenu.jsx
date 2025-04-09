import { Home, Settings, User, Menu } from "lucide-react";
import { motion } from "framer-motion";

import "./CollapsibleMenu.css";

const menuItems = [
  { id: 1, icon: <Home />, text: "Inicio" },
  { id: 2, icon: <User />, text: "Perfil" },
  { id: 3, icon: <Settings />, text: "Configuración" },
];

export default function CollapsibleMenu({ isOpen }) {
  return (
    <div className="menu-lateral">
      <motion.div
        initial={{ width: "3rem" }}
        animate={{ width: isOpen ? "12rem" : "3rem" }}
        className="menu-container"
      >
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <div>{item.icon}</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="item-text"
            >
              {isOpen && <span>{item.text}</span>}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
