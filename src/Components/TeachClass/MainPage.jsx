import React from 'react'
import Flag from './Flag'
import Page from './Page';
import Provider from '../../Context/Provider';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  return (
    <Provider>
      <div className="flags">
        <Link to='/'>
          <button className='btnn'>Volver</button>
        </Link>
        <Flag />
      </div>
      <div className='context'>
        <Page />
      </div>
    </Provider>
  );
}
export default MainPage