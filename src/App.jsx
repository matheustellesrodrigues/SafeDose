import { Component } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Rodape from "./components/Rodape/Rodape";


import { Outlet } from "react-router-dom";


class App extends Component{
  


  render(){
    return(
      <>
        <Menu />
        <Routes>
          <Route
            
          />
        </Routes>
       
        

        <Outlet/>
        
        
      </>
    )
  }
}
export default App;
