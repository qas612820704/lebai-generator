import React, { Component } from 'react';

export default class ImageWithText extends Component {
  constructor(props) {
    super(props);

    this.canvas = this.props.canvas;
    this.image = React.createRef();
  }

  componentDidMount() {
    this.image.current.addEventListener('load', () => {
      const ratio = this.image.current.width / this.image.current.height;
      const height = 600;
      const width = height * ratio;
      this.canvas.current.height = height;
      this.canvas.current.width = width;
      this.handleTextChange(this.props.text);
    });
  }

  componentDidUpdate() {
    this.handleTextChange(this.props.text);
  }

  handleTextChange = (text) => {
    const { width, height } = this.canvas.current;

    const ctx = this.canvas.current.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(this.image.current, 0, 0, width, height);

    ctx.font = 'bold 40px serif';
    ctx.textAlign = 'center';
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.lineWidth = 1;

    ctx.fillText(text, width / 2, height - 30);
    ctx.strokeText(text, width / 2, height - 30);
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvas}/>
        <img
          ref={this.image}
          className="hidden"
          src={this.props.src} alt="baibai"
        />
      </div>
    )
  }
}
