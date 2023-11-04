import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PresupHistorial } from "./components/PresupHistorial";
import { ContainerAll } from "./components/ContainerAll";
import PresupHistorialContext from "./context/PresupHistorialContext";
import ContainerAllContext from "./context/ContainerAllContext";

function App() {
  return (
    <>
      <PresupHistorialContext.Provider value={{}}>
        <ContainerAllContext.Provider value={{}}>
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
