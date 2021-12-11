import React, { useState, useEffect } from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import TodayIcon from "@material-ui/icons/Today";
import CachedIcon from "@material-ui/icons/Cached";
import { Bar, CategoryScale } from "react-chartjs-2";
import Chart from "chart.js/auto";

import rainLogo from "./rain.png";
import tempLogo from "./temp.png";

import allAppData from "./allAppData";

// Dlaczego w consoli każdy element wyświetla się kilka razy

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
  const listOfModels = [];
  const columns = [{ field: "model", headerName: "Model", width: 110 }];
  const row = [];
  const rows = [];
  var lenghtOfMonthsOrAnnual = 0;
  var monthsOrAnnual = [];
  const listOfTasOrPr = [];

  props.items.map((Object) => {
    listOfModels.push(Object.gcm);
    listOfTasOrPr.push(Object.variable);
    if (Object.monthVals != null) {
      rows.push(Object.monthVals);
      lenghtOfMonthsOrAnnual = Object.monthVals.length;
    } else {
      rows.push(Object.annualData);
      lenghtOfMonthsOrAnnual = Object.annualData.length;
    }

    return rows;
  });

  // console.log("listOfTasOrPr[0]");
  // console.log(listOfTasOrPr[0]);

  if (lenghtOfMonthsOrAnnual === 12) {
    monthsOrAnnual = listOfMonths;
  } else {
    monthsOrAnnual = annualWord;
  }
  // console.log("rows");
  // console.log(rows);

  const rowsFixed = _.map(rows, function (array) {
    return _.map(array, function (item) {
      return item.toFixed(2);
    });
  });
  
  // console.log("rowsFixed");
  // console.log(rowsFixed);

  const list_bccr_bcm2_0 = _.map(rowsFixed[0], function (item) {
    return item;
  });
  // console.log("list_bccr_bcm2_0");
  // console.log(list_bccr_bcm2_0);

  columns.push({
    field: listOfModels[0],
    headerName: listOfModels[0],
    width: 100,
    editable: true,
  });

  // TODO FOR!!!!!!!!!!!!!!!!!!!!!!!!!!

  for (let i = 0; i < monthsOrAnnual.length; i++) {
    row.push({
      id: i,
      model: monthsOrAnnual[i],
      bccr_bcm2_0: list_bccr_bcm2_0[i],
    });
  }

  // const arrayBackgroundColor = [];
  // const arrayBackgroundColor_2 = [];

  if (listOfTasOrPr[0] === "tas") {
    var arrayBackgroundColor = _.map(list_bccr_bcm2_0, function (value) {
      if (value < -15) {
        return "#4f86f7";
      }
      if (value < -10 && value >= -15) {
        return "#6495ed";
      }
      if (value < -5 && value >= -10) {
        return "#87ceeb";
      }
      if (value < 0 && value >= -5) {
        return "#ace5ee";
      }

      if (value >= 0 && value <= 5) {
        return "#feeaea";
      }
      if (value > 5 && value <= 10) {
        return "#fec0c0";
      }
      if (value > 10 && value <= 15) {
        return "#feabab";
      }
      if (value > 15 && value <= 20) {
        return "#fe8181";
      }
      if (value > 20 && value <= 25) {
        return "#fe5757";
      }
      if (value > 25 && value <= 30) {
        return "#fe2e2e";
      }
      if (value > 30 && value <= 35) {
        return "#cb2424";
      }
      if (value > 35 && value <= 40) {
        return "#b62020";
      }
    });
  } else {
    var arrayBackgroundColor = _.map(list_bccr_bcm2_0, function (value) {
      if (value > 230) {
        return "#006400";
      }
      if (value > 170 && value <= 230) {
        return "#008000";
      }
      if (value > 120 && value <= 170) {
        return "#2e8b57";
      }
      if (value > 80 && value <= 120) {
        return "#00a86b";
      }
      if (value > 50 && value <= 80) {
        return "#00cc99";
      }
      if (value > 30 && value <= 50) {
        return "#96c8a2";
      }
      if (value > 0 && value <= 35) {
        return "#a0d6b4";
      }
    });
  }

  // console.log("arrayBackgroundColor_2");
  // console.log(arrayBackgroundColor_2);

  let forTextPrecipitationTemp = "PRECIPITATION";

  if (listOfTasOrPr[0] === "pr") {
    forTextPrecipitationTemp = "PRECIPITATION";
  } else {
    forTextPrecipitationTemp = "TEMPERATURE";
  }

  console.log("arrayBackgroundColor");
  console.log(arrayBackgroundColor);

  console.log("list_bccr_bcm2_0");
  console.log(list_bccr_bcm2_0);

  const data = {
    labels: monthsOrAnnual,
    datasets: [
      {
        label: `${forTextPrecipitationTemp}`,
        data: list_bccr_bcm2_0,
        backgroundColor: arrayBackgroundColor,
        borderColor: arrayBackgroundColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="header">
        <div className="links"></div>
      </div>
      <Grid container>
        <Bar data={data} />{" "}
      </Grid>
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

  let [startYear, endYear] = period.split(" - ");
  let forTextPrecipitationTemp = "";
  let forTextMonthlyOrAnnual = "";

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

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent: "space-evenly",
      fontSize: 50,
      background: "#FFFFF0",
    },
    titleText: {
      padding: theme.spacing(2),

      textAlign: "center",
      color: theme.palette.text.secondary,
      background: "#FFFACD",
    },
    infoText: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      background: "#F5F5DC",
      fontSize: 22,
    },
    infoTextCurrent: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      background: "#FFFFF0",
      fontSize: 22,
    },
    button: {
      background: "#F5F5DC",
    },
    select: {
      color: theme.palette.text.secondary,
      background: "#F5F5DC",
      fontFamily: "Calibri",
      closeIcon: "false",
    },
    option: {
      fontSize: 15,
      fontFamily: "Calibri",
      "& > span": {
        marginRight: 100,
        fontSize: 18,
      },
    },
  }));

  {
    const classes = useStyles();

    return (
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <style>{"body { background-color: #FFFFF0 ; }"}</style>
          <Grid item xs={12} sm={12} md={12} lg={12}>
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
        </Grid>
        <div style={{ height: 30 }}></div>

        <Grid
          container
          spacing={3}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            container
            spacing={3}
            xs={12}
            sm={12}
            md={6}
            lg={6}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={6} lg={6} spacing={0}>
              <ToggleButtonGroup
                value={precipitationTemp}
                exclusive
                onChange={handlePrecipitationTemp}
                aria-label="text variable"
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
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              spacing={3}
              className={classes.root}
            >
              <ToggleButtonGroup
                value={monthlyOrAnnual}
                exclusive
                onChange={handleMonthlyOrAnnual}
                aria-label="text monthlyOrAnnual"
              >
                <ToggleButton
                  style={{ width: 200, height: 60 }}
                  value="mavg"
                  aria-label="left aligned"
                  className={classes.button}
                >
                  <TodayIcon width="36" height="36" /> Monthly average
                </ToggleButton>
                <ToggleButton
                  style={{ width: 200, height: 60 }}
                  value="annualavg"
                  aria-label="right aligned"
                  className={classes.button}
                >
                  <CachedIcon width="36" height="36" /> Annual average
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <div style={{ height: 60 }}></div>

          <Grid
            container
            spacing={3}
            xs={6}
            sm={6}
            md={6}
            lg={6}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={6} lg={6} spacing={3}>
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

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              spacing={3}
              className={classes.root}
            >
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
                id="time"
                options={allAppData.period}
                style={{ width: 300, height: 60 }}
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
        </Grid>

        <div style={{ height: 30 }}></div>
        <Grid>
          <Paper className={classes.infoTextCurrent} elevation={0}>
            {country.label}'s {forTextMonthlyOrAnnual}{" "}
            {forTextPrecipitationTemp} in {period}
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
      </Container>
    );
  }
};

export default App;
