import React, { useState } from 'react';
import { CoalData } from '../types/CoalData';

interface Props {
  data: CoalData[];
}

export const TopStatesTable: React.FC<Props> = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState<'2021-22' | '2022-23'>('2022-23');

  const sortedData = [...data].sort((a, b) => 
    selectedYear === '2022-23' 
      ? b.total_2022_23 - a.total_2022_23
      : b.total_2021_22 - a.total_2021_22
  ).slice(0, 5);

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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">State</th>
              <th className="px-4 py-2 border">Proved (MT)</th>
              <th className="px-4 py-2 border">Indicated (MT)</th>
              <th className="px-4 py-2 border">Inferred (MT)</th>
              <th className="px-4 py-2 border">Total (MT)</th>
              <th className="px-4 py-2 border">Distribution (%)</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((state) => (
              <tr key={state.state} className="hover:bg-gray-50">
                <td className="px-4 py-2 border font-medium">{state.state}</td>
                <td className="px-4 py-2 border text-right">
                  {selectedYear === '2022-23' 
                    ? state.proved_2022_23.toLocaleString()
                    : state.proved_2021_22.toLocaleString()}
                </td>
                <td className="px-4 py-2 border text-right">
                  {selectedYear === '2022-23'
                    ? state.indicated_2022_23.toLocaleString()
                    : state.indicated_2021_22.toLocaleString()}
                </td>
                <td className="px-4 py-2 border text-right">
                  {selectedYear === '2022-23'
                    ? state.inferred_2022_23.toLocaleString()
                    : state.inferred_2021_22.toLocaleString()}
                </td>
                <td className="px-4 py-2 border text-right font-semibold">
                  {selectedYear === '2022-23'
                    ? state.total_2022_23.toLocaleString()
                    : state.total_2021_22.toLocaleString()}
                </td>
                <td className="px-4 py-2 border text-right">
                  {selectedYear === '2022-23'
                    ? state.distribution_2022_23.toFixed(2)
                    : state.distribution_2021_22.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}