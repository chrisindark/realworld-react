const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      // state = Object.assign(state, {tab: action.tab});
      // return Object.assign(state, action.payload);
      return {
        ...state,
      //   tags: action.payload.tags,
      //   articles: action.payload.articles,
      //   articlesCount: action.payload.count,
        currentPage: 0,
      //   tab: action.tab
      };
    case 'HOME_PAGE_UNLOADED':
      return {};
    case 'ARTICLES_LOADED':
      return {
        ...state,
        articles: action.payload.articles,
        articlesCount: action.payload.count,
        tab: action.tab
      };
    case 'TAGS_LOADED':
      return {
        ...state,
        tags: action.payload.tags
      };
    default:
      return state;
  }
};
