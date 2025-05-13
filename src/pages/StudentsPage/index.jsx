import { useState } from "react";

import { Eye, Pencil, Search } from "lucide-react";
import "./StudentsPage.css";
import { data } from "./students";
import DataTable from "react-data-table-component";

export const StudentsPage = () => {
  const [studentSearch, setStudentSearch] = useState("");
  const [records, setRecords] = useState(data);

  const handleChangeSearch = (event) => {
    const value = event.target.value;
    const filteredRecords = data.filter((record) => {
      return record.Nombres.toLowerCase().includes(value.toLowerCase());
    });
    setRecords(filteredRecords);
  };

  const columns = [
    { name: "Nombres", selector: (row) => row.nombres },
    { name: "Apellidos", selector: (row) => row.apellidos },
    { name: "No. Celular", selector: (row) => row.celular },
    { name: "Ciudad", selector: (row) => row.ciudad },
    { name: "Dirección", selector: (row) => row.direccion },
    { name: "Activo", selector: (row) => row.activo },
    { name: "", selector: (row) => {}, width: "50px", cell: () => <Eye /> },
    {
      name: "",
      selector: (row) => {},
      width: "50px",
      cell: () => <Pencil onClick={() => alert("Editar")} />,
    },
  ];

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
        <DataTable columns={columns} data={records} />
      </div>
    </div>
  );
};
