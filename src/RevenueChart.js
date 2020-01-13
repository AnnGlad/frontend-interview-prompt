import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';


const data = [
  {
    name: '', usd: 400,
  },
  {
    name: 'Jan', usd: 400,
  },
  {
    name: 'Feb', usd: 1400,
  },
  {
    name: 'Mar', usd: 900,
  },
  {
    name: 'Apr', usd: 1200,
  },
  {
    name: 'May', usd: 1400,
  },
  {
    name: 'June', usd: 1000,
  },
  {
    name: 'Jul', usd: 1400,
  },
  {
    name: 'Aug', usd: 1600,
  },
  {
    name: 'Sep', usd: 2900,
  },
  {
    name: 'Oct', usd: 2500,
  },
  {
    name: 'Nov', usd: 2600,
  },
  {
    name: 'Dec', usd: 2200,
  },
];

export default class Example extends PureComponent {


  render() {
    return (
      <div style={{ width: '100%', height: 300, marginBottom: '2rem' }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10, right: 0, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area dataKey="usd" stroke="#75bde3" fill="#75bde3" strokeWidth="3" />
          </AreaChart>
        </ResponsiveContainer>
      </div >
    );
  }
}
