const styles = {
  container: {
    boxSizing: 'border-box',
    display: 'inline-block',
    overflow: 'scroll',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    paddingTop: '25px',
    paddingLeft: '300px',
    paddingRight: '300px'
  },
  header: {
    display: 'inline-block',
    fontWeight: 'normal',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '30px',
    marginBottom: '25px'
  },
  dropdownContainer: {
    display: 'inline-flex',
    width: '100%',
    height: '40px',
    marginBottom: '10px'
  },
  dropdown: {
    display: 'inline-flex',
    width: '200px',
    height: '100%',
    textAlign: 'left',
    marginRight: '20px'
  },
  resultsRow: {
    textAlign: 'left',
    marginBottom: '10px',
    position: 'relative'
  },
  resultsText: {
    marginTop: '30px',
    fontFamily: 'Open Sans, sans-serif'
  },
  selected: {
    display: 'inline-flex',
    paddingLeft: '10px',
    fontFamily: 'Open Sans, sans-serif',
    width: '100%',
    textAlign: 'left',
    alignItems: 'center',
    backgroundColor: 'rgb(58,62,85)'
  },
};

export default styles;
