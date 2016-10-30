import React from 'react';
import { PieChart } from '../../src'

class LineExample extends React.Component {

  render() {
    const data = {
      labels: [
        "Red",
        "Blue",
        "Yellow"
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    return (
      <PieChart data={data}/>
    );
  }
}


export default LineExample;