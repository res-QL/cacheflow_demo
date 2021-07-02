import React, { Component } from "react";
import ReactDOM from "react-dom";
import FishCard from "./FishCard.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      show: false,
      id: null,
      favorite: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  componentDidMount() {
    // handleFavorite = (id, species) => {
    //   let method = "POST";
    //   if (!this.state.favorite[id]) {
    //     this.setState({
    //       favorite: { [id]: species },
    //     });
    //   }

    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: "{ getFish { Name Region Rate Photo State }}" }),
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        console.log("THIS IS JSONRES", jsonRes.data.getFish);
        this.setState({items: jsonRes.data.getFish, isLoaded: true });
      })
  }

  handleClick = (id) => {
    this.setState({ show: true, id: id });
    console.log(this.state.show);
    console.log(this.state.id);
  };

  handleCloseClick = () => {
    this.setState({ show: false });
    console.log(this.state.show);
    console.log(this.state.id);
  };

  render() {
    return (
      <div>
        <h1 id="header" className="text-focus-in">
          Sea Explorer
        </h1>
        <div id="fishContainer">
          {this.state.items.map((fish, i) => (
            <FishCard
              key={i}
              keyId={i}
              speciesName={fish.Name}
              speciesPicture={fish.Photo}
              fishingRegion={fish.Region}
              fishingRate={fish.Rate}
              stateofFish={fish.State}
              show={this.state.show}
              handleClick={this.handleClick}
              handleCloseClick={(id) => {
                this.handleCloseClick(id);
              }}
              handleFavoriteClick={this.handleFavorite}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
