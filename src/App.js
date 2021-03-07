import React, { Fragment } from 'react';
import Header from './components/Header';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart'

const App = () => (
  <Fragment>
    <Header/>
    <LineChart
        dataLookUp='Year'
        title='Aggregated Erruptions Per Month from 2010-2018'
        id='byMonth'
    />
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
  </Fragment>
)

export default App
