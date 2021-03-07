import React, { Component, Fragment } from 'react';
import data from '../../data/volcanoData.csv';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import aggregateDataKeys from '../../utils/dataHelpers';
import { ChartContainer } from '../style';

export default class BarChart extends Component {
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

    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = aggregateDataKeys(data, dataLookUp);

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "xAxis";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = minXAxis; //needs defaults
    valueAxis.max = maxXAxis;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.minGridDistance = 30;

    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "xAxis";
    series.dataFields.valueY = "yAxis";
    series.columns.template.tooltipText = "{valueY.value}";
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
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
