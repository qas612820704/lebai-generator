import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';

import Layout from '../layouts/index';
import ImageWithText from '../components/ImageWithText';
import './cover.css';

export default class Cover extends Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  state = {
    text: '',
    href: '',
    downloadName: 'baibai',
  };

  setText = (text) => {
    this.setState({ text });
  }

  handleDownloadClick = () => {
    const href = this.canvas.current.toDataURL("image/png");
    const now = Date.now();
    const downloadName = `baibai-${now}.png`;

    this.setState({
      href,
      downloadName,
    })
  }

  render() {
    const { data } = this.props;
    const { text, href, downloadName } = this.state;
    return (
      <div id="cover">
        <Layout>
          <Row>
            <Col className="center" xs={12}>
              <ImageWithText
                canvas={this.canvas}
                src={data.cover.publicURL}
                text={text}
              />
            </Col>
          </Row>
          <Row className="center">
            <Col className="center" xs={12}>
              <input
                type="text"
                value={text}
                onChange={(e) => this.setText(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="center">
            <Col xs={12}>
              <a href={href} download={downloadName}>
                <button className="btn" onClick={this.handleDownloadClick}>下載</button>
              </a>
            </Col>
          </Row>
        </Layout>
      </div>
    )
  }
}

export const query = graphql`
  query CoverByid($id: String!){
    cover: file(id: { eq: $id }) {
      id
      publicURL
    }
  }
`;
