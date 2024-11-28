import React from 'react'
import Estadoorden from './Estadoorden'
import Opcionesestado from './Opcionesestado'
import './Finesestadoorden.css';

const Finestadoorden = () => {
  return (
    <div className='flexestado'>
      <Opcionesestado/>
      <Estadoorden/>
    </div>
  )
}

export default Finestadoorden
