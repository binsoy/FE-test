import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Position } from '../utils/Types';
import TheGrid from '../components/Grid';
import InputField from '../components/InputField';

const Home: React.FC = () => {
  const [position, setPosition] = useState<Position>({});

  // Handle input change
  const inputChangeCallback = (position: Position) => {
    setPosition(position);
  };

  return (
      <Box sx={{ p: 2 }}>
        <InputField inputChange={inputChangeCallback} />
        <TheGrid position={position} />
      </Box>
  );
};

export default Home;
