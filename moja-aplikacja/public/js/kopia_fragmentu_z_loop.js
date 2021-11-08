const firstRow = ["Model type"];
const monthOrAnnualValuesArray = [props.gcm];
const rows = [];

if (props.monthVals != null) {
  rows.push(firstRow);
  for (var i = 0; i < props.monthVals.length; i++) {
    monthOrAnnualValuesArray.push(+props.monthVals[i].toFixed(2));
  }
  for (var x = 0; x < props.monthVals.length; x++) {
    firstRow.push(listOfMonths[x]);
  }
  for (var z = 0; z < monthOrAnnualValuesArray.length; z++) {
    rows.push(monthOrAnnualValuesArray);
  }

  console.log(monthOrAnnualValuesArray);
} else {
  for (var j = 0; j < props.annualData.length; j++) {
    monthOrAnnualValuesArray.push(+props.annualData[j].toFixed(2));
  }
  firstRow.push("Annual Average");

  console.log(monthOrAnnualValuesArray);
  console.log(firstRow);
}
console.log(rows);

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
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
    <Grid container>
      <Paper elevation={3} direction="row" className={classes.root}>
        {firstRow.map((txt) => (
          <>{txt} | </>
        ))}
        <br />
        {monthOrAnnualValuesArray.map((txt) => (
          <>{txt} | </>
        ))}{" "}
      </Paper>
    </Grid>
  </>
);

