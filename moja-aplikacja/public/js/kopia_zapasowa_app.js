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
import { DataGrid } from "@material-ui/data-grid";

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
  const listOfMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const list_bccr_bcm2_0 = [];
  const list_cccma_cgcm3_1 = [];
  const list_cnrm_cm3 = [];
  const list_csiro_mk3_5 = [];
  const list_gfdl_cm2_0 = [];
  const list_gfdl_cm2_1 = [];
  const list_ingv_echam4 = [];
  const list_inmcm3_0 = [];
  const list_ipsl_cm4 = [];
  const list_miroc3_2_medres = [];
  const list_miub_echo_g = [];
  const list_mpi_echam5 = [];
  const list_mri_cgcm2_3_2a = [];
  const list_ukmo_hadcm3 = [];
  const list_ukmo_hadgem1 = [];

  const listOfModels = [];
  const listaPomocnicza = [];
  const columns = [{ field: "month", headerName: "Month", width: 150 }];
  const row = [];

  // const rows = [];
  const rows = [];

  props.items.map((Object) => {
    listOfModels.push(Object.gcm);
    rows.push(Object.monthVals);

    return rows;
  });
  console.log("rows!!", rows);
  console.log("1st ROW!!", rows[0]);
  for (let i = 0; i < rows.length; i++) {
    columns.push({
      field: listOfModels[i],
      headerName: listOfModels[i],
      width: 150,
      editable: true,
    });
  }

  const row_pierwszy = rows[0];
  for (let i = 0; i < rows.length; i++) {}

  console.log("row_pierwszy", row_pierwszy);

  list_bccr_bcm2_0.push(rows[0]);
  console.log("lista bcc", list_bccr_bcm2_0);
  list_cccma_cgcm3_1.push(rows[1]);
  console.log("lista ccc", list_cccma_cgcm3_1);

  list_cnrm_cm3.push(rows[2]);
  list_csiro_mk3_5.push(rows[3]);
  list_gfdl_cm2_0.push(rows[4]);
  list_gfdl_cm2_1.push(rows[5]);
  list_ingv_echam4.push(rows[6]);
  list_inmcm3_0.push(rows[7]);
  list_ipsl_cm4.push(rows[8]);
  list_miroc3_2_medres.push(rows[9]);
  list_miub_echo_g.push(rows[10]);
  list_mpi_echam5.push(rows[11]);
  list_mri_cgcm2_3_2a.push(rows[12]);
  list_ukmo_hadcm3.push(rows[13]);
  list_ukmo_hadgem1.push(rows[14]);
  // rows.map((item) => {
  //   for (var i = 0; i < item.length; i++) {
  //     console.log(item[i], listOfMonths[i]);
  //   }
  //   console.log("-----------------------------------");
  // });
  for (let i = 0; i < listOfMonths.length; i++) {
    row.push({
      id: i,
      month: listOfMonths[i],
      bccr_bcm2_0: list_bccr_bcm2_0[i],
      cccma_cgcm3_1: list_cccma_cgcm3_1[i],
      cnrm_cm3: list_cnrm_cm3[i],
      csiro_mk3_5: list_csiro_mk3_5[i],
      gfdl_cm2_0: list_gfdl_cm2_0[i],
      gfdl_cm2_1: list_gfdl_cm2_1[i],
      ingv_echam4: list_ingv_echam4[i],
      inmcm3_0: list_inmcm3_0[i],
      ipsl_cm4: list_ipsl_cm4[i],
      miroc3_2_medres: list_miroc3_2_medres[i],
      miub_echo_g: list_miub_echo_g[i],
      mpi_echam5: list_mpi_echam5[i],
      mri_cgcm2_3_2a: list_mri_cgcm2_3_2a[i],
      ukmo_hadcm3: list_ukmo_hadcm3[i],
      ukmo_hadgem1: list_ukmo_hadgem1[i],
    });
  }
  console.log(row);

  console.log(columns);
  // for (var i = 0; i < rows.length; i++) {
  //   for (var j = 0; j < listOfMonths.length; j++) {}
  // }

  const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 4,
      borderRadius: 3,
      justifyContent: "space-evenly",
      fontSize: 16,
      direction: "row",
    },
    paper: {
      height: 140,
      width: 100,
      fontSize: 15,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  // const
  const classes = useStyles();
  return (
    // monthValuesArray,

    <>
      <div style={{ height: 400, width: "100%" }}>
        <Grid container>
          <DataGrid
            item="true"
            className={classes.root}
            rows={row}
            columns={columns}
            autoHeight="true"
            disableColumnFilter="true"
            disableColumnMenu="true"
            disableColumnSelector="true"
            disableDensitySelector="true"
            disableExtendRowFullWidth="true"
            disableSelectionOnClick="true"
            // pageSize={12}
            // checkboxSelection
            // disableSelectionOnClick
          />
        </Grid>
      </div>
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
    // console.log(getUrl);
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

  // const allMonthsValues = [];

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
        <Grid container alignItems="center">
          <Grid container direction="row" spacing={0}>
            <ModelResults key={items.gcm} items={items} />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default App;
