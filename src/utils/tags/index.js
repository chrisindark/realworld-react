import request from '../axios';


let tags;
tags = {
  all: () => request.get(`/tags/`)
};

export default tags;
