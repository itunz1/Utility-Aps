import React, { useContext } from 'react'
import Context from '../../Context/Context'

function Professor() {
  const {alumno} = useContext(Context)
  const idioma = alumno[3].idioma
  const image = `../images/${alumno[idioma].foto}`

  return (
    <div className='professor'>
        <h1>{alumno[idioma].boton1}:</h1>
        <div>
            <img className='imagen' src={image} alt='not found'/>
        </div>
        <div className='nombre'>
           {alumno[idioma].nombre}
        </div>
    </div>
  )
}

export default Professor