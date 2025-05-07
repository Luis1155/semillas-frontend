import { Search } from "lucide-react";
import "./StudentsPage.css";

export const StudentsPage = () => {
  return (
    <div className="base-students">
      <h1 className="title-st">Estudiantes</h1>
      <div className="div-bt-in">
        <button className="button-add-st">Agregar</button>
        <div class="group">
          <Search className="search-icon" />
          <input class="input" placeholder="Buscar estudiante" />
        </div>
      </div>
    </div>
  );
};
