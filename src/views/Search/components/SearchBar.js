import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/SearchBar';
import searchIcon from 'assets/search.png';

export default class SearchBar extends Component {
  state = {
    value: '',
  }

  handleOnChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleEnter = ({ key }) => {
    const { value } = this.state;
    if (key === 'Enter') {
      this.props.handleSearch(value)();
    }
  }

  render() {
    const { value } = this.state;
    const { handleSearch, handleShowFavorites, showFavorites } = this.props;
    return (
      <div
        css={styles.container}
      >
        <input
          css={styles.searchBar}
          placeholder="search"
          value={value}
          onChange={this.handleOnChange}
          onKeyPress={this.handleEnter}
        />
        <button css={styles.searchButton} onClick={handleSearch(value)}><img css={styles.searchIcon} src={searchIcon}/></button>
        <button 
          css={[styles.favoritesButton, showFavorites ? styles.selectedFavorites : null]}
          onClick={handleShowFavorites}
        >
          Favorites
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleShowFavorites: PropTypes.func.isRequired,
  showFavorites: PropTypes.bool.isRequired
};
