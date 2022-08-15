import React, { useState, useEffect, useRef } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import "./random-planet.css";

function RandomPlanet({ updateInterval = 5000 }) {
  const swapiService = new SwapiService();

  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const timarIdRef = useRef(null);

  const onPlanetLoaded = (planet) => {
    setPlanet(planet);
    setLoading(false);
    setError(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
    swapiService.getPlanet(id).then(onPlanetLoaded).catch(onError);
  };

  useEffect(() => {
    updatePlanet();

    timarIdRef.current = setInterval(updatePlanet, updateInterval);

    return () => {
      timarIdRef.current && clearInterval(timarIdRef.current);
      timarIdRef.current = null;
    };
  }, []);

  const hasData = !(loading || error);

  const errorMessage = error ? <ErrorIndicator /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = hasData ? <PlanetView planet={planet} /> : null;

  return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RandomPlanet;
