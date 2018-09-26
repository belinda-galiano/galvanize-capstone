import React from 'react';
import * as d3 from 'd3';
import './BarChart.css';


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
      .attr('height', 600);

    // const data = [rawData.dataNutrition.totalFat.perc];
    // const nutrition = {
    //   servingSize: '30g',
    //   calories: 300,
    //   totalFat: {
    //     qty: 8,
    //     perc: 10,
    //     saturatedFat: { qty: 4, perc: 11 },
    //     transFat: { qty: 6, perc: null },
    //   },
    //   cholesterol: { qty: 1, perc: 2 },
    //   sodium: { qty: 2, perc: 4 },
    //   totalCarbohydrate: {
    //     qty: 12,
    //     perc: 13,
    //     dietaryFiber: { qty: 5, perc: 7 },
    //     sugars: { qty: 2, perc: 3 },
    //   },
    //   protein: { qty: 3, perc: null },
    //   vitaminA: { perc: 1 },
    //   vitaminB: { perc: 2 },
    //   vitaminC: { perc: 3 },
    //   vitaminD: { perc: 4 },
    //   vitaminE: { perc: 5 },
    //   calcium: { perc: 6 },
    //   iron: { perc: 7 },
    //   potassium: { perc: 8 },
    // };
    const data = [
      {
        name: 'Calories',
        perc: 16,
      },
      {
        name: 'Fat',
        perc: 8,
      },
      {
        name: 'Carb',
        perc: 35,
      },
      {
        name: 'Proteins',
        perc: 10,
      },
      {
        name: 'Vitamin A',
        perc: 4,
      },
      {
        name: 'Vitamin B',
        perc: 2,
      },
      {
        name: 'Vitamin C',
        perc: 3,
      },
      {
        name: 'Vitamin D',
        perc: 4,
      },
      {
        name: 'Vitamin E',
        perc: 5,
      },
      {
        name: 'Calcium',
        perc: 6,
      },
      {
        name: 'Iron',
        perc: 7,
      }, {
        name: 'Potassium',
        perc: 8,
      },
    ];

    const width = 370;
    const textXOffset = 90;
    const textYOffset = 44;
    const textSize = 16;
    const barHeight = textYOffset * 0.66;
    const colors = {
      Calories: '#FFEB3B',
      Fat: '#FF5722',
      Carb: '#795548',
      Proteins: '#03A9F4',
      'Vitamin A': '#009688',
      'Vitamin B': '#4CAF50',
      'Vitamin C': '#8BC34A',
      'Vitamin D': '#CDDC39',
      'Vitamin E': '#558B2F',
      Calcium: '#283593',
      Iron: '#1565C0',
      Potassium: '#00838F',
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
      .delay((d, i) => i * 30);

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
      .attr('font-weight', 'bold')
      .attr('text-anchor', 'end');

    svg.selectAll('rect text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', d => textXOffset + width * d.perc / 100 + 30)
      .attr('y', (d, i) => i * textYOffset + barHeight * 0.70 + 2)
      .text(d => (d.perc ? `${d.perc.toString()}%` : null))
      .attr('font-size', textSize)
      .attr('text-anchor', 'middle');
  }

  render() {
    return (
      <div style={{ marginTop: '16px' }}>
        <div className="mdc-typography--subtitle1" style={{ fontSize: '24px' }}>Amount Per Serving</div>
        <div className="second-divider" style={{ marginTop: '8px', marginBottom: '8px' }} />
        <div className="mdc-typography--subtitle2" style={{ fontSize: '18px', marginBottom: '32px' }}>% Daily Value</div>
        <svg ref={this.svgRef} />
      </div>
    );
  }
}


export default BarChart;
