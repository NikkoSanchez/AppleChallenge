import React, { Component, Fragment } from 'react';
import styles from './styles';
import api from './api';
import Results from './components/Results';
import Dropdown from '../../components/Dropdown';
import SearchBar from './components/SearchBar';

export default class Search extends Component {
  state = {
    favorites: {},
    kinds: [],
    results: {},
    selected: '',
    value: '',
    showFavorites: false,
  };

  componentDidMount() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    // check if any favorites are stored in local storage
    if (favorites && Object.keys(favorites).length > 0) {
      this.setState({ favorites });
    }
  }

  handleOnChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSearch = value => () => {
    api.getCatalog(value)
      .then(results => {
        const kinds = Object.keys(results);
        this.setState({ kinds, results, selected: kinds[0], showFavorites: false });
      })
      .catch(err => console.error(err)); //eslint-disable-line
  };

  // This will handle adding and removing favorites from localStorage
  handleFavorite = (result) => () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites) {
      favorites[result.trackId] ?
        delete favorites[result.trackId] :
        favorites[result.trackId] = result;
    } else {
      favorites = {};
      favorites[result.trackId] = result;
    }
    localStorage.favorites = JSON.stringify(favorites);
    this.setState({ favorites });
  }

  // Set the selected "kind" for the dropdown
  handleFilter = selected => () => this.setState({ selected });

  // Toggle when to show the favorites that are saved
  handleShowFavorites = () => {
    this.setState(prevState => ({ showFavorites: !prevState.showFavorites }));
  }

  // If favorites is selected render the favorite results
  // else display that the user needs to add some
  onDisplayFavorites = () => {
    const favoriteKeys = Object.keys(this.state.favorites);

    if (favoriteKeys.length > 0) {
      const favoritesArray = favoriteKeys.map(id => this.state.favorites[id]);
      return favoritesArray.map(val =>
        <Results
          key={val.trackId}
          handleFavorite={this.handleFavorite}
          isFavorite={true}
          result={val}
        />
      );
    } else {
      return (
        <div>
          Uh Oh, it looks like you have not favorited any songs!
        </div>
      );
    }
  }

  render() {
    const {
      favorites,
      kinds,
      results,
      selected,
      showFavorites
    } = this.state;
    
    return (
      <div css={styles.container}>
        <div css={{ width: '700px', margin: 'auto' }}>
          <span css={styles.header}>iTunes Search</span>
          <SearchBar
            handleSearch={this.handleSearch}
            handleShowFavorites={this.handleShowFavorites}
            showFavorites={showFavorites}
          />
        </div>
        {
          (selected || showFavorites) ?
            ( 
              <Fragment>
                <div css={styles.resultsRow}>
                  {
                    (selected && !showFavorites) ?
                      (
                        <Fragment>
                          <span css={styles.resultsText}>Results:</span>
                          <Dropdown kinds={kinds} handleFilter={this.handleFilter} selected={selected}/>
                        </Fragment>
                      ) :
                      null
                  }
                </div>
                {
                  !showFavorites ?
                    results[selected].map(value => {
                      const isFavorite = favorites[value.trackId] !== undefined;
                      return (
                        <Results
                          key={value.trackId} 
                          handleFavorite={this.handleFavorite}
                          isFavorite={isFavorite}
                          result={value}
                        />
                      );
                    }) : 
                    this.onDisplayFavorites()
                }
              </Fragment>
            ) :
            null
        }
      </div>
    );
  }
}
