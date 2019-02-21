const styles = {
  dropdown: {
    display: 'inline-flex',
    height: '25px',
    position: 'absolute',
    right: '0px',
    width: '150px'
  },
  dropdownUl: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    top: '32px',
    right: '0px',
    width: '150px',
    backgroundColor: 'white',
    position: 'absolute',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1
  },
  item: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '12px',
    borderBottom: 'none',
    margin: '8px 10px',
    padding: '2px',
    ':hover': {
      backgroundColor: 'rgb(240,240,240)',
      color: 'rgb(7,106,195)',
      cursor: 'pointer'
    }
  },
  button: {
    display: 'inline-flex',
    position: 'relative',
    paddingLeft: '10px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '12px',
    alignItems: 'center',
    backgroundColor: 'white',
    border: 'solid',
    borderWidth: '1px',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
    ':hover': {
      cursor: 'pointer'
    },
    textTransform: 'capitalize'
  },
  downIcon: {
    position: 'absolute',
    right: '10px',
    width: '10px',
    height: '10px',
  }
};

export default styles;
