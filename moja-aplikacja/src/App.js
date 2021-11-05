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

// zrobić plik json od Stasia
// wypisać:
// model:
// wartości (zaokrąglić dane 2 miejsca po przecinku):
// 1. ....
// zrobić żeby było ładne

const ModelResults = (props) => {
  return (
    <>
      {props.from} <br /> Model: {JSON.stringify(props.item.gcm)} <br />
      {JSON.stringify(props.item.monthVals)}
    </>
  );
};

const App = () => {
  const [precipitationTemp, setPrecipitationTemp] = useState("pr");
  const [monthlyOrAnnual, setMonthlyOrAnnual] = useState("mavg");
  const [items, setItems] = useState([]);
  const [period, setPeriod] = useState(allAppData.period[0]);
  const [inputPeriod, setInputPeriod] = useState("");
  const [country, setCountry] = useState(allAppData.mapingCountries[0]);
  const [inputCountry, setInputCountry] = useState("");

  let [startYear, endYear] = period.split(" - ");

  // { code: "AD", label: "Andorra", phone: "376" }

  // useEffect(() => {
  //   console.log(
  //     // "monthlyOrAnnual_changed",
  //     // monthlyOrAnnual,
  //     // "period_changed",
  //     // precipitationTemp,
  //     "country_changed",
  //     country
  //   );
  //   // console.log("choosePeriod changed", period, startYear, endYear);
  // }, [monthlyOrAnnual, precipitationTemp, period, startYear, endYear, country]);

  useEffect(() => {
    const getUrl = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/${monthlyOrAnnual}/${precipitationTemp}/${startYear}/${endYear}/${country.code}`;
    const fetchData = async () => {
      try {
        const response = await fetch(getUrl);
        const json = await response.json();
        console.log(json);
        setItems(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    console.log(getUrl);
    fetchData();
  }, [monthlyOrAnnual, precipitationTemp, period, startYear, endYear, country]); // jeśli te wartości z tej tablicy się zmienią to ten useEffect się wywoła

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
                value="pr"
                aria-label="left aligned"
                className={classes.button}
              >
                <img src={rainLogo} alt="rainLogo" width="36" height="36" />
                Precipitation
              </ToggleButton>
              <ToggleButton
                value="tas"
                aria-label="right aligned"
                className={classes.button}
              >
                <img src={tempLogo} alt="tempLogo" width="36" height="36" />{" "}
                Temperature
              </ToggleButton>
            </ToggleButtonGroup>

            <Autocomplete
              className={classes.select}
              value={country}
              onChange={(event, newCountry) => {
                setCountry(newCountry);
              }}
              inputValue={inputCountry}
              onInputChange={(event, newInputCountry) => {
                setInputCountry(newInputCountry);
              }}
              id="country-select"
              style={{ width: 300 }}
              options={allAppData.mapingCountries}
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
                value="mavg"
                aria-label="left aligned"
                className={classes.button}
              >
                <TodayIcon />
                Monthly average
              </ToggleButton>
              <ToggleButton
                value="annualavg"
                aria-label="right aligned"
                className={classes.button}
              >
                <CachedIcon />
                Annual average
              </ToggleButton>
            </ToggleButtonGroup>

            <Autocomplete
              className={classes.select}
              value={period}
              onChange={(event, newPeriod) => {
                setPeriod(newPeriod);
              }}
              inputValue={inputPeriod}
              onInputChange={(event, newInputPeriod) => {
                setInputPeriod(newInputPeriod);
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

        {items.map((item) => (
          <ModelResults key={item.gcm} item={item} />
        ))}
      </div>
    );
  }
};

export default App;
