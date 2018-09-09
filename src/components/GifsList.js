import React from "react";

class GifsList extends React.Component {
  render() {
    const { gifs, isFirstTime } = this.props;
    return (
      <div className="gifs-list">
        {isFirstTime && "type something to search for"}
        {!isFirstTime &&
          gifs.map(gif => (
            <div className="gif" key={gif.id}>
              <img src={gif.images.original.url} />
            </div>
          ))}
      </div>
    );
  }
}

export default GifsList;
