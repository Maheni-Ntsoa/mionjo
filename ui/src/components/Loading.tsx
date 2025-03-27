import React from "react";

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <>
        <svg className="container" viewBox="0 0 35 35" height="35" width="35">
          <rect
            className="track"
            x="2.5"
            y="2.5"
            fill="none"
            stroke-width="3px"
            width="15"
            height="15"
          />
          <rect
            className="car"
            x="2.5"
            y="2.5"
            fill="none"
            stroke-width="3px"
            width="15"
            height="15"
            pathLength="100"
          />
        </svg>
      </>
    );
  }

  return null;
};

export default Loading;
