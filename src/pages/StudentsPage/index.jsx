import { useState } from "react";

import { Eye, Pencil, Search } from "lucide-react";
import "./StudentsPage.css";
import { data } from "./students";

export const StudentsPage = () => {
  const [studentSearch, setStudentSearch] = useState("");

  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setStudentSearch(value);
  };

  return (
    <div className="base-students">
      <h1 className="title-st">Estudiantes</h1>
      <div className="div-bt-in">
        <button className="button-add-st">Agregar</button>
        <div className="group">
          <Search className="search-icon" />
          <input
            onChange={handleChangeSearch}
            className="input"
            placeholder="Buscar estudiante"
          />
        </div>
      </div>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <table className="table-st">
          <thead>
            <tr className="tr-st">
              <th className="th-st">Nombres</th>
              <th className="th-st">Apellidos</th>
              <th className="th-st">No. Celular</th>
              <th className="th-st">Ciudad</th>
              <th className="th-st">Dirección</th>
              <th className="th-st">Activo</th>
              {/* <th className="th-st"></th>
            <th className="th-st"></th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((st) => (
              <tr key={st.Celular} className="tr-st">
                <td className="td-st">{st.Nombres}</td>
                <td className="td-st">{st.Apellidos}</td>
                <td className="td-st">{st.Celular}</td>
                <td className="td-st">{st.Ciudad}</td>
                <td className="td-st">{st.Direccion}</td>
                <td className="td-st">{st.Activo ? "Estoy" : "No estoy"}</td>
                <td className="td-st">
                  <Eye />
                </td>
                <td className="td-st">
                  <Pencil />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
