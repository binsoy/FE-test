import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Position } from '../utils/Types';
import MyGrid from '../components/Grid';
import { ConstantValues } from '../utils/Constants';
import CustomAlert from '../components/Alert';


const Home: React.FC = () => {

  const [position, setPosition] = useState<Position>({});
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value) {
      const [coordStr, direction] = e.target.value.split(' ');
      const [row, col] = coordStr.split(',').map(Number);
  
      // Validate that the coordinates are within the grid bounds
      const validDirections = ['north', 'south', 'east', 'west'];
      if (!isNaN(row) && !isNaN(col) && row >= 0 && row < ConstantValues.COLS && col >= 0 && col < ConstantValues.ROWS) {
        if (!validDirections.includes(direction && direction.toLowerCase())) {
          setMessage('Invalid direction. Use north, south, east, or west.')
          setError(true);
          setPosition({});
          return;
        } else {
          setError(false);
          setPosition({ row, col, direction: direction.toLowerCase() as Position['direction'] });
        }
      } else {
        setMessage('Coordinates are out of bounds or invalid!')
        setError(true);
        setPosition({});
      }
    } else {
      setMessage('Please input coordinates')
      setError(true);
      setPosition({});
    }
  };

  return (
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Enter coordinates and position (ex: 0,2 north)"
              variant="outlined"
              onChange={handleInputChange}
              style={{ marginBottom: '20px' }}
            />
          </Grid>
          <Grid size={12}>
            <CustomAlert error={error} message={message} />
          </Grid>
        </Grid>
        <MyGrid position={position}/>
      </Box>
  );
};

export default Home;
