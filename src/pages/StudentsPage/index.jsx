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
    { name: "Nombres", width: "15%", selector: (row) => row.nombres },
    { name: "Apellidos", width: "15%", selector: (row) => row.apellidos },
    { name: "No. Celular", width: "15%", selector: (row) => row.celular },
    { name: "Ciudad", width: "10%", selector: (row) => row.ciudad },
    { name: "Dirección", width: "25%", selector: (row) => row.direccion },
    {
      name: "Activo",
      width: "10%",
      selector: (row) => row.activo,
      conditionalCellStyles: [
        {
          when: (row) => row,
          style: (row) => {
            return { backgroundColor: row.activo ? "pink" : "green" };
          },
        },
      ],
    },
    {
      name: "",
      width: "5%",
      center: "true",
      selector: () => {},
      cell: () => <Pencil />,
    },
    {
      name: "",
      width: "5%",
      center: "true",
      selector: () => {},
      cell: () => <Eye />,
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        border: "none",
      },
    },
    headCells: {
      style: {
        fontFamily: "Arial",
        color: "#202124",
        fontSize: "20px",
      },
    },
    rows: {
      style: {
        fontFamily: "Arial",
        fontSize: "15px",
      },
      highlightOnHoverStyle: {
        backgroundColor: "rgb(230, 244, 244)",
        borderBottomColor: "#FFFFFF",
        borderRadius: "25px",
        outline: "1px solid #FFFFFF",
      },
    },
    pagination: {
      style: {
        border: "none",
      },
    },
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

      <div
        style={{ justifyContent: "center", display: "flex", marginTop: "20px" }}
      >
        <DataTable
          columns={columns}
          data={records}
          highlightOnHover
          customStyles={customStyles}
          // pointerOnHover
        />
      </div>
    </div>
  );
};
