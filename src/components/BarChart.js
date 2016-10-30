import React from 'react';
import Chart from './Chart';

const propTypes = {
  className: React.PropTypes.string,
  redraw: React.PropTypes.bool,
  data: React.PropTypes.object.isRequired,
  options: React.PropTypes.object,
};

class PieChart extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.chart = null;
  }

  render() {
    return (
      <Chart {...this.props} ref={ref => this.chart = ref} type="bar"/>
    );
  }
}

PieChart.propTypes = propTypes;

export default PieChart;