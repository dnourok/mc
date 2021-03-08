import React, { Component, Fragment } from 'react';
import data from '../../data/volcanoData.csv';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { aggregateDataKeys, aggregateProvinces } from '../../utils/dataHelpers';
import { ChartContainer } from '../style';

export default class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.chart = undefined;
    this.createChart = this.createChart.bind(this);
  }

componentDidMount(){
    this.createChart();
};

componentDidUpdate() {
    this.createChart();
}

componentWillUnmount() {
    if (this.chart) {
        this.dispose();
    }
}

createChart() {
if (this.chart) {
    this.chart.dispose();
}

//TODO: add fallbacks
const { country, id } = this.props;

// Create chart instance
var chart = am4core.create(id, am4charts.PieChart);

chart.data = aggregateProvinces(data, country);

// Set inner radius
chart.innerRadius = am4core.percent(50);

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;
}

render() {
    const { title, id } = this.props;

    return (
        <Fragment>
            <h4>{title}</h4>
            <ChartContainer id={id} />
        </Fragment>
    )
  }
}
