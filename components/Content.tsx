import React from 'react'
import Opciones from './Opciones'
import Reservaciones from './Reservaciones'
import "./Content.css"

const Content = () => {
  return (
    <div className='contenido'>
        <Opciones/>
        <Reservaciones/>
    </div>
  )
}

export default Content