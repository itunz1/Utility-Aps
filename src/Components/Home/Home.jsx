import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className='center'>
            <div className='all'>
                <div className='test'>
                <div className='tittle'>
                    <h1>Actividades Realizadas</h1>
                    <p>Estas son algunas de las actividades que realice durante mi recorrido en el bootcamp de soyHenry utilizando React, entre las
                        actividades realizadas estan: mini app del clima, un timer o contador, un conversor y un ejemplo de clases en alguno
                        de los idiomas disponibles.
                    </p>
                </div>
                    <img className='img-tittle' src='../images/app.jpg' alt='img not found'/>
                    </div>
                <div className='types'>
                <div className='clima'>
                    <img src='../images/clima.png' alt='img not found'/>
                    <div>
                    <h4>App de clima</h4>
                    <p>En esta mini app del clima se pueden realizar búsqueda de diversos paises y ciudades a través de una api
                        donde nos muestra un cuadro con informacion del clima sobre el pais o ciudad buscada.
                    </p>
                    <Link to="/clima">
                        <button className='btnn'>Ver</button>
                    </Link>
                    </div>
                </div>
                <div className='conversor'>
                    <img src='../images/conversor.jpg' alt='img not found'/>
                    <div>
                    <h4>Conversor</h4>
                    <p>Un conversor de valor entre monedas, en este caso nos muestra el valor de 1 euro en diferentes valores en distintas divisas, excelente
                        para personas que les gusta viajar o realizar compras online (aqui no use ninguna api y la información mostrada
                        puede estar desactualizada)
                    </p>
                    <Link to="/conversor">
                        <button className='btnn'>Ver</button>
                    </Link>
                    </div>
                </div>
                <div className='idioma'>
                    <img src='../images/clasesidioma.png' alt='img not found'/>
                    <div>
                    <h4>Clases en el idioma que elijas</h4>
                    <p>Este es un componente donde puedes elegir una clase en particular en el idioma de tu preferencia, entre los idiomas
                        disponibles estan: español, ingles y frances.
                    </p>
                    <Link to="/class">
                        <button className='btnn'>Ver</button>
                    </Link>
                    </div>
                </div>
                <div className='timer'>
                    <img src='../images/timer.png' alt='img not found'/>
                    <div>
                    <h4>Timer o contador</h4>
                    <p>Aquí podremos visualizar un contador que va hacia adelante o de forma regresiva, bastante util para algunas actividades
                        como hacer ejercicios o cocinar.
                    </p>
                    <Link to="/timer">
                        <button className='btnn'>Ver</button>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home