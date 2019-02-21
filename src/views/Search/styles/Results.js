const styles = {
  row: {
    marginBottom: '40px',
    alignItems: 'center'
  },
  content: {
    backgroundColor: 'rgb(242,242,242)',
    paddingTop: '20px'
  },
  favoriteButton: {
    ':active': {
      color: 'inherit',
    },
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: '3px',
    borderWidth: 0,
    boxShadow: 'none',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '12px',
    height: '25px',
    ':hover': {
      cursor: 'pointer'
    },
    outline: 'none',
  },
  favoriteButtonSelected: {
    ':active': {
      color: 'white',
    },
    backgroundColor: 'rgb(7,106,195)',
    borderColor: 'rgb(7,106,195)',
    color: 'white',
  },
  flex: {
    display: 'flex',
    width: '100%'
  },
  itemType: {
    color: 'rgb(102,105,125)',
    flex: '0 0 auto',
    fontFamily: 'Open Sans, sans-serif',
    width: '100px'
  },
  itemInfo: {
    display: 'inline-flex',
    flex: '1 1 auto',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    textAlign: 'left'
  },
  itemName: { 
    boxSizing: 'border-box',
    color: 'white',
    fontSize: '20px',
    paddingLeft: '20px'
  },
  heading: {
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    height: '50px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(50,50,50)'
  },
  main: {
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px',
    boxSizing: 'border-box',
    display: 'inline-flex',
    padding: '20px',
    width: '100%'
  },
  cohorts: {
    width: '100%',
    paddingRight: '10px'
  },
  details: {
    marginTop: '40px',
    width: '100%'
  },
  members: {
    backgroundColor: 'rgb(43,45,65)',
    borderRadius: '18px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '11px',
    letterSpacing: '1px',
    padding: '7px 10px',
    textTransform: 'uppercase',
    width: '65px'
  },
  cohortTag: {
    backgroundColor: 'rgb(43,46,66)',
    borderRadius: '18px',
    marginRight: '10px',
    padding: '5px 10px'
  }
};

export default styles;
