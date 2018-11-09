import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { graphql, Link } from 'gatsby';

import Layout from '../layouts/index';

export default ({ data }) => (
  <Layout>
    <Row>
    { data.undercovers.edges.map(edge => edge.node).map(node => (
      <Col className="center-container" key={node.id} xs={12} md={3}>
        <Link to={`/${node.id}`}>
          <img src={node.publicURL} alt="baibai" />
        </Link>
      </Col>
    ))}
    </Row>
  </Layout>
);

export const query = graphql`
{
  undercovers: allFile(filter: { relativeDirectory: { eq: "undercover" }}) {
    edges {
      node {
        id
        publicURL
      }
    }
  }
}`;
