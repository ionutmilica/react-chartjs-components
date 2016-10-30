import React from 'react';
import LineExample from './LineExample';
import BarExample from './BarExample';
import PieExample from './PieExample';
import DoughnutExample from './DoughnutExample';


class App extends React.Component {

  render() {
    const container = { width: 400, height: 200 };

    return (
      <div>
        <div style={container}>
          <LineExample />
        </div>
        <div style={container}>
          <BarExample />
        </div>
        <div style={container}>
          <PieExample />
        </div>
        <div style={container}>
          <DoughnutExample />

        </div>
      </div>
    );
  }
}

export default App;