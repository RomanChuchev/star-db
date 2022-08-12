import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import "./people-page.css";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => (
          <div className="row mb-3">
            <div className="position-relative">
              <div className="position-absolute top-0 start-0">{i.name}</div>{" "}
              <div className="position-absolute top-0 start-50">{i.gender}</div>
              <div className="position-absolute top-0 end-0">{i.birthYear}</div>
            </div>
          </div>
        )}
      </ItemList>
    );

    const personDetales = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetales} />;
      </ErrorBoundry>
    );
  }
}
