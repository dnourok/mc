import React, { Fragment } from 'react';
import Header from './components/Header';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart'
import { Wrapper } from './style';

const App = () => (
  <Fragment>
    <Header title='Volcano Erruptions 2010-2018'/>
    <Wrapper>
        <LineChart
            dataLookUp='Month'
            type='Month'
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
    </Wrapper>
  </Fragment>
)

export default App
