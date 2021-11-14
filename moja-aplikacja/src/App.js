import React, { useState, useEffect } from "react";
// import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import TodayIcon from "@material-ui/icons/Today";
import CachedIcon from "@material-ui/icons/Cached";
import Typography from "@material-ui/core/Typography";
import { borders } from "@material-ui/system";
import { DataGrid } from "@material-ui/data-grid";

import rainLogo from "./rain.png";
import tempLogo from "./temp.png";

import allAppData from "./allAppData";

//    zrobić uniwersalne też dla annual     ?????????????? jak zmienić na annual żeby się nie wykrzaczyło????
// poprawić czcionkę select country, choose period i tabeli
// zrobić zaokrąglenie do 2 miejsca po przecinku ---------- wychodzi error przy annual
// .toFixed(2)
//          popraw listę iso_3

// jak zmienić na annual żeby się nie wykrzaczyło????
// Dlaczego w consoli każdy element wyświetla się kilka razy
// jak zmienić font w tabeli, co definiuje font Climate data?

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
  const annualWord = ["Annual"];

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
  const listaPomocnicza2 = [];
  const columns = [{ field: "model", headerName: "Model", width: 110 }];
  const row = [];
  const rows = [];
  var lenghtOfMonthsOrAnnual = 0;
  var monthsOrAnnual = [];

  props.items.map((Object) => {
    listOfModels.push(Object.gcm);
    if (Object.monthVals != null) {
      rows.push(Object.monthVals);
      lenghtOfMonthsOrAnnual = Object.monthVals.length;
    } else {
      rows.push(Object.annualData);
      lenghtOfMonthsOrAnnual = Object.annualData.length;
    }

    return rows, lenghtOfMonthsOrAnnual;
  });
  if (lenghtOfMonthsOrAnnual === 12) {
    monthsOrAnnual = listOfMonths;
  } else {
    monthsOrAnnual = annualWord;
  }

  console.log("------------------------");

  console.log("lenghtOfMonthsOrAnnual:");

  console.log(lenghtOfMonthsOrAnnual);

  for (let i = 0; i < rows.length; i++) {
    columns.push({
      field: listOfModels[i],
      headerName: listOfModels[i],
      width: 100,
      editable: true,
    });
  }
  console.log("------------------------");

  console.log("ROWS:");
  console.log(rows);
  console.log("monthsOrAnnual:");
  console.log(monthsOrAnnual);

  // const row_pierwszy = rows[0];
  // for (let i = 0; i < rows.length; i++) {}
  // console.log("row_pierwszy", row_pierwszy);

  for (let j = 0; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_bccr_bcm2_0.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 1; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_cccma_cgcm3_1.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 2; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_cnrm_cm3.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 3; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_csiro_mk3_5.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 4; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_gfdl_cm2_0.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 5; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_gfdl_cm2_1.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 6; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_ingv_echam4.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 7; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_inmcm3_0.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 8; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_ipsl_cm4.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 9; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_miroc3_2_medres.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 10; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_miub_echo_g.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 11; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_mpi_echam5.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 12; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_mri_cgcm2_3_2a.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 13; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_ukmo_hadcm3.push(rows[j][i].toFixed(2));
    }
  }
  for (let j = 14; j < rows.length; j++) {
    for (let i = 0; i < monthsOrAnnual.length; i++) {
      list_ukmo_hadgem1.push(rows[j][i].toFixed(2));
    }
  }

  // if (row_pierwszy.length === 1) {
  //   monthsOrAnnual = annualWord;
  // }

  // rows.map((item) => {
  //   for (var i = 0; i < item.length; i++) {
  //     console.log(item[i], listOfMonths[i]);
  //   }
  //   console.log("-----------------------------------");
  // });
  // map(item)
  //  for i in item.lengfht:

  for (let i = 0; i < monthsOrAnnual.length; i++) {
    row.push({
      id: i,
      model: monthsOrAnnual[i],
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
      background: "#ffffe0",
      fontFamily: "Calibri",
      textAlign: "center",
      border: 4,
      borderRadius: 3,
      justifyContent: "space-evenly",
      fontSize: 16,
      direction: "row",
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
      <div style={{ height: 400, width: 1610 }}>
        <Grid container>
          {/* <Box border={1} /> */}
          <DataGrid
            fontFamily="Calibri"
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
          {/* <Box /> */}
        </Grid>
      </div>
    </>
  );
};

const App = () => {
  const [precipitationTemp, setPrecipitationTemp] = useState("pr");
  const [monthlyOrAnnual, setMonthlyOrAnnual] = useState("mavg");
  const [items, setItems] = useState([]);
  const [period, setPeriod] = useState(allAppData.period[4]);
  const [inputPeriod, setInputPeriod] = useState("");
  const [country, setCountry] = useState(allAppData.mapingCountries[179]);
  const [inputCountry, setInputCountry] = useState("");
  // const [forTextPrecipitationTemp, setForTextPrecipitationTemp] =
  //   useState("precipitation");
  // const [forTextMonthlyOrAnnual, setForTextMonthlyOrAnnual] =
  //   useState("monthly");

  var forTextPrecipitationTemp = "";
  var forTextMonthlyOrAnnual = "";

  let [startYear, endYear] = period.split(" - ");

  if (precipitationTemp === "pr") {
    forTextPrecipitationTemp = "precipitation";
  } else {
    forTextPrecipitationTemp = "temperature";
  }
  if (monthlyOrAnnual === "mavg") {
    forTextMonthlyOrAnnual = "monthly";
  } else {
    forTextMonthlyOrAnnual = "annual";
  }

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

    titleText: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      background: "#fffff0",
    },
    infoText: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      background: "#fffff0",
      fontSize: 22,
    },
    infoTextCurrent: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      background: "#ffffe0",
      fontSize: 22,
    },

    button: {
      background: "#fffff0",
    },
    select: {
      color: theme.palette.text.secondary,
      background: "#fffff0",
      fontFamily: "Calibri",
      closeIcon: "false",
    },
    textField: {
      fontFamily: "Calibri",
    },
    option: {
      fontSize: 15,
      fontFamily: "Calibri",
      "& > span": {
        marginRight: 100,
        fontSize: 18,
      },
    },
    styleModelResults: {
      // // background: "linear-gradient(45deg, #fffff0 30%, #ffffe0 90%)",
      // // fontFamily: "Calibri",
      // textAlign: "center",
      // // border: 4,
      // // borderRadius: 3,
      // justifyContent: "space-evenly",
    },
  }));

  {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <style>{"body { background-color: #ffffe0 ; }"}</style>
          <Grid item sm={12}>
            <Paper className={classes.titleText}>Climate info App</Paper>
            <Paper className={classes.infoText}>
              Welcome to Climate info App
              <br /> It is using Climate Data API from The World Bank website,
              which is pretty cool stuff. The App gives you access to climat
              data all over the world.
              <br />
              You can get data from the past and from the future too. It gives
              you an oportunity to observe how climate is changing in each
              country.
              <br />
              <br />
              Now choose data you need and watch
            </Paper>
          </Grid>
          <Grid item sm={12} container spacing={0} className={classes.root}>
            <ToggleButtonGroup
              value={precipitationTemp}
              exclusive
              onChange={handlePrecipitationTemp}
              aria-label="text variable" // ??????
            >
              <ToggleButton
                style={{ width: 200 }}
                value="pr"
                aria-label="left aligned"
                className={classes.button}
              >
                <img src={rainLogo} alt="rainLogo" width="36" height="36" />
                Precipitation
              </ToggleButton>
              <ToggleButton
                style={{ width: 200 }}
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
              disableClearable
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
                  {option.label} ({option.code})
                </React.Fragment>
              )}
              renderInput={(params) => (
                <TextField
                  className={classes.select}
                  {...params}
                  label="Select a country"
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
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
                style={{ width: 200 }}
                value="mavg"
                aria-label="left aligned"
                className={classes.button}
              >
                <TodayIcon /> Monthly average
              </ToggleButton>
              <ToggleButton
                style={{ width: 200 }}
                value="annualavg"
                aria-label="right aligned"
                className={classes.button}
              >
                <CachedIcon /> Annual average
              </ToggleButton>
            </ToggleButtonGroup>

            <Autocomplete
              className={classes.select}
              disableClearable
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
        <div style={{ height: 30 }}></div>
        <Grid>
          <Paper className={classes.infoTextCurrent} elevation={0}>
            {country.label} {forTextMonthlyOrAnnual} {forTextPrecipitationTemp}{" "}
            in {period}
          </Paper>
        </Grid>

        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <ModelResults
            key={items.gcm}
            items={items}
            className={classes.styleModelResults}
          />
        </Grid>
      </div>
    );
  }
};

export default App;
