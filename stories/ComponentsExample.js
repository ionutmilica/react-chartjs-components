import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import LineExample from '../examples/components/LineExample';
import BarExample from '../examples/components/BarExample';
import PieExample from '../examples/components/PieExample';
import DoughnutExample from '../examples/components/DoughnutExample';

storiesOf('Examples', module)
  .add('Line chart', () => (
    <LineExample />
  ))
  .add('Bar chart', () => (
    <BarExample />
  ))
  .add('Pie chart', () => (
    <PieExample />
  ))
  .add('Doughnut chart', () => (
    <DoughnutExample />
  ));
