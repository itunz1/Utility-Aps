import React, { useContext } from 'react'
import Context from '../../Context/Context'

function Loc() {
  const {alumno} = useContext(Context);
  const idioma = alumno[3].idioma;

  return (
    <div className='loc'>
        <h1>{alumno[idioma].boton2}</h1>
        <div className='direccion'>
            {alumno[idioma].direccion}
        </div>
    </div>
  )
}

export default Loc