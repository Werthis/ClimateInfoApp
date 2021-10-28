import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';


import countries from '/home/janko/Dokumenty/PROGRAMY/React_web/moja-aplikacja/src/countries';



const App = () => {
  const [alignment, setAlignment] = useState('left');
  const [items, setItems] = useState([]);
  
  // useEffect(() => {
  //   document.title = `Naciśnięto ${count_1} oraz ${count_2} razy`;
  // });
          /// Czy mogę te useEffecty połączyć w jeden dla czystości kody?
  useEffect(() => {
    const url = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/pr/1920/1939/ITA"
    const fetchData = async () => {
      try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          setItems(json);
      } catch (error) {
          console.log("error", error);
      }
    };
  
    fetchData();
  },
  []);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent: "center",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

 {
  const classes = useStyles();
  
    return (
      <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=6</Paper>

        </Grid>
        <Grid item xs={6}>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRightIcon />
            </ToggleButton>
          </ToggleButtonGroup>  
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>      
    );
  };
}

export default App;
