import React from 'react';
import { FaHouse } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import usePresupHistorial from '../hooks/usePresupHistorial';
import Presupuesto from './Presupuesto';

const PresupHistorial = () => {
  const { presupHistorial } = usePresupHistorial();
  return (
    <>
      <h2>Historial  de presupuestos</h2>
      <nav>
        <Link to={'/'}>
          <FaHouse />
        </Link>
      </nav>
      <ul>{presupHistorial.map((elemento,indice) => <Presupuesto key={indice} {...elemento}/>)}</ul>
    </>
  )
};

export {PresupHistorial};