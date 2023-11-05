import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa6";
import { SelectorOption } from "./SelectorOption";
import { useState } from "react";
import { useEffect } from "react";
import useContainerAll from "../hooks/useContainerAll";
import Swal from "sweetalert2";
import usePresupHistorial from "../hooks/usePresupHistorial";

const ContainerAll = () => {
  const [precio, setPrecio] = useState(0);
  const [datos, setDatos] = useState([]);
  const { elementos, setElementos } = useContainerAll();
  const { presupHistorial, setPresupHistorial } = usePresupHistorial();

  const realizarCotizacion = () => {
    const { dimension, propiedad, ubicacion } = elementos;
    if (dimension < 30 || propiedad == 0 || ubicacion == 0) {
      Swal.fire("Error", "Debes completar los Datos", "error");
    }
    const cuenta = 5000 * dimension * ubicacion * propiedad;
    setPrecio(cuenta);
  };

  const guardar = () => {
    setPresupHistorial([
      ...presupHistorial,
      {
        fecha: new Date().toDateString(),
        ...elementos,
        cuenta:
          5000 *
          elementos.dimension *
          elementos.ubicacion *
          elementos.propiedad,
      },
    ]);
    setPrecio(0);
  };
  useEffect(() => {
    const leer = async () =>
      setDatos(await (await fetch("/datos.json")).json());
    leer();
  }, []);
  return (
    <>
      <h2 className="titulo">Completar los datos Solicitados</h2>
      <nav>
        <Link to={"/presupHistorial"}>
          <FaClipboardList />
        </Link>
      </nav>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <SelectorOption
          datos={datos.filter(({ categoria }) => categoria == "propiedad")}
          label={"Selecciones el tipo de Propiedad"}
          tipo={"propiedad"}
        />
        <SelectorOption
          datos={datos.filter(({ categoria }) => categoria == "ubicacion")}
          label={"Seleccione su Ubicación"}
          tipo={"ubicacion"}
        />
        <label htmlFor="dimension">Metros Cuadrados</label>
        <input
          type="number"
          id="dimension"
          min={30}
          defaultValue={30}
          onInput={(e) =>
            setElementos({
              ...elementos,
              dimension: isNaN(parseInt(e.target.value))
                ? 0
                : parseInt(e.target.value) < 30
                ? 30
                : parseInt(e.target.value),
            })
          }
        />
        <button type="button" onClick={realizarCotizacion}>
          Cotizar
        </button>
      </form>
      {precio != 0 && (
        <>
          <p>El precio estimado es de ${precio.toFixed(2)}</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <button type="button" onClick={guardar}>
              Guardar
            </button>
          </form>
        </>
      )}
    </>
  );
};
export { ContainerAll };
