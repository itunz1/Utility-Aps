import React from 'react'
import Flag from './Flag'
import Page from './Page';
import Provider from '../../Context/Provider';
import './MainPage.css';

function MainPage() {
    return (
        <Provider>
        <div className="flags">
          <Flag />
        </div>
        <div className='context'>
          <Page />
        </div>
        </Provider>
      );
    }
export default MainPage