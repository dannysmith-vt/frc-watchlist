import React, { useState } from 'react';
import { TextField, Button, Chip, Stack } from '@mui/material';

const TeamInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const [teams, setTeams] = useState([]);

  const handleAdd = () => {
    const team = parseInt(input);
    if (!isNaN(team) && !teams.includes(team)) {
      setTeams([...teams, team]);
    }
    setInput('');
  };

  const handleDelete = (team) => {
    setTeams(teams.filter(t => t !== team));
  };

  return (
    <div style={{ padding: 20 }}>
      <TextField
        label="Enter Team #"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />
      <Button onClick={handleAdd} style={{ marginLeft: 10 }} variant="contained">
        Add
      </Button>

      <Stack direction="row" spacing={1} style={{ marginTop: 10, flexWrap: 'wrap' }}>
        {teams.map((team) => (
          <Chip key={team} label={team} onDelete={() => handleDelete(team)} />
        ))}
      </Stack>

      <Button
        variant="outlined"
        onClick={() => onSubmit(teams)}
        disabled={teams.length === 0}
        style={{ marginTop: 20 }}
      >
        Get Schedule
      </Button>
    </div>
  );
};

export default TeamInput;
