import React, { useState, useEffect } from "react";
// import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import TodayIcon from "@material-ui/icons/Today";
import CachedIcon from "@material-ui/icons/Cached";

import rainLogo from "./rain.png";
import tempLogo from "./temp.png";

import allAppData from "./allAppData";

// wstawić value do autocoplete country
// poprawić setValue
// zamienić left na wartość 
// zmapować kod kraju iso

const App = () => {
  const [precipitationTemp, setPrecipitationTemp] = useState("left");
  const [monthlyOrAnnual, setMonthlyOrAnnual] = useState("left");
  // const [items, setItems] = useState([]);
  const [choosePeriod, setValue] = useState(allAppData.period[0]);
  const [inputValue, setInputValue] = useState("");

  let [startYear, endYear] = choosePeriod.split(" - ");

  const getUrl = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/${monthlyOrAnnual}/${precipitationTemp}/${startYear}/${endYear}/ITA`;
  console.log(getUrl);

  useEffect(() => {
    console.log(
      "monthlyOrAnnual_changed",
      monthlyOrAnnual,
      "variable_changed",
      precipitationTemp
    );
    console.log("choosePeriod changed", choosePeriod, startYear, endYear);
  }, [monthlyOrAnnual, precipitationTemp, choosePeriod, startYear, endYear]);

  // useEffect(() => {
  //   const url = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/pr/1920/1939/ITA"
  //   const fetchData = async () => {
  //     try {
  //         const response = await fetch(url);
  //         const json = await response.json();
  //         console.log(json);
  //         setItems(json);
  //     } catch (error) {
  //         console.log("error", error);
  //     }
  //   };

  //   fetchData();
  // },
  // []);

  const handlePrecipitationTemp = (event, newPrecipitationTemp) => {
    if (newPrecipitationTemp !== null) {
      setPrecipitationTemp(newPrecipitationTemp);
    }
  };

  const handleMonthlyOrAnnual = (event, newMonthlyOrAnnual) => {
    if (newMonthlyOrAnnual !== null) {
      setMonthlyOrAnnual(newMonthlyOrAnnual);
    }
  };

  const countryToFlag = (isoCode) => {
    return typeof String.fromCodePoint !== "undefined"
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          )
      : isoCode;
  };

  const mapingCountries = allAppData.countries.map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent: "space-evenly",
      fontSize: 50,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      background: "#fffff0",
    },
    button: {
      background: "#fffff0",
    },
    select: {
      background: "#fffff0",
    },
    option: {
      fontSize: 15,
      "& > span": {
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
          <style>{"body { background-color: #ffffe0 ; }"}</style>
          <Grid item sm={12}>
            <Paper className={classes.paper}>Climate data</Paper>
          </Grid>
          <Grid item sm={12} container spacing={0} className={classes.root}>
            <ToggleButtonGroup
              value={precipitationTemp}
              exclusive
              onChange={handlePrecipitationTemp}
              aria-label="text variable" // ??????
            >
              <ToggleButton
                value="left"
                aria-label="left aligned"
                className={classes.button}
              >
                <img src={rainLogo} alt="rainLogo" width="36" height="36" />
                Precipitation
              </ToggleButton>
              <ToggleButton
                value="right"
                aria-label="right aligned"
                className={classes.button}
              >
                <img src={tempLogo} alt="tempLogo" width="36" height="36" />{" "}
                Temperature
              </ToggleButton>
            </ToggleButtonGroup>

            <Autocomplete
              className={classes.select}
              id="country-select"
              style={{ width: 300 }}
              options={mapingCountries.sort(
                (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
              )}
              groupBy={(option) => option.firstLetter}
              classes={{
                option: classes.option,
              }}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(option) => (
                <React.Fragment>
                  <span>{countryToFlag(option.code)}</span>
                  {option.label} ({option.code}) + {option.phone}
                </React.Fragment>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select a country"
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>

          <Grid item sm={12} container spacing={0} className={classes.root}>
            <ToggleButtonGroup
              value={monthlyOrAnnual}
              exclusive
              onChange={handleMonthlyOrAnnual}
              aria-label="text monthlyOrAnnual"
            >
              <ToggleButton
                value="left"
                aria-label="left aligned"
                className={classes.button}
              >
                <TodayIcon />
                Monthly average
              </ToggleButton>
              <ToggleButton
                value="right"
                aria-label="right aligned"
                className={classes.button}
              >
                <CachedIcon />
                Annual average
              </ToggleButton>
            </ToggleButtonGroup>

            <Autocomplete
              className={classes.select}
              value={choosePeriod}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={allAppData.period}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a period"
                  variant="outlined"
                />
              )}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default App;
