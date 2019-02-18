import request from '../axios';


let articles;
articles = {
  all: () => request.get(`/articles/`)
};

export default articles;
