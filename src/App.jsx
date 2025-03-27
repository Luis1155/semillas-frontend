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
    <>
      <Header handleIsOpen={handleIsOpen} />
      <CollapsibleMenu isOpen={isOpen} />
    </>
  );
}
export default App;
