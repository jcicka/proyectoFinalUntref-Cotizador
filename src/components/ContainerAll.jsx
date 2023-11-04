import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa6";
import { SelectorOption } from "./SelectorOption";

const ContainerAll = () => {
  const realizarCotizacion = () => {
    console.log("Cotizar");
  };
  return (
    <>
      <nav>
        <Link to={"/presupHistorial"}>
          <FaClipboardList />
        </Link>
      </nav>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <SelectorOption
          datos={[]}
          label={"Primera Seleccion"}
          tipo={"primera"}
        />
        <SelectorOption
          datos={[]}
          label={"Segunda Seleccion"}
          tipo={"segunda"}
        />
        <label htmlFor="dimension">Metros Cuadrados</label>
        <input type="number" id="dimension" defaultValue={30} />
        <button type="button" onClick={realizarCotizacion}>
          Cotizar
        </button>
      </form>
    </>
  );
};
export { ContainerAll };
