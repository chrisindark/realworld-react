//   onClickTag: (tag, payload) =>
//     dispatch({ type: 'APPLY_TAG_FILTER', tag, payload }),
//   onLoad: (tab, payload) =>
//     dispatch({ type: 'HOME_PAGE_LOADED', tab, payload }),
//   onUnload: () =>
//     dispatch({ type: 'HOME_PAGE_UNLOADED' })

export const onLoad = (tab, payload) => {
  return {
    type: 'HOME_PAGE_LOADED',
    tab,
    payload
  };
};

export const onUnload = () => {
  return {
    type: 'HOME_PAGE_UNLOADED'
  };
};

export const onTagsLoad = (tab, payload) => {
  return {
    type: 'TAGS_LOADED',
    tab,
    payload
  };
};

export const onArticlesLoad = (tab, payload) => {
  return {
    type: 'ARTICLES_LOADED',
    tab,
    payload
  };
};

export const onTagClick = (tag, payload) => {
  return {
    type: 'TAG_CLICKED',
    tag,
    payload
  };
};
