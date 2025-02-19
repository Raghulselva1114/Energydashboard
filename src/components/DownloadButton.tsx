import React from 'react';
import { Download } from 'lucide-react';
import { CoalData } from '../types/CoalData';

interface Props {
  data: CoalData[];
}

export const DownloadButton: React.FC<Props> = ({ data }) => {
  const handleDownload = () => {
    const headers = [
      'State',
      'Proved 2021-22',
      'Proved 2022-23',
      'Indicated 2021-22',
      'Indicated 2022-23',
      'Inferred 2021-22',
      'Inferred 2022-23',
      'Total 2021-22',
      'Total 2022-23',
      'Distribution 2021-22 (%)',
      'Distribution 2022-23 (%)',
    ];

    const csvData = data.map((row) => [
      row.state,
      row.proved_2021_22,
      row.proved_2022_23,
      row.indicated_2021_22,
      row.indicated_2022_23,
      row.inferred_2021_22,
      row.inferred_2022_23,
      row.total_2021_22,
      row.total_2022_23,
      row.distribution_2021_22,
      row.distribution_2022_23,
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map((row) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'coal_reserves_data.csv';
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      <Download size={20} />
      Download Data (CSV)
    </button>
  );
}