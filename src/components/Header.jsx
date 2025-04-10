import { Menu, EllipsisVertical } from "lucide-react";

import "./Header.css";

const Header = ({ handleIsOpen, isOpen }) => {
  return (
    <div className="menu-header">
      <button onClick={handleIsOpen} className="menu-button">
        {isOpen ? <EllipsisVertical /> : <Menu />}
      </button>
      <span className="menu-title">Instituto Emmaus</span>
    </div>
  );
};

export default Header;
