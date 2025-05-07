import { createBrowserRouter, RouterProvider } from "react-router";

import CollapsibleMenu from "./components/CollapsibleMenu";

import "./App.css";
import { HomePage } from "./pages/HomePage";
import { StudentsPage } from "./pages/StudentsPage";
import { PlacesPage } from "./pages/PlacesPage";
import { CoursesPage } from "./pages/CoursesPage";
import { ScoresPage } from "./pages/ScoresPage";

function App() {
  const AppLayout = () => <CollapsibleMenu />;

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "estudiantes",
          element: <StudentsPage />,
        },
        {
          path: "lugares",
          element: <PlacesPage />,
        },
        {
          path: "materiales",
          element: <CoursesPage />,
        },
        {
          path: "calificaciones",
          element: <ScoresPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
