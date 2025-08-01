'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', feedbacks: 5 },
  { name: 'Feb', feedbacks: 9 },
  { name: 'Mar', feedbacks: 4 },
];

export default function Chart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="feedbacks" stroke="#8884d8" />
    </LineChart>
  );
}
