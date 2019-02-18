import React from 'react';


class Tags extends React.Component {
  componentWillReceiveProps(nextProps, nextContext) {
    // console.log('tags', nextProps);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('event', e.target.innerHTML);
  };

  render() {
    const tags = this.props.tags;

    if (tags) {
      return (
        <div className="tag-list">
          {
            tags.map(tag => {
              return (
                <a
                  href=""
                  className="tag-default tag-pill"
                  key={tag}
                  onClick={this.handleClick}>
                  {tag}
                </a>
              );
            })
          }
        </div>
      );
    } else {
      return (
        <div>Loading Tags...</div>
      );
    }
  }
}

export default Tags;
