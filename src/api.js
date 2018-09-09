export function fetchGifs(searchKeyword) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3uFNCQSXD7E2cq0Mi754OHifIP556FE3&q=${searchKeyword}`;
  return fetch(url).then(response => response.json());
}
