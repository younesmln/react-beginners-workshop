import React from "react";
import GifsList from "./GifsList";
import { fetchGifs } from "../api";

class GiphySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchKeyword: "", gifs: [], isFirstTime: true };
    this.search = this.search.bind(this);
  }

  search() {
    fetchGifs(this.state.searchKeyword).then(body =>
      this.setState({ gifs: body.data, isFirstTime: false })
    );
  }

  render() {
    const { searchKeyword, gifs, isFirstTime } = this.state;
    return (
      <div className="giphy">
        <div className="search">
          <input
            placeholder="search for gifs"
            onChange={e => {
              this.setState({ searchKeyword: e.target.value });
            }}
            value={searchKeyword}
          />
          <button onClick={this.search}>Search</button>
          <GifsList gifs={gifs} isFirstTime={isFirstTime} />
        </div>
      </div>
    );
  }
}

export default GiphySearch;
