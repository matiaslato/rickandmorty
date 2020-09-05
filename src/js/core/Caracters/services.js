import instance from '../axios.intance';
import axios from 'axios';

export const getFirstLoadService = (payload) => {
  const query = `query {
    characters(page: 0) {
      info {
        count
        pages
        next
        prev
      }
    }
  }`;
  return instance.post({
    query: query,
  });
};
