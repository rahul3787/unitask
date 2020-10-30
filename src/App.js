
import React from 'react'
import './App.css'
import { Link, Route, Switch } from "react-router-dom";
import DispalyImage from "./component/DisplayImage";
import Home from './component/Home';
function App( onSave , event) {

  return (
    <Switch>

            <Route path="/"  component={Home} exact/>
             
            <Route path="/display"  component={DispalyImage} exact/>
             


    </Switch>   
  );
}

export default App;
