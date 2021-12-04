import React, { Fragment } from "react";
import HomeScreen from "./HomeScreen";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
