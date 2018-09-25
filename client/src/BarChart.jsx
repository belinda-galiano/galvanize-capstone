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
        perc: 8,
      },
      {
        name: 'carb',
        perc: 35,
      },
      {
        name: 'proteins',
        perc: 10,
      },
    ];

    const width = 370;
    const textXOffset = 70;
    const textYOffset = 30;
    const textSize = 16;
    const padding = 8;
    const barHeight = textYOffset * 0.66;
    const colors = {
      calories: 'FF9B00',
      fat: 'FF0050',
      carb: '009CE3',
      proteins: '00BD66',
    };

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', textXOffset)
      .attr('y', (d, i) => i * textYOffset)
      .attr('height', barHeight)
      .attr('width', 0)
      .style('fill', d => colors[d.name] || 'gray')
      .transition()
      .attr('width', d => width * d.perc / 100)
      .attr('x', textXOffset + 10)
      .delay((d, i) => i * 20);

    // .on('mouseover', (d) => {
    //   d3.select(this)
    //     .style('opacity', 0.5)
    //     .style('fill', 'green');
    // })
    // .on('mouseout', (d) => {
    //   d3.select(this)
    //     .style('opacity', 1);
    // });

    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', textXOffset)
      .attr('y', (d, i) => i * textYOffset + barHeight * 0.66)
      .text(d => d.name)
      .attr('font-size', textSize)
      .attr('text-anchor', 'end');

    svg.selectAll('rect text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', d => textXOffset + width * d.perc / 100 + 30)
      .attr('y', (d, i) => i * textYOffset + barHeight * 0.70 + 2)
      .text(d => `${d.perc.toString()}%`)
      .attr('font-size', textSize)
      .attr('text-anchor', 'middle');
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
