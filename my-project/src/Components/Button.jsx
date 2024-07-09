import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 3 } }}>
      <div className='mt-5'>
        <Button variant="outlined" size="large">
          Large
        </Button>
        <Button variant="outlined" size="large">
          Makan
        </Button>
        <Button variant="outlined" size="large">
          Minum
        </Button>
        <Button variant="outlined" size="large">
          Tidur
        </Button>
      </div>
    </Box>
  );
}


