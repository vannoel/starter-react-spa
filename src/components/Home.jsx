import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const enhance = compose(
  connect((state) => {
    return {
      xAccessToken: state.user.xAccessToken,
    };
  })
);

const Home = enhance(() => {
  return <div>{'Hello World!'}</div>;
});

export default Home;
