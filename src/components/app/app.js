import React, { useState } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";

import "./app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [swapiService, setSwapiService] = useState(new SwapiService());

  const onServiceChange = () => {
    setSwapiService((swapiService) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  };

  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService}>
        <BrowserRouter>
          <div className="stardb-app">
            <Header onServiceChange={onServiceChange} />

            <RandomPlanet />
            <Routes>
              <Route exact path="/" element={<h2>Welcome to StarDB</h2>} />
              <Route path="/people" element={<PeoplePage />} />
              <Route path="/planets" element={<PlanetsPage />} />
              <Route path="/starships" element={<StarshipsPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
}

export default App;
