import { Menu } from "lucide-react";

import "./Header.css";

const Header = ({ handleIsOpen }) => {
  return (
    <div className="menu-header">
      <button onClick={handleIsOpen} className="menu-button">
        <Menu />
      </button>
      <span className="menu-title">Instituto Emmaus</span>
    </div>
  );
};

export default Header;
