import { useState } from "react";

import CollapsibleMenu from "./components/CollapsibleMenu";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <Header handleIsOpen={handleIsOpen} />
      <CollapsibleMenu isOpen={isOpen} />
    </div>
  );
}
export default App;
