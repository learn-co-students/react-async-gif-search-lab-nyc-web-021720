import React from "react";
//Components
import NavBar from "./NavBar";
import GifListContainer from "../containers/GifListContainer"
import GifSearch from "./GifSearch"

// the App component should render out the GifListContainer component

class App extends React.Component {
  state = {
    gifs: [],
  };
  fetchGifs = (query) => {
    const giphUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=Jn71L3SmC16LlkgjCh8sNOuDbaCrHVha&rating=g`;
    fetch(giphUrl)
      .then((res) => res.json())
      .then(({data}) => this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) }));
  };
  componentDidMount() {
  //  this.fetchgifs("cats")
  }
  render() {
    return (
      <div>
        <NavBar color="black" title="Giphy Search" />
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifListContainer gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
