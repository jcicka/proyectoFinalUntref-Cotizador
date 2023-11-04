import { useContext } from "react";
import ContainerAllContext from "../context/ContainerAllContext";

const useContainerAll = () => useContext(ContainerAllContext);
export default useContainerAll;
