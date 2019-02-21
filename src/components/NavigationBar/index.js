import React from 'react';
import styles from './styles';
import appleIcon from 'assets/apple.svg';

const NavigationBar = () => {
  return (
    <div css={styles.navBar}>
      <img css={styles.logo} src={appleIcon} />
      <span css={styles.title}>Lightweight iTunes Catalog</span>
    </div>
  );
};

export default NavigationBar;