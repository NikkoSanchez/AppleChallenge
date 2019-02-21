import PropTypes from 'prop-types';

export const Results = PropTypes.shape({
  trackId: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
  artworkUrl60: PropTypes.string.isRequired,
  primaryGenreName: PropTypes.string.isRequired,
  trackViewUrl: PropTypes.string.isRequired
});
