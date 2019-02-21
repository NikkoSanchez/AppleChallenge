import axios from 'axios';

const getCatalog = term =>
  axios({
    method: 'get',
    url: 'https://itunes.apple.com/search',
    params: { term, limit: '100' },
  })
    .then(res => {
      const { results } = res.data;
      const filteredResults = {};
      // Iterate over results filtering by "kind"
      results.forEach(value => {
        // "kind" is not guaranteed so if kind does not exist do not add to results 
        if (value.kind) {
          filteredResults[value.kind] ?
            filteredResults[value.kind].push(value) :
            (filteredResults[value.kind] = [value]);
        }
      });
      return filteredResults;  
    })
    .catch(err => err);
export default { getCatalog };
