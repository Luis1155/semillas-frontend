import { BookOpen, FileCheck, Home, MapPin, UserRound } from "lucide-react";

export const menuItems = [
  { id: 1, icon: <Home />, text: "Inicio", to: "/" },
  { id: 2, icon: <UserRound />, text: "Estudiantes", to: "/estudiantes" },
  { id: 3, icon: <MapPin />, text: "Lugares", to: "/lugares" },
  { id: 4, icon: <BookOpen />, text: "Materiales", to: "/materiales" },
  { id: 5, icon: <FileCheck />, text: "Calificaciones", to: "/calificaciones" },
];
