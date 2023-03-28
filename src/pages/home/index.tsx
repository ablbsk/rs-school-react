import "./home.scss";
import React, { Component } from "react";
import Grid from "../../components/grid";
import data from "../../data/data.json";
import { ICharacter } from "../../interfaces";

class Home extends Component<object, { search: string; characters: ICharacter[] }> {
  constructor(props: object) {
    super(props);
    this.state = {
      search: localStorage.getItem("searchHistory") || "",
      characters: data.results,
    };
  }

  componentDidMount() {
    const { search } = this.state;
    if (search.length) this.filterCards();
  }

  // eslint-disable-next-line react/sort-comp
  componentWillUnmount() {
    this.setState((state) => {
      return { ...state, search: localStorage.getItem("searchHistory") || "" };
    });
  }

  componentDidUpdate() {
    const { search } = this.state;
    localStorage.setItem("searchHistory", search);
  }

  updateSearchValue = (value: string, type: string): void => {
    if (type === undefined) {
      this.setState((state) => {
        return { ...state, search: "" };
      }, this.filterCards);
    } else {
      this.setState((state) => {
        return { ...state, search: value };
      });
    }
  };

  filterCards = (): void => {
    const { search, characters } = this.state;

    if (search.length === 0) {
      this.setState((state) => {
        return { ...state, characters: data.results };
      });
    } else {
      this.setState((state) => {
        const result = characters.filter((item: ICharacter) =>
          item.name.toLowerCase().includes(search)
        );

        return { ...state, characters: result };
      });
    }
  };

  render() {
    const { characters, search } = this.state;

    return (
      <>
        <div className="promo">
          <h1 className="promo__header">The Rick and Morty</h1>
          <div className="search">
            <span className="search__icon search__icon--search" />
            <input
              className="search__input"
              type="search"
              placeholder="What do you want to find?"
              value={search}
              onChange={(e) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.updateSearchValue(e.target.value, e.nativeEvent.inputType);
              }}
            />
            <button className="search__button" type="button" onClick={this.filterCards}>
              <span className="search__icon search__icon--arrow" />
            </button>
          </div>
        </div>
        <Grid characters={characters} />
      </>
    );
  }
}

export default Home;
