import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCover from '../Components/MediaCover';
import Navigation from '../Components/Navigation.jsx';
import Button from '../Components/Button.jsx';
import Card from '../Components/Card.jsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <>

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <MediaCover/>
            </Grid>
            <Grid item xs={4}>
              <ol>
                <li> Import the Required CSS:  video player properly.</li>
                <li> Use the Imported Component: react-html5video.  </li>
              </ol>
            </Grid>
            <Grid item xs={6}>
                <div>
                    <Button/>
                </div>
            </Grid>
            <Grid item xs={6}>
                {/* <Card/> */}
            </Grid>
        </Grid>
        </Box>
    </>
  );
}
