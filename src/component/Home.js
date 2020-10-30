import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DragDrop from "./DragDrop";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, Route, Switch } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formC: {
    height: "30px",
    width: "223px",
    marginBottom: "20px",
  },
}));

var alerts = [
  { num: 1, app: "helloworld", message: "message" },
  { num: 2, app: "helloagain", message: "another message" },
];

let defaultState = {
  name_of_image: "",

  height: "",
  width: "",
  path: "",
  type: "",
  Author: "",
  Location: "",
};
let defaultStates = {
  name_of_image: "",
  height: "",
  width: "",
  path: "",
  type: "",
  Author: "",
  Location: "",
};

function Home() {
  const classes = useStyles();

  const [data, setData] = useState(defaultState);
  const [newData, setNewData] = useState([defaultStates]);

  let getData = (val) => {
    setNewData(val);
  };

  const handleNameChange = (event) => {
    let temp = { ...data };
    temp.name_of_image = event.target.value;
    setData(temp);
  };
  const handleSizeHeightChange = (event) => {
    let temp = { ...data };
    temp.height = event.target.value;
    setData(temp);
  };
  const handleSizeWidthChange = (event) => {
    let temp = { ...data };
    temp.width = event.target.value;
    setData(temp);
  };
  const handleTypeChange = (event) => {
    let temp = { ...data };
    temp.type = event.target.value;
    setData(temp);
  };
  const handleAuthorChange = (event) => {
    let temp = { ...data };
    temp.Author = event.target.value;
    setData(temp);
  };
  const handleLocationChange = (event) => {
    let temp = { ...data };
    temp.Location = event.target.value;
    setData(temp);
  };
  const listOfItem = () => {
    setNewData((prevValue) => {
      return [...prevValue, data];
    });
  };

  if (newData.length == 2) {
    alerts.push({
      Author: newData[1].Author,
      Location: newData[1].Location,
      height: newData[1].height,
      name_of_image: newData[1].name_of_image,
      path: newData[0].path,
      type: newData[1].type,
      width: newData[1].width,
    });

    
  }

  console.log(alerts, "alert");

  return (
      <div className="App">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={4}>
            <Card>
              <form className={classes.root} noValidate autoComplete="off">
                <Grid item xs={12} style={{ margin: "20px" }}>
                  <Typography
                    align="center"
                    className={classes.title}
                    color="textSecondary"
                  >
                    UPLOAD IMAGE
                  </Typography>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <DragDrop sendData={getData} />
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          id="filled-basic"
                          label="Name of image"
                          variant="outlined"
                          value={data.name_of_image}
                          onChange={handleNameChange}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          id="filled-basic"
                          label="Height"
                          variant="outlined"
                          value={data.height}
                          onChange={handleSizeHeightChange}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          id="filled-basic"
                          label="Width"
                          variant="outlined"
                          value={data.width}
                          onChange={handleSizeWidthChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl variant="filled" className={classes.formC}>
                          <InputLabel id="demo-simple-select-filled-label">
                            Extension of image
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={data.type}
                            onChange={handleTypeChange}
                            label="Extension of image"
                            variant="outlined"
                          >
                            <MenuItem value={1}>PNG</MenuItem>
                            <MenuItem value={2}>JPG</MenuItem>
                            <MenuItem value={3}>SVG</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="filled-basic"
                          label="Author"
                          variant="outlined"
                          value={data.Author}
                          onChange={handleAuthorChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="filled-basic"
                          label="Location of image"
                          variant="outlined"
                          value={data.Location}
                          onChange={handleLocationChange}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                style={{ margin: "20px" }}
              >
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={listOfItem}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item xs={5}>
                  <Link 
                  to={{
                    pathname: `/display`,
                    state: alerts }}>
                    <Button variant="contained" color="primary">
                      Display Gallery
                    </Button>
                  </Link>
                </Grid>
                {/* <Grid item xs={6}>
                
              </Grid>
              <Grid item xs={6}>
               
              </Grid> */}
              </Grid>
            </Card>
          </Grid>
        </Grid>

      </div>
  );
}

export default Home;
