import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '', uv: 0,
  },
  {
    name: '2 May', uv: 850,
  },
  {
    name: '4 May', uv: 1100,
  },
  {
    name: '6 May', uv: 2000,
  },
  {
    name: '8 May', uv: 2780,
  },
  {
    name: '10 May', uv: 1890,
  },
  {
    name: '12 May', uv: 3200,
  },
  {
    name: '14 May', uv: 3800,
  },
  {
    name: '16 May', uv: 2500,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <div style={{ width: '100%', height: 380 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#75bde3" fill="#7fdafb" fillOpacity="1" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
