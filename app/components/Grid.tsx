import React from 'react';
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { GridPropTypes } from "../utils/Types";
import ArrowIcon from './ArrowIcon';
import { ConstantValues } from '../utils/Constants';

const TheGrid: React.FC<GridPropTypes> = ({ position }) => {

  const renderGrid = () => {
    const gridItems = [];
    // these loops are being used to achieve the bottom left of the Grid (0,0) to be South West
    for (let row = ConstantValues.ROWS - 1; row >= 0; row--) {
      for (let col = 0; col < ConstantValues.COLS; col++) {
        const isObjectHere = col === position.row && row === position.col;
        gridItems.push(
          <Grid size={{ xs:(12 / ConstantValues.COLS) }} key={`${col}-${row}`}>
            <Paper className='relative text-center min-h-24 p-16'>
              {isObjectHere && (<Box className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' >
                <ArrowIcon direction={position.direction} />
              </Box>)}
            </Paper>
          </Grid>
        );
      }
    }

    return gridItems;
  }
  
  return (<Grid container spacing={2} className='mt-7' >{renderGrid()}</Grid>);
}

export default TheGrid;