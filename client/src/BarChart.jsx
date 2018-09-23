import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.drawChart = this.drawChart.bind(this);
    this.svgRef = React.createRef();
  }

  componentDidMount() {
    d3.json('/NutritionFacts.json').then(this.drawChart);
  }

  drawChart(rawData) {
    const svg = d3.select(this.svgRef.current)
      .attr('width', 400)
      .attr('height', 400);

    const data = [rawData.dataNutrition.totalFat.perc];

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => 100 - 10 * d)
      .attr('width', '65')
      .attr('height', (d, i) => d * 10)
      .attr('fill', 'green');
  }

  render() {
    return (
      <div>
        <svg ref={this.svgRef} />
      </div>
    );
  }
}


export default BarChart;
