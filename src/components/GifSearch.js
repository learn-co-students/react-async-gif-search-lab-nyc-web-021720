import React, { Fragment } from "react";

class GifSearch extends React.Component {
  state = {
    search: '',
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleSubmit = (e) => {
	e.preventDefault()
	this.props.fetchGifs(this.state.search)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}value={this.state.search}>
        <label>
          Search:
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default GifSearch;
