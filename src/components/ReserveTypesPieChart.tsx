import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { CoalData } from '../types/CoalData';

interface Props {
  data: CoalData[];
}

export const ReserveTypesPieChart: React.FC<Props> = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState<'2021-22' | '2022-23'>('2022-23');

  const totalProved = data.reduce((acc, curr) => 
    acc + (selectedYear === '2022-23' ? curr.proved_2022_23 : curr.proved_2021_22), 0);
  const totalIndicated = data.reduce((acc, curr) => 
    acc + (selectedYear === '2022-23' ? curr.indicated_2022_23 : curr.indicated_2021_22), 0);
  const totalInferred = data.reduce((acc, curr) => 
    acc + (selectedYear === '2022-23' ? curr.inferred_2022_23 : curr.inferred_2021_22), 0);

  const pieData = [
    { name: 'Proved', value: totalProved },
    { name: 'Indicated', value: totalIndicated },
    { name: 'Inferred', value: totalInferred },
  ];

  const COLORS = ['#2563eb', '#16a34a', '#dc2626'];

  const formatPercent = (value: number) => {
    const total = pieData.reduce((sum, item) => sum + item.value, 0);
    return `${((value / total) * 100).toFixed(1)}%`;
  };

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
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name} (${formatPercent(value)})`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value.toLocaleString()} MT`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}