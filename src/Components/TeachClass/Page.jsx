import React, { useContext, useState } from 'react'
import Context from '../../Context/Context'
import Professor from   './Professor'
import Loc from './Loc'

function Page() {
  const {alumno} = useContext(Context)
  const idioma = alumno[3].idioma;

  const[hide1, setHide1] = useState(false);
  const[hide2, setHide2] = useState(false);

  const show1 = () => {
    setHide1(!hide1)
    setHide2(false)
  }

  const show2 = () => {
    setHide2(!hide2)
    setHide1(false)
  }

  return (
    <>
        <h1>{alumno[idioma].titulo}</h1>
        <h2>{alumno[idioma].texto}</h2>
        <div className='botones'>
            <button onClick={show1}>{alumno[idioma].boton1}</button>
            <button onClick={show2}>{alumno[idioma].boton2}</button>
        </div>
        {hide1 ? <Professor /> : null}
        {hide2 ? <Loc /> : null}
    </>
  )
}

export default Page