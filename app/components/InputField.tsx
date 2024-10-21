import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { TextField } from '@mui/material';
import CustomAlert from './Alert';
import { Position, ValidationReturnTypes } from '../utils/Types';
import { validateInput } from '../utils/validation';
import { ConstantValues } from '../utils/Constants';

const InputField: React.FC<{ inputChange: (position: Position) => void }> = ({ inputChange }) => {
  const [message, setMessage] = useState<string>(ConstantValues.EMPTY_STRING);
  const [error, setError] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validatedInput: ValidationReturnTypes = validateInput(e.target.value);
    setMessage(validatedInput.message);
    setError(validatedInput.invalid);
    inputChange(validatedInput.position);
  };
  
  return (<Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Enter coordinates and position (ex: 0,2 north)"
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid size={12}>
              <CustomAlert error={error} message={message} />
            </Grid>
          </Grid>);
 }

 export default InputField;