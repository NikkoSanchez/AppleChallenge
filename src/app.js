import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import styles from './styles';
import SearchPage from './views/Search';

export default class App extends Component {
  render() {
    return (
      <div css={styles.container}>
        <NavigationBar />
        <div
          css={styles.viewsContainer}
        >
          <SearchPage />
        </div>
      </div>
    );
  }
}
