const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const BASE_URL = 'https://frc-api.firstinspires.org/v3.0/2025';
const divisions = [
    'ARCHIMEDES', 'CURIE', 'GALILEO', 'HOPPER',
    'JOHNSON', 'NEWTON', 'DALY', 'MILSTEIN'
  ];

const authHeaders = {
  Authorization: 'Basic ' + Buffer.from(`${process.env.FRC_USER}:${process.env.FRC_KEY}`).toString('base64'),
};


app.post('/api/schedule', async (req, res) => {
  const favoriteTeams = req.body.teams; // example: [254, 1678]
  let allMatches = [];

  for (const division of divisions) {
    try {
      const url = `${BASE_URL}/schedule/${division}/qual`;
      const response = await fetch(url, { headers: authHeaders });

if (!response.ok) {
  const text = await response.text();
  console.error(`Error fetching ${division}: ${response.status} ${response.statusText}`);
  console.error(`Response body: ${text}`);
  continue; // skip this division
}

let data;
try {
  data = await response.json();
} catch (err) {
  console.error(`JSON parse error for ${division}:`, err);
  continue;
}


      const matches = data.Schedule.filter(match =>
        match.teams.some(t => favoriteTeams.includes(t.teamNumber))
      ).map(m => ({ ...m, division }));

      allMatches = allMatches.concat(matches);
    } catch (err) {
      console.error(`Error fetching ${division}:`, err);
    }
  }

  allMatches.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
  res.json(allMatches);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
