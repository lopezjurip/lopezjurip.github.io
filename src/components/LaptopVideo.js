import React from "react";
import styled from "styled-components";

import programing from "../assets/videos/programing.mp4";
import "./LaptopVideo.css";

const ProgramingVideo = styled.video.attrs({
  src: programing,
  autoPlay: true,
  loop: true,
  muted: true,
})`
  background-color: #2d2d2d;
  height: 294px;
  border-radius: 3px;
  width: auto;
`;

export default function LaptopVideo(props) {
  return (
    <div {...props}>
      <div className="pca-hold">
        <div className="pca-main">
          <div className="pca-inner">
            <ProgramingVideo />
          </div>
        </div>
        <div className="pca-sub">
          <div className="pca-top" />
          <div className="pca-mid">
            <div className="pca-part" />
          </div>
          <div className="pca-bot" />
        </div>
      </div>
    </div>
  );
}
