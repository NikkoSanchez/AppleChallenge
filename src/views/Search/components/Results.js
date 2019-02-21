import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Results';
import { Results as SearchResults } from '../types/Results';

export default class Results extends Component {
  render() {
    const { handleFavorite, isFavorite, result } = this.props;
    return (
      <div css={{ marginBottom: '10px' }}>
        <div css={styles.heading}>
          <div css={[styles.itemInfo, styles.itemName]}>
            <span>{result.artistName}</span>
          </div>
          <div css={[styles.itemType, { alignItems: 'flex-end'}]}>
            <button 
              css={[styles.favoriteButton, isFavorite ? styles.favoriteButtonSelected : null]} 
              onClick={handleFavorite(result)}
            >
              Favorite
            </button>
          </div>
        </div>
        <div css={styles.content}>
          <div
            css={[styles.flex, styles.row]}
          >
            <span css={styles.itemType}>ARTWORK</span>
            <img css={[styles.itemInfo, { flex: '0 1 auto'}]} src={result.artworkUrl60} />
          </div>
          <div
            css={[styles.flex, styles.row]}
          >
            <div css={styles.itemType}>ID:</div>
            <span css={styles.itemInfo}>{result.trackId}</span>
          </div>
          <div
            css={[styles.flex, styles.row]}
          >
            <div css={styles.itemType}>GENRE:</div>
            <span css={styles.itemInfo}>{result.primaryGenreName}</span>
          </div>
          <div css={[styles.flex, { paddingBottom: '20px' }]}>
            <div css={styles.itemType}>URL:</div>
            <div css={styles.itemInfo}>
              <a href={result.trackViewUrl} target="_blank" rel="noopener noreferrer">{result.trackViewUrl}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  result: SearchResults.isRequired,
};
