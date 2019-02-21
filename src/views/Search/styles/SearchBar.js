const styles = {
  container: {
    width: '100%',
    display: 'inline-flex',
    marginBottom: '30px'
  },
  favoritesButton: {
    backgroundColor: 'white',
    border: 'solid',
    borderWidth: '1px',
    borderRadius: '3px',
    fontFamily: 'Opens Sans, sans-serif',
    fontSize: '14px',
    height: '35px',
    ':hover': {
      color: 'rgb(7,106,195)',
      cursor: 'pointer'
    },
    letterSpacing: '1px',
    marginLeft: '5px',
    outline: 'none',
    top: '0px',
    width: '100px',
  },
  selectedFavorites: {
    backgroundColor: 'rgb(7,106,195)',
    color: 'white',
    ':hover': {
      backgroundColor: 'rgb(27,126,215)',
      color: 'white',
    }
  },
  searchBar: {
    fontFamily: 'Open Sans, sans-serif',
    boxSizing: 'border-box',
    width: '100%',
    height: '35px',
    border: 'solid',
    borderColor: 'black',
    borderRadius: '5px',
    borderTopRightRadius: 'unset',
    borderBottomRightRadius: 'unset',
    borderRightColor: 'white',
    borderWidth: '1px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '15px',
    ':focus': {
      outline: 0
    }
  },
  searchButton: {
    backgroundColor: 'rgb(245,245,245)',
    border: 'solid',
    borderWidth: '1px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    ':hover': {
      cursor: 'pointer'
    },
    height: '35px',
    margin: 0,
    outline: 'none'
  },
  searchIcon: {
    height: '20px',
    width: '20px'
  },
};

export default styles;