import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import downIcon from 'assets/downPointer.png';

export default class Dropdown extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  setRef = node => {
    this.dropdownRef = node;
  };

  handleOutsideClick = ({ target }) => {
    if (this.dropdownRef && !this.dropdownRef.contains(target)) {
      this.setState({ show: false });
    }
  };

  toggleDropdownMenu = event => {
    event.preventDefault();
    this.setState(prev => ({ show: !prev.show }));
  };

  render() {
    const { kinds, handleFilter, selected } = this.props;
    const { show } = this.state;
    return (
      <div ref={this.setRef} css={styles.dropdown}>
        <div css={styles.button} onClick={this.toggleDropdownMenu}>
          {selected}
          <img css={styles.downIcon}src={downIcon}/>
        </div>
        {show ? (
          <ul css={styles.dropdownUl}>
            {kinds.map(val => (
              <li
                css={styles.item}
                key={val}
                name={val}
                onClick={handleFilter(val)}
              >
                {val}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

Dropdown.propTypes = {
  kinds: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFilter: PropTypes.func,
  selected: PropTypes.string.isRequired
};

Dropdown.defaultProps = {
  handleFilter: () => {}
};
