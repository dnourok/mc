import React, { Component, Fragment } from 'react';
import data from '../../data/volcanoData.csv';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import styled from 'styled-components';
import aggregateDataKeys from '../../utils/dataHelpers';

//TODO: With more time address
// - performance issues on load
// - responsive design

const ChartContainer = styled.div`
    height: 682px;
    color: black;
    width: 600px;
`;

export default class LineChart extends Component {
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
    const { dataLookUp, id, minXAxis, maxXAxis } = this.props;
    const chart = am4core.create(id, am4charts.XYChart);

    chart.data = aggregateDataKeys(data, 'Month', 'Month');
    //needs date passed in

    // [{
    //     date:
    //     value;
    // }]

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "yAxis";
    series.dataFields.dateX = "xAxis";
    series.tooltipText = "{yAxis}"

    series.tooltip.pointerOrientation = "vertical";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = dateAxis;

    // chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarX = new am4core.Scrollbar();
}

render() {
    const { title, id } = this.props;

    return (
        <Fragment>
            <h3>{title}</h3>
            <ChartContainer id={id} />
        </Fragment>
    )
  }
}