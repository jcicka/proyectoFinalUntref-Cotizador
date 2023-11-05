import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PresupHistorial } from "./components/PresupHistorial";
import { ContainerAll } from "./components/ContainerAll";
import PresupHistorialContext from "./context/PresupHistorialContext";
import ContainerAllContext from "./context/ContainerAllContext";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {

  const [elementos, setElementos] = useState({dimension:30, propiedad:0, ubicacion:0});
  const [presupHistorial, setPresupHistorial] = useLocalStorage("presupHistorial", []);
  return (
    <>
      <h1>Seguros del Hogar</h1>
      <PresupHistorialContext.Provider value={{presupHistorial, setPresupHistorial}}>
        <ContainerAllContext.Provider value={{elementos, setElementos}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<ContainerAll />}></Route>
              <Route
                path="/presupHistorial"
                element={<PresupHistorial />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </ContainerAllContext.Provider>
      </PresupHistorialContext.Provider>
    </>
  );
}

export default App;
