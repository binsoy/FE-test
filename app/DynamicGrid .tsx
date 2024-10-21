import React, { useState, ChangeEvent } from 'react';
import { Grid, TextField, Button, Paper, Box, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface GridItem {
  id: string;
}

interface ArrowState {
  row: number;
  col: number;
  direction: 'north' | 'south' | 'east' | 'west';
}

const DynamicGrid: React.FC = () => {
  const [rows, setRows] = useState<number>(3);
  const [cols, setCols] = useState<number>(3);
  const [grid, setGrid] = useState<GridItem[]>([]);
  const [arrowInput, setArrowInput] = useState<string>('');
  const [arrowState, setArrowState] = useState<ArrowState | null>(null);

  const handleRowChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRows(Number(event.target.value));
  };

  const handleColChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCols(Number(event.target.value));
  };

  const handleArrowInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArrowInput(event.target.value);
  };

  const generateGrid = () => {
    const newGrid: GridItem[] = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        newGrid.push({
          id: `${i}-${j}`,
        });
      }
    }
    setGrid(newGrid);
    setArrowState(null); // Clear any existing arrow when generating a new grid
  };

  const addArrow = () => {
    const [coordStr, direction] = arrowInput.split(' ');
    const [row, col] = coordStr.split('.').map(Number);
    
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      alert('Invalid coordinates');
      return;
    }

    const validDirections = ['north', 'south', 'east', 'west'];
    if (!validDirections.includes(direction.toLowerCase())) {
      alert('Invalid direction. Use north, south, east, or west.');
      return;
    }

    setArrowState({
      row,
      col,
      direction: direction.toLowerCase() as ArrowState['direction']
    });
  };

  const ArrowIcon: React.FC<{ direction: ArrowState['direction'] }> = ({ direction }) => {
    switch (direction) {
      case 'north': return <ArrowUpwardIcon />;
      case 'south': return <ArrowDownwardIcon />;
      case 'east': return <ArrowForwardIcon />;
      case 'west': return <ArrowBackIcon />;
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid item>
          <TextField
            label="Rows"
            type="number"
            value={rows}
            onChange={handleRowChange}
            inputProps={{ min: 1 }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Columns"
            type="number"
            value={cols}
            onChange={handleColChange}
            inputProps={{ min: 1 }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={generateGrid}>
            Generate Grid
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Arrow (format: row.column direction)"
            value={arrowInput}
            onChange={handleArrowInputChange}
            placeholder="e.g., 0.0 south"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={addArrow}>
            Add Arrow
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {grid.map((item, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          const hasArrow = arrowState && arrowState.row === row && arrowState.col === col;

          return (
            <Grid item xs={12 / cols} key={item.id}>
              <Paper sx={{ p: 2, textAlign: 'center', position: 'relative', minHeight: '50px' }}>
                {hasArrow && (
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <ArrowIcon direction={arrowState.direction} />
                  </Box>
                )}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DynamicGrid;