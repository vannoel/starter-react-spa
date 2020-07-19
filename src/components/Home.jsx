import React from 'react';
// import { useNavigate, useParams, useHistory, useLocation, useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
// import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

const enhance = compose(
  connect(
    (state) => {
      return {
        'xAccessToken'  : state.user.xAccessToken
      };
    }
  ),
);


const Home = enhance(() => {
  return (
    <div>
      {'Hello World!'}
    </div>
  );
});

export default Home;
