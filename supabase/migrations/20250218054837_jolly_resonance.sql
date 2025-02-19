/*
  # Insert Coal Reserves Data

  1. Data Population
    - Inserts coal reserves data for all states in India
    - Data includes reserves by type (Proved, Indicated, Inferred) for 2021-22 and 2022-23
    - Includes distribution percentages for each state
*/

INSERT INTO coal_reserves (
  state,
  proved_2021_22,
  proved_2022_23,
  indicated_2021_22,
  indicated_2022_23,
  inferred_2021_22,
  inferred_2022_23,
  total_2021_22,
  total_2022_23,
  distribution_2021_22,
  distribution_2022_23
) VALUES
  ('Andhra Pradesh', 921, 921, 901, 2443, 425, 778, 2247, 4142, 0.64, 1.15),
  ('Arunachal Pradesh', 31, 31, 40, 40, 19, 19, 90, 90, 0.03, 0.02),
  ('Assam', 465, 465, 57, 57, 3, 3, 525, 525, 0.15, 0.15),
  ('Bihar', 310, 310, 3143, 4080, 11, 48, 3464, 4437, 0.98, 1.23),
  ('Chhattisgarh', 31562, 32053, 40425, 40701, 1437, 1437, 73424, 74192, 20.85, 20.53),
  ('Jharkhand', 52046, 53245, 28882, 28260, 5288, 5155, 86217, 86660, 24.48, 23.98),
  ('Madhya Pradesh', 13479, 14052, 13060, 12723, 3678, 4142, 30217, 30917, 8.58, 8.55),
  ('Maharashtra', 7770, 7984, 3320, 3390, 1847, 1847, 12936, 13221, 3.67, 3.66),
  ('Meghalaya', 89, 89, 17, 17, 471, 471, 576, 576, 0.16, 0.16),
  ('Nagaland', 9, 9, 22, 22, 416, 448, 446, 478, 0.13, 0.13),
  ('Odisha', 43326, 48573, 35222, 34080, 6330, 5452, 84878, 88105, 24.10, 24.38),
  ('Sikkim', 0, 0, 58, 58, 43, 43, 101, 101, 0.03, 0.03),
  ('Uttar Pradesh', 884, 884, 178, 178, 0, 0, 1062, 1062, 0.30, 0.29),
  ('West Bengal', 15199, 17234, 13296, 12859, 4597, 3779, 33092, 33871, 9.40, 9.37),
  ('Telangana', 11089, 11257, 8328, 8344, 3433, 3433, 22851, 23034, 6.49, 6.37);