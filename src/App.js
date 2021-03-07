import React, { Fragment } from 'react';
import Header from './components/Header';
import BarChart from './components/BarChart';
// import Map from './components/Map';

const App = () => (
  <Fragment>
    <Header/>
    <BarChart
        dataLookUp='Country'
        title='Erruptions by Country from 2010-2018'
        id='byCountry'
        minXAxis={0}
        maxXAxis={30}
    />
    <BarChart
        dataLookUp='Year'
        title='Erruptions per Year'
        id='byYear'
        minXAxis={0}
        maxXAxis={15}
    />
    {/* <Map/> */}
  </Fragment>
)

export default App
