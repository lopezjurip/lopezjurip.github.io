import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactAnimationFrame from "react-animation-frame";

const Base = styled.div`
  position: absolute;
  width: ${props => props.size + "px"};
  height: ${props => props.size + "px"};
`;

const Sides = styled(Base)`
  transform-style: preserve-3d;
  perspective: ${props => 6 * props.size + "px"};
`;

const Side = styled(Base).attrs({
  style: props => ({
    transform: transformRotate(props.rotate, props.edge),
  }),
})`
  border-color: #6d797a88;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
`;

function transformRotate(rotate, edge) {
  const degrees = Object.entries(rotate)
    .map(pair => `rotate${pair[0].toUpperCase()}(${pair[1]}deg)`)
    .join(" ");
  return edge ? `${degrees} translateZ(${edge}px)` : degrees;
}

export class Cube extends Component {
  static propTypes = {
    size: PropTypes.number.isRequired,
    rx: PropTypes.number.isRequired,
    ry: PropTypes.number.isRequired,
  };

  static defaultProps = {
    size: 120,
    rx: 1,
    ry: 1,
  };

  state = {
    cube: {
      x: 0,
      y: 0,
    },
    mouseHover: false,
    hovering: 0,
    rotation: {},
    sides: [
      { y: 0 },
      { y: -180 },
      { y: -90 },
      { y: 90 },
      { x: 90 },
      { x: -90 },
    ],
  };

  static interpolate = (a, b, i) => a * (1 - i) + b * i;

  static distance = (state, rotate) =>
    ["x", "y"].reduce((object, axis) => {
      object[axis] = state[axis] + rotate[axis];
      return object;
    }, {});

  static rotation = (state, size, rotate) => {
    const axis = rotate.x ? "z" : "y";
    const direction = rotate.x > 0 ? -1 : 1;

    return {
      x: state.x + rotate.x,
      [axis]: direction * (state.y + rotate.y),
    };
  };

  static shading = (tint, rotate, distance) => {
    const darken = ["x", "y"].reduce((object, axis) => {
      const delta = distance[axis];
      const ratio = delta / 180;
      object[axis] = delta > 180 ? Math.abs(2 - ratio) : ratio;
      return object;
    }, {});

    if (rotate.x) darken.y = 0;
    else {
      const { x } = distance;
      if (x > 90 && x < 270) {
        const directions = ["x", "y"]; // TODO ?
        directions.forEach(axis => (darken[axis] = 1 - darken[axis]));
      }
    }

    const alpha = (darken.x + darken.y) / 2;
    const blend = (value, index) =>
      Math.round(Cube.interpolate(value, tint.shading[index], alpha));

    const [r, g, b] = tint.color.map(blend);
    return `rgb(${r}, ${g}, ${b})`;
  };

  onAnimationFrame = () => {
    const size = 100;
    const rotate = {
      x: this.props.rx,
      y: this.props.ry,
    };
    const cube = Cube.distance(this.state.cube, rotate);
    const rotation = Cube.rotation(this.state.cube, size, rotate);
    this.setState({
      cube,
      rotation,
      hovering: this.state.mouseHover
        ? Math.min(this.state.hovering + 3, 40)
        : Math.max(0, this.state.hovering - 2),
    });
  };

  handleMouseEnter = () => this.setState({ mouseHover: true });

  handleMouseLeave = () => this.setState({ mouseHover: false });

  render() {
    const {
      state: { sides, rotation },
      props: { size, ...props },
    } = this;
    return (
      <Base
        size={size}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleMouseLeave}
        onMouseUp={this.handleMouseEnter}
        {...props}
      >
        <Sides
          size={size}
          style={{ transform: transformRotate(rotation, size) }}
        >
          {sides.map((side, i) => (
            <Side
              key={i}
              size={size}
              rotate={side}
              edge={size * 0.5 + this.state.hovering}
            />
          ))}
        </Sides>
      </Base>
    );
  }
}

export default ReactAnimationFrame(Cube, 20);
