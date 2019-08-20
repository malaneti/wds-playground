import React from 'react';
import {
  Card,
  Typography,
} from '@sm/wds-react';

import {
  BarVertical,
  Chart,
  Line,
  XAxis,
  YAxis,
  XGridLines,
  Legend,
  Pie,
} from '@sm/wds-charts';

import Page from '../../components/page';
import logo from '../../assets/logo.svg';

import '@sm/wds-react/dist/components/Card/card.scss';
import '@sm/wds-react/dist/components/Typography/type.scss';
import '@sm/wds-charts/dist/wds-charts.3_2_1.min.css';


const lineData = [
  {
    title: 'One',
    data: [
      { x: 'Jan 2019', y: 1 },
      { x: 'Feb 2019', y: 3 },
      { x: 'Mar 2019', y: 6 },
      { x: 'Apr 2019', y: 7 }
    ]
  }
];

const barData = [
  {
    data: [
      { x: 'Item One', y: 8.345235 },
      { x: 'Item Two', y: 5.3456456 },
      { x: 'Item Three', y: 4.3456346 },
      { x: 'Item Four', y: 9.34563456 },
      { x: 'Item Five', y: 10, label: 'TEN' },
      { x: 'Item Six', y: 7.34563456 },
      { x: 'Item Seven', y: 6.34563456 },
      { x: 'Item Eight', y: 3.34563456 },
      { x: 'Item Nine', y: 2.34563465 },
      { x: 'Item Ten', y: 10.34563456 }
    ]
  }
];

const pieData = [
  {
    title: 'Blue',
    angle: 40,
    label: '40%',
  },
  {
    title: 'Green',
    angle: 30,
    label: '30%',
  },
  {
    title: 'Teal',
    angle: 20,
    label: '20%',
  },
  {
    title: 'Yellow',
    angle: 10,
    label: '10%',
  },
];

export default () => (
  <Page id="homepage">
    <p>Here's our homepage. All are welcome.</p>
    <img src={logo} alt="Homepage" style={{ width: '400px' }} />
    <Card>
      <Chart>
        <Line data={lineData}>
          <XAxis />
          <YAxis />
          <XGridLines />
        </Line>
        <Legend data={lineData} placement='right' title='Legend' />
      </Chart>
    </Card>

    <Card>
      <Chart>
        <BarVertical data={barData}>
          <XAxis />
          <YAxis />
          <XGridLines />
        </BarVertical>
      </Chart>
    </Card>

    <Card style={{ maxWidth: '520px', margin: '0 auto' }}>
      <Typography variant="sectionTitle">
        Title
      </Typography>
      <Chart>
        <Pie data={pieData} />
        <Legend data={pieData} title="Legend" placement="right" />
      </Chart>
    </Card>
  </Page>
);
