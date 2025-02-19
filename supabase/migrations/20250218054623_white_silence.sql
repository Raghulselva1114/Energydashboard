/*
  # Create Coal Reserves Table

  1. New Tables
    - `coal_reserves`
      - `id` (uuid, primary key)
      - `state` (text)
      - `proved_2021_22` (numeric)
      - `proved_2022_23` (numeric)
      - `indicated_2021_22` (numeric)
      - `indicated_2022_23` (numeric)
      - `inferred_2021_22` (numeric)
      - `inferred_2022_23` (numeric)
      - `total_2021_22` (numeric)
      - `total_2022_23` (numeric)
      - `distribution_2021_22` (numeric)
      - `distribution_2022_23` (numeric)

  2. Security
    - Enable RLS on `coal_reserves` table
    - Add policy for authenticated users to read data
*/

CREATE TABLE IF NOT EXISTS coal_reserves (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  state text NOT NULL,
  proved_2021_22 numeric NOT NULL,
  proved_2022_23 numeric NOT NULL,
  indicated_2021_22 numeric NOT NULL,
  indicated_2022_23 numeric NOT NULL,
  inferred_2021_22 numeric NOT NULL,
  inferred_2022_23 numeric NOT NULL,
  total_2021_22 numeric NOT NULL,
  total_2022_23 numeric NOT NULL,
  distribution_2021_22 numeric NOT NULL,
  distribution_2022_23 numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE coal_reserves ENABLE ROW LEVEL SECURITY;

-- Create policy to allow reading data
CREATE POLICY "Allow public read access"
  ON coal_reserves
  FOR SELECT
  TO public
  USING (true);