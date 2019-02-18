import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {onLoad, onUnload, onTagClick, onTagsLoad, onArticlesLoad} from '../../actions/home';
import articles from '../../utils/articles';
import tags from '../../utils/tags';

import Banner from './Banner';
import Tags from './Tags';
import MainView from './MainView';


class Home extends React.Component {
  componentWillReceiveProps(nextProps, nextContext) {
    // console.log('home');
  }

  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    // const articlesPromise = this.props.token ?
    //   articles.feed() :
    //   articles.all();

    // this.props.onLoad(tab, Promise.all([agent.Tags.getAll(), articlesPromise]));
    tags.all().then(res => {
      if (res.status === 200) {
        this.props.onTagsLoad(tab, res.data);
      }
    });

    articles.all().then(res => {
      if (res.status === 200) {
        this.props.onArticlesLoad(tab, res.data);
      }
    });
  }

  componentWillUnmount() {
    // this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">

        <Banner token={this.props.token} appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <MainView />

            <div className="col-md-3">
              <div className="sidebar">

                <p>Popular Tags</p>

                <Tags tags={this.props.tags} onClickTag={this.props.onTagClick} />

              </div>
            </div>
          </div>
        </div>

      </div>
    );
    //   return (
    //       <div>
    //         <p>loading...</p>
    //       </div>
    //   );
  }
}

const mapStateToProps = state => ({
  ...state.home,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({onLoad, onUnload, onTagsLoad, onArticlesLoad, onTagClick}, dispatch)
);
// const mapDispatchToProps = dispatch => ({
//   onClickTag: (tag, payload) =>
//     dispatch({ type: 'APPLY_TAG_FILTER', tag, payload }),
//   onLoad: (tab, payload) =>
//     dispatch({ type: 'HOME_PAGE_LOADED', tab, payload }),
//   onUnload: () =>
//     dispatch({ type: 'HOME_PAGE_UNLOADED' })
// });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
