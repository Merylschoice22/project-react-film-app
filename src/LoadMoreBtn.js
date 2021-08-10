import React from "react";

const LoadMoreBtn = (props) => {
  return (
    <div>
      <button onClick={props.getStart}>Load More</button>
    </div>
  );
};

export default LoadMoreBtn;
