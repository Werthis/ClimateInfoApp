import React, { useState, useEffect } from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import TodayIcon from '@material-ui/icons/Today';
import CachedIcon from '@material-ui/icons/Cached';

import rain_logo from './rain.png'
import temp_logo from './temp.png'

import Weather_data from './weather_data';



const App = () => {
  const [variable, setVariable] = useState('left');
  const [type, setType] = useState('left');
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   document.title = `Naciśnięto ${count_1} oraz ${count_2} razy`;
  // });

          /// Czy mogę te useEffecty połączyć w jeden dla czystości kody?
  const getUrl = "http://climatedataapi.worldbank.org/climateweb/rest/v1/{country}/{mavg}/{pr}/{1920}/{1939}/{ITA}"

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

  const handleVariable = (event, newVariable) => {
    if (newVariable !== null) {
      setVariable(newVariable);
    }
  };

  const handleType = (event, newType) => {
    if (newType !== null) {
      setType(newType);
    }
  };

  const countryToFlag = (isoCode) => {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  };
  
  const maping_countries = Weather_data.countries.map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent: "space-evenly",
      fontSize: 50
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: '#fffff0'
    },
    button: {
      background: '#fffff0',
    },
    select: {
      background: '#fffff0',
    },
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 100,
        fontSize: 18,
      },
    },
  }));

 {
  const classes = useStyles();
  
    return (
      <div className={classes.root}>
      <Grid container spacing={3}>
        <style>{'body { background-color: #ffffe0 ; }'}</style>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            Climate data
          </Paper>
        </Grid>
        <Grid item sm={12} container spacing={0} className={classes.root}>
          <ToggleButtonGroup
            value={variable}
            exclusive
            onChange={handleVariable}
            aria-label="text variable"      // ??????
          >
            <ToggleButton value="left" aria-label="left aligned" className={classes.button}>
              <img src={rain_logo} alt="rain_logo" width= '36' height= '36' />
              Precipitation
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned" className={classes.button}>
              <img src={temp_logo} alt="temp_logo" width= '36' height= '36' />              Temperature
            </ToggleButton>
          </ToggleButtonGroup>  
          <Autocomplete
            className={classes.select}
            id="country-select"
            style={{ width: 300 }}
            options={maping_countries.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.label}
                  classes={{
              option: classes.option,
            }}
            autoHighlight
            renderOption={(option) => (
              <React.Fragment>
                <span>{countryToFlag(option.code)}</span>
                {option.label} ({option.code}) +{option.phone}
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select a country"
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />        
        </Grid>

        <Grid item sm={12} container spacing={55} className={classes.root}>
          <ToggleButtonGroup
            className={classes.button}
            value={type}
            exclusive
            onChange={handleType}
            aria-label="text type"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <TodayIcon />
              Monthly average
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <CachedIcon />
                Annual average
            </ToggleButton>
          </ToggleButtonGroup>  

          <div>
            <Autocomplete
              className={classes.select}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={Weather_data.period_variables}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Choose a period" variant="outlined" />}
            />
          </div>
        </Grid>
      </Grid>
    </div>
    );
  };
}

export default App;
