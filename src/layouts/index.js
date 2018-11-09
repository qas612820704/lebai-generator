import React from 'react';
import { Link } from 'gatsby';
import { Grid } from 'react-flexbox-grid';

import './index.css';

const Layout = ({ children }) => (
  <Grid id="layout">
    <h1><Link to="/">白白圖文產生器</Link></h1>
    <div>{ children }</div>
  </Grid>
);

export default Layout;
