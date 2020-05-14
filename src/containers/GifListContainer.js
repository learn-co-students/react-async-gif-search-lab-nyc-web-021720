import React, {Fragment} from "react";

const GifListContainer = props => {
  return (
	 <div>{props.gifs.map((giph, index) => <img src={giph.url} key={index}/>)}</div>
  );
};

export default GifListContainer;