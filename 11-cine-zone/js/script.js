// URL variables
const global = window.location.pathname.split("/");
const searchUI = window.location.search.split("&");
// DOM Selectors
const popularMovies = document.querySelector("#popular-movies");
const swiper = document.querySelector(".swiper-wrapper");
const popularTV = document.querySelector("#popular-shows");
const searchResult = document.querySelector("#search-results");
const movieDetails = document.querySelector("#movie-details");
// console.log(global[1]);***************

// INDEX****************************************************************

async function displayNowPlaying() {
  swiper.innerHTML = "";
  const results = await fetchAPIData("movie/now_playing");
  results.results.forEach((movie) => {
    let imgSrc;
    if (movie.poster_path === null) {
      imgSrc = "./images/no-image.jpg";
    } else {
      imgSrc = `https:image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    const div = document.createElement("div");
    div.className = `swiper-slide1`; ///////////////////////////
    div.innerHTML = `<a href="movie-details.html?id=${movie.id}">
    <img
    src="${imgSrc}"
      alt="./images/no-image.jpg"
    />
    </a>
    <h4 class="swiper-rating">
    <i class="fas fa-star text-secondary"></i>${movie.vote_average}/ 10
    </h4>`;
    swiper.appendChild(div);
  });
}

async function displayPopularMovies() {
  popularMovies.innerHTML = "";
  const results = await fetchAPIData("movie/popular");

  results.results.forEach((movie) => {
    let imgSrc;
    if (movie.poster_path === null) {
      imgSrc = "./images/no-image.jpg";
    } else {
      imgSrc = `https:image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<a href="movie-details.html?id=${movie.id}">
              <img
              src="${imgSrc}"
                class="card-img-top"
                alt="${movie.title}"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">
                <small class="text-muted">Release: ${movie.release_date}</small>
              </p>
            </div>`;
    popularMovies.appendChild(div);
  });
}
// ******************************************************************
// TVSHOWS***********************************************************
async function displayPopularTV() {
  popularTV.innerHTML = "";
  const results = await fetchAPIData("tv/popular");

  results.results.forEach((show) => {
    let imgSrc;
    if (show.poster_path === null) {
      imgSrc = "./images/no-image.jpg";
    } else {
      imgSrc = `https:image.tmdb.org/t/p/w500${show.poster_path}`;
    }
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<a href="tv-details.html?id=${show.id}">
        <img
        src="${imgSrc}"
        class="card-img-top"
        alt="./images/no-image.jpg"
        />
        </a>
        <div class="card-body">
        <h5 class="card-title">${show.name}</h5>
        <p class="card-text">
        <small class="text-muted">Aired: ${show.first_air_date}</small>
        </p>
        </div>`;
    popularTV.appendChild(div);
  });
}
// ******************************************************************
// MOVIE DETAILS*****************************************************
async function displayMovieDetails() {
  movieDetails.innerHTML = "";
  const movieID = searchUI[0].slice(4); ///////
  const results = await fetchAPIData(`movie/${movieID}`);
  let imgSrc;
  if (results.poster_path === null) {
    imgSrc = "./images/no-image.jpg";
  } else {
    imgSrc = `https:image.tmdb.org/t/p/w500${results.poster_path}`;
  }
  let multipleGenres = [];
  results.genres.forEach((genre) => multipleGenres.push(genre.name));
  let multipleCompany = [];
  results.production_companies.forEach((company) =>
    multipleCompany.push(company.name)
  );
  movieDetails.innerHTML = `
      <div class="details-top">
        <div>
          <img
            src="${imgSrc}"
            class="card-img-top"
            alt="${results.title}"
          />
        </div>
        <div>
          <h2>${results.title}</h2>
          <p>
            <i class="fas fa-star text-primary"></i>
            ${Math.round(results.vote_average * 10) / 10} / 10
          </p>
          <p class="text-muted">Release Date: ${results.release_date}</p>
          <p>
          ${results.overview}
          </p>
          <h5>Genres</h5>
          <ul class="list-group"><li>
            ${multipleGenres.join("</li><li>")}</li>
          </ul>
          <a href="#" target="_blank" class="btn">Visit Movie Homepage</a>
        </div>
      </div>
      <div class="details-bottom">
        <h2>Movie Info</h2>
        <ul>
          <li><span class="text-secondary">Budget:</span> $${
            results.budget
          }</li>
          <li><span class="text-secondary">Revenue:</span> $${
            results.revenue
          }</li>
          <li><span class="text-secondary">Runtime:</span> ${
            results.runtime
          } minutes</li>
          <li><span class="text-secondary">Status:</span> ${results.status}</li>
        </ul>
        <h4>Production Companies</h4>
        <div class="list-group">${multipleCompany.join(", ")}</div>
      </div>`;
}

// ******************************************************************
// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = "ba443e63c90864d5dffb2a2255267b7e";
  const API_URL = "https://api.themoviedb.org/3/";
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
}

// ******************************************************************
// SEARCH****************************************************
// URL Variables
async function displaySearch() {
  const searchType = searchUI[0].slice(6);
  const searchTerm = searchUI[1].slice(12);
  searchResult.innerHTML = "";
  const results = await fetchAPIDataSearch(
    `search/${searchType}`,
    `${searchTerm}`
  );
  results.results.forEach((movie) => {
    let imgSrc;
    if (movie.poster_path === null) {
      imgSrc = "./images/no-image.jpg";
    } else {
      imgSrc = `https:image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<a href="movie-details.html?id=${movie.id}">
                <img
                src="${imgSrc}"
                  class="card-img-top"
                  alt="${movie.title}"
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">
                  <small class="text-muted">Release: ${movie.release_date}</small>
                </p>
              </div>`;
    searchResult.appendChild(div);
  });
}
// ******************************************************************
// Fetch data from TMDB API /////SEARCH/////
async function fetchAPIDataSearch(endpoint, query) {
  const API_KEY = "ba443e63c90864d5dffb2a2255267b7e";
  const API_URL = "https://api.themoviedb.org/3/";
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&query=${query}&language=en-US`
  );
  const data = await response.json();
  return data;
}

// INITS
if (global[1] === `index.html` || global[1] === "") {
  displayPopularMovies();
  displayNowPlaying();
}
if (global[1] === `shows.html`) {
  displayPopularTV();
}
if (global[1] === `search.html`) {
  displaySearch();
}
if (global[1] === `movie-details.html`) {
  displayMovieDetails();
}
