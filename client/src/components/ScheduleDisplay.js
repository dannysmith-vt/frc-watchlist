import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@mui/material';

const ScheduleDisplay = ({ matches, favoriteTeams }) => {
  if (matches.length === 0) return null;

  const now = new Date();
const upcomingMatches = matches.filter(m => new Date(m.startTime) > now);

  return (
    <Paper style={{ margin: 20, padding: 20 }}>
      <Typography variant="h6">Upcoming Matches</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Division</TableCell>
            <TableCell>Match</TableCell>
            <TableCell>Teams</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {upcomingMatches.map((match, idx) => (
            <TableRow key={idx}>
              <TableCell>
                {new Date(match.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </TableCell>
                <TableCell>
  <a
    href={`https://www.thebluealliance.com/gameday#chat=funroboticsnetwork&layout=0&view_0=2025${match.division.slice(0, 3).toLowerCase()}-0`}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}
  >
    {match.division}
  </a>
</TableCell>

              <TableCell>{match.description}</TableCell>
              <TableCell>
  {match.teams.map(t => {
    const isFav = favoriteTeams.includes(t.teamNumber);
    return (
      <span key={t.teamNumber} style={{ fontWeight: isFav ? 'bold' : 'normal', color: isFav ? '#1976d2' : 'inherit' }}>
        {t.teamNumber}
      </span>
    );
  }).reduce((prev, curr) => [prev, ', ', curr])}
</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ScheduleDisplay;
