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

  // rawData passed as an parmeter
  drawChart() {
    const svg = d3.select(this.svgRef.current)
      .attr('width', 400)
      .attr('height', 400);

    // const data = [rawData.dataNutrition.totalFat.perc];
    const data = [
      {
        name: 'calories',
        perc: 16,
      },
      {
        name: 'fat',
        perc: 53,
      },
      {
        name: 'carb',
        perc: 35,
      },
      {
        name: 'proteins',
        perc: 79,
      },
    ];

    const width = 390;
    const textXOffset = 70;
    const textYOffset = 30;
    const textSize = 16;
    const barHeight = textYOffset * 0.66;

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', textXOffset + 10)
      .attr('y', (d, i) => i * textYOffset)
      .attr('height', barHeight)
      .attr('width', d => width * d.perc / 100)
      .style('fill', (d) => {
        if (d.name === 'calories') {
          return 'fill', 'blue';
        }
        if (d.name === 'fat') {
          return 'fill', 'orange';
        }
        if (d.name === 'carb') {
          return 'fill', 'yellow';
        }
        if (d.name === 'proteins') {
          return 'fill', 'orange';
        }
        return 'fill', 'gray';
      });


    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', textXOffset)
      .attr('y', (d, i) => i * textYOffset + barHeight * 0.66)
      .text(d => d.name)
      .attr('font-size', textSize)
      .attr('text-anchor', 'end');


    //   svg.selectAll('rect')
    //     .data(data)
    //     .enter()
    //     .append('rect')
    //     .attr('x', (d, i) => i * 70)
    //     .attr('y', (d, i) => 100 - 10 * d)
    //     .attr('width', '8')
    //     .attr('height', (d, i) => d * 10)
    //     .attr('fill', 'green');

  //   svg.selectAll('circle')
  //     .data(data)
  //     .enter()
  //     .append('circle')
  //     .attr('cx', '300 =+1')
  //     .attr('cy', 200)
  //     .attr('r', 50)
  //     .style('fill', '#000000');
  }

  render() {
    return (
      <div style={{ marginTop: '16px' }}>
        <svg ref={this.svgRef} />
      </div>
    );
  }
}


export default BarChart;
