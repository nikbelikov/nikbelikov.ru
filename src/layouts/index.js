import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './basic.css'

const MainWrapper = ({ children }) => (
  <div>
    <Helmet
      title="nikbelikov.ru - Frontend developer"
      meta={[
        { name: 'description', content: 'Nikolay Belikov\'s page' },
        { name: 'keywords', content: 'frontend, developing, frontend developer, web, personal website, website' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
);

MainWrapper.propTypes = {
  children: PropTypes.func,
};

export default MainWrapper
