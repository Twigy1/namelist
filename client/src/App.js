import React from 'react';
import './App.css';
import Employees from './components/employees';
import { Provider } from "react-redux";
import { store } from "./actions/store";
import { Container, AppBar, Typography } from "@material-ui/core";

function App() {
  return (
      <Provider store = {store}>
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography
                    variant="h2"
                    align="center">
                    Employees
                </Typography>
            </AppBar>
            <Employees />
        </Container>
      </Provider>
  );
}

export default App;
