import { useContext } from "react";
import PresupHistorialContext from "../context/PresupHistorialContext";

const usePresupHistorial = () => useContext(PresupHistorialContext);
export default usePresupHistorial;
