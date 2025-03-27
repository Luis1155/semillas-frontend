import "../App.css";

let vacio = "";
function NativeHeader() {
  const abrir_cerrar_menu = () => {
    let menu_desplegable = document.getElementById("menu");
    let boton_cerrar = document.getElementById("x");
    menu_desplegable.classList.toggle("abrir_menu");
    boton_cerrar.classList.toggle("colocar_x");
  };
  return (
    <>
      <div>
        <header>
          <div className="barras">
            <button onClick={abrir_cerrar_menu} className="boton_menu" id="x">
              X
            </button>
          </div>
          <nav id="menu" className="desplegable">
            <ul>
              <li>
                <a href={vacio}>Home</a>
              </li>
              <li>
                <a href={vacio}>Galeria</a>
              </li>
              <li>
                <a href={vacio}>Proyectos</a>
              </li>
              <li>
                <a href={vacio}>Contactanos</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default NativeHeader;
