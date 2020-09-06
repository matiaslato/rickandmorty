import instance from '../axios.intance';

export const getFirstLoadService = (payload) => {
  const query = `query {
    characters(page: 1, filter: { name: "", gender: "" }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        image
        gender
        status
        species
        location{
          name
        }
        created
      }
    }
  }`;
  return instance.post('', {
    query: query,
  });
};

export const getCharactesSearchService = (page, filterName, gender) => {
  const query = `query {
    characters(page: 1, filter: { name: "${filterName}", gender: "${gender}" }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        image
        gender
        status
        species
        location{
          name
        }
        created
      }
    }
  }`;
  return instance.post('', {
    query: query,
  });
};

export const getCharactesCahngePagehService = (page, filterName, gender) => {
  const query = `query {
    characters(page: ${page}, filter: { name: "${filterName}", gender: "${gender}" }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        image
        gender
        status
        species
        location{
          name
        }
        created
      }
    }
  }`;
  return instance.post('', {
    query: query,
  });
};
