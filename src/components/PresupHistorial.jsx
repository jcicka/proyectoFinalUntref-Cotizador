import React from 'react';
import { FaHouse } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const PresupHistorial = () => {
  return (
    <>
      <nav>
        <Link to={'/'}>
          <FaHouse />
        </Link>
      </nav>
    </>
  )
};

export {PresupHistorial};