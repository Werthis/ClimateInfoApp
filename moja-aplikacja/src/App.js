import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const App = () => {
  const [count_1, setCount_1] = useState(3);
  const [count_2, setCount_2] = useState(8);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    document.title = `Naciśnięto ${count_1} oraz ${count_2} razy`;
  });
  
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
  },[]);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: "primary",
    },
  }));

 {
  const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <h1> 
          Italy monthly average precipitation (rainfall and assumed water equivalent), in millimeters 
        </h1> 
        {
				items.map((item) => (
          <ol key = { item.id } >
            monthVals: { item.monthVals },
            {/* .map((Val, idx) => <p key = idx>{Val}</p> }}, */},
            from_year: { item.fromYear }
            </ol>
          ))
        }

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Naciśnięto {count_1} razy</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Button className={classes.paper} variant="contained" color="primary" onClick={() => setCount_2(count_2 + 1)}>
                Drugi <br />
                {count_2}
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button className={classes.paper} variant="contained" color="primary" onClick={() => setCount_1(count_1 + 1)}>
              pierwszy <br />{count_1}
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}> </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>Naciśnięto {count_2} razy</Paper>
          </Grid>
        </Grid>
      </div>
      
    );
  };
}

export default App;

