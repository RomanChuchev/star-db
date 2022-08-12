import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";

import "./people-page.css";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => (
          <div className="row mb-3">
            <div className="position-relative">
              <div className="position-absolute top-0 start-0">{name}</div>{" "}
              <div className="position-absolute top-0 start-50">{gender}</div>
              <div className="position-absolute top-0 end-0">{birthYear}</div>
            </div>
          </div>
        )}
      />
    );

    const personDetales = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return <Row left={itemList} right={personDetales} />;
  }
}
