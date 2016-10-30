import React from 'react';
import { DoughnutChart } from '../../src'

class BarExample extends React.Component {

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
      <DoughnutChart data={data}/>
    );
  }
}


export default BarExample;