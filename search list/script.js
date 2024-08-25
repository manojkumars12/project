const API_KEY = '8eb06a94';
const API_URL = 'https://www.omdbapi.com';
function searchMovie(){
  const searchInput = document.getElementById('searchInput').value;
  const url = `${API_URL}?apikey=${API_KEY}&s=${searchInput}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
      data.Search.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
          <h2>${movie.Title}</h2>
          <p>Year: ${movie.Year}</p>
          <p>IMDB Rating: ${movie.imdbRating}</p>
          <img src="${movie.Poster}" alt="${movie.Title}">
        `;
        resultsDiv.appendChild(movieDiv);
      });
    })
    .catch(error => console.error(error));
}