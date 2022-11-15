import React from 'react'
import { useContext } from 'react';
import Context from '../../Context/Context';


function Languaje() {

  const {setAlumno} = useContext(Context);
  const {alumno} = useContext(Context);

  const position = (pos) => {
    setAlumno(alumno.map((element, index) => 
      index == 3 ? {...element, idioma:pos} : {...element}
    ))
  }
  

  const change1 = () => {
    position(0);
  }

  const change2 = () => {
    position(1);
  }

  const change3 = () => {
    position(2);
  }


  return (
    <div className='languaje'>
        <div className='flag' onClick={change1}>
          <img src='../images/spain.jpg' alt='img not foud'/>
        </div>
        <div className='flag' onClick={change2}>
          <img src='../images/uk.png' alt='img not foud'/>
        </div>
        <div className='flag' onClick={change3}>
          <img src='../images/francia.png' alt='img not foud'/>
        </div>
    </div>
  )
}

export default Languaje