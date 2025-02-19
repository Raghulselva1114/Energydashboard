import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { CoalData } from './types/CoalData';
import { StateWiseBarChart } from './components/StateWiseBarChart';
import { ReserveTypesPieChart } from './components/ReserveTypesPieChart';
import { TopStatesTable } from './components/TopStatesTable';
import { DownloadButton } from './components/DownloadButton';
import { BarChart3, PieChart, Table } from 'lucide-react';

// Initialize Supabase client with environment variable check
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables'
  );
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const [data, setData] = useState<CoalData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: coalData, error } = await supabase
          .from('coal_reserves')
          .select('*');

        if (error) throw error;
        setData(coalData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Coal Reserves Dashboard
            </h1>
            <DownloadButton data={data} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-2 p-4 border-b">
              <BarChart3 className="text-blue-600" />
              <h2 className="text-xl font-bold">State-wise Analysis</h2>
            </div>
            <StateWiseBarChart data={data} />
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-2 p-4 border-b">
              <PieChart className="text-blue-600" />
              <h2 className="text-xl font-bold">Reserve Types Distribution</h2>
            </div>
            <ReserveTypesPieChart data={data} />
          </div>

          <div className="bg-white rounded-lg shadow-md md:col-span-2">
            <div className="flex items-center gap-2 p-4 border-b">
              <Table className="text-blue-600" />
              <h2 className="text-xl font-bold">Top States Overview</h2>
            </div>
            <TopStatesTable data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;