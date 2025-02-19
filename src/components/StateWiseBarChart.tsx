import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CoalData } from '../types/CoalData';

interface Props {
  data: CoalData[];
}

export const StateWiseBarChart: React.FC<Props> = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState<'2021-22' | '2022-23'>('2022-23');

  const chartData = data.map(state => ({
    state: state.state,
    'Proved Reserves': selectedYear === '2022-23' ? state.proved_2022_23 : state.proved_2021_22,
    'Indicated Reserves': selectedYear === '2022-23' ? state.indicated_2022_23 : state.indicated_2021_22,
    'Inferred Reserves': selectedYear === '2022-23' ? state.inferred_2022_23 : state.inferred_2021_22
  }));

  return (
    <div className="w-full p-4">
      <div className="flex justify-end mb-4">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value as '2021-22' | '2022-23')}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="2022-23">2022-23</option>
          <option value="2021-22">2021-22</option>
        </select>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="state" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Proved Reserves" stackId="a" fill="#2563eb" />
            <Bar dataKey="Indicated Reserves" stackId="a" fill="#16a34a" />
            <Bar dataKey="Inferred Reserves" stackId="a" fill="#dc2626" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}