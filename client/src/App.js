import React, { useState } from 'react';
import TeamInput from './components/TeamInput';
import ScheduleDisplay from './components/ScheduleDisplay';
import { getSchedule } from './api';

function App() {
    const [matches, setMatches] = useState([]);
    const [favoriteTeams, setFavoriteTeams] = useState([]);

    const fetchMatches = async (teams) => {
        setFavoriteTeams(teams); // Save the team list
        try {
          const data = await getSchedule(teams);
          setMatches(data);
        } catch (error) {
          console.error('Error fetching schedule:', error);
        }
      };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>FRC Watchlist</h1>
      <TeamInput onSubmit={fetchMatches} />
      <ScheduleDisplay matches={matches} favoriteTeams={favoriteTeams} />
    </div>
  );
}

export default App;
