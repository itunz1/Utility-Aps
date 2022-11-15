import "./Conversor.css";
import React, {useState} from "react";



const Conversor = () => {


const [counter, setCounter] = useState(0);
const [pesoA, setPesoa] = useState(0)
const [pesoC, setPesoc] = useState(0);
const [pesoM, setPesom] = useState(0);
const [dolar, setDolar] = useState(0)

const modifyCounter = (e) => {
  setCounter(e.target.value)
  setPesoa(e.target.value * cambios[1].cambio)
  setPesoc(e.target.value * cambios[2].cambio)
  setPesom(e.target.value * cambios[3].cambio)
  setDolar(e.target.value * cambios[4].cambio)
}



  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:138.08,
    },{
      moneda: "Peso colombiano",
      cambio:4273.34,
    },{
      moneda: "Peso mexicano",
      cambio:20.36,
    },{
      moneda: "Dólar",
      cambio:1.03
    }
  ]

  return (
    <>
        <label htmlFor="u0">{cambios[0].moneda}</label>
        <input id="u4" type="number" value={counter} onChange={modifyCounter}/> 
        <label htmlFor="u1">{cambios[1].moneda}</label>
        <input id="u4" type="number" value={pesoA} readOnly/> 
        <label htmlFor="u2">{cambios[2].moneda}</label>
        <input id="u4" type="number" value={pesoC} readOnly/> 
        <label htmlFor="u3">{cambios[3].moneda}</label>
        <input id="u4" type="number" value={pesoM} readOnly/> 
        <label htmlFor="u4">{cambios[4].moneda}</label>
        <input id="u4" type="number" value={dolar} readOnly/> 
    </>
  )
}

export default Conversor;
