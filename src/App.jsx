import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import CollapsibleMenu from "./components/CollapsibleMenu";
import Header from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingPage } from "./pages/SettingPage";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const AppLayout = () => (
    <div className="container">
      <Header handleIsOpen={handleIsOpen} />
      <CollapsibleMenu isOpen={isOpen} />
    </div>
  );

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "setting",
          element: <SettingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
  // return (
  //   <div className="container">
  //     <Header handleIsOpen={handleIsOpen} />
  //     <CollapsibleMenu isOpen={isOpen} />
  //   </div>
  // );
}
export default App;
