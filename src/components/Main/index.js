import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Main extends React.Component {}

const mapStateToProps = (store) => {
  return {};
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
