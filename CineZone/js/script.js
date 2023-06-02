// URL variables
const global = window.location.pathname.split("/");
const searchUI = window.location.search.split("&");
// DOM Selectors
const popularMovies = document.querySelector("#popular-movies");
const swiper = document.querySelector(".swiper-wrapper");
const popularTV = document.querySelector("#popular-shows");
const searchResult = document.querySelector("#search-results");
const movieDetails = document.querySelector("#movie-details");
const tvShowsDetails = document.querySelector("#show-details");

// INDEX****************************************************************

async function displayNowPlaying() {
  const results = await fetchAPIData("movie/now_playing");
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  swiperWrapper.innerHTML = "";

  results.results.forEach((movie) => {
    let imgSrc;
    if (movie.poster_path === null) {
      imgSrc = "./images/no-image.jpg";
    } else {
      imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `<a href="movie-details.html?id=${movie.id}">
      <img src="${imgSrc}" alt="${movie.title}" />
    </a>
    <h4 class="swiper-rating">
      <i class="fas fa-star text-secondary"></i> ${movie.vote_average} / 10
    </h4>`;
    swiperWrapper.appendChild(slide);
  });

  // Initialize Swiper slider after adding slides
  const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
      delay: 1500,
    },
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
          <a href="index.html" target="_blank" class="btn">Visit Movie Homepage</a>
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
// TVSHOW DETAILS****************************************************
async function displayTvShowsDetails() {
  tvShowsDetails.innerHTML = "";
  const tvShowsID = searchUI[0].slice(4);
  const results = await fetchAPIData(`tv/${tvShowsID}`);
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
  tvShowsDetails.innerHTML = `
    <div class="details-top">
      <div>
        <img
          src="${imgSrc}"
          class="card-img-top"
          alt="${results.original_name}"
        />
      </div>
      <div>
        <h2>${results.original_name}</h2>
        <p>
          <i class="fas fa-star text-primary"></i>
          ${Math.round(results.vote_average * 10) / 10} / 10
        </p>
        <p class="text-muted"> Air Date: ${results.first_air_date}</p>
        <p>
          ${results.overview}
        </p>
        <h5>Genres</h5>
        <ul class="list-group">
          <li>${multipleGenres}</li>
        </ul>
        <a href="shows.html" target="_blank" class="btn">Visit TV Show Homepage</a>
      </div>
    </div>
    <div class="details-bottom">
      <h2>TV Show Info</h2>
      <ul>
        <li><span class="text-secondary">Number of Seasons:</span> ${
          results.number_of_seasons
        }</li>
        <li><span class="text-secondary">Number of Episodes:</span> ${
          results.number_of_episodes
        }</li>
        <li><span class="text-secondary">Status:</span> ${results.status}</li>
      </ul>
      <h4>Production Companies</h4>
      <div class="list-group">${multipleCompany}</div>
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
let i = 1;
function next() {
  i = i + 1;
  displaySearch();
}
function prev() {
  i = i - 1;
  displaySearch();
}
async function displaySearch() {
  let page = i;
  const searchType = searchUI[0].slice(6);
  const searchTerm = searchUI[1].slice(12);
  searchResult.innerHTML = "";
  if (searchTerm == "") {
    searchResult.innerHTML =
      "<h2>PLEASE INPUT YOUR LETTERS OR WORDS YOU WANT TO SEARCH</h2>";
    searchResult.style.color = "red";
  } else {
    const results = await fetchAPIDataSearch(
      `search/${searchType}`,
      `${searchTerm}`,
      `${page}`
    );
    document.querySelector(
      "#search-results-heading"
    ).innerHTML = `<h2>20 OF ${results.total_results} Results for ${searchTerm} </h2>`;
    if (searchType === "movie") {
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
    } else if (searchType === "tv") {
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
        searchResult.appendChild(div);
      });
    }
    if (results.page === 1) {
      document.querySelector("#prev").style.background = "#666";
      document.querySelector("#prev").style.color = "#999";
      document.querySelector("#prev").removeEventListener("click", prev);
    } else {
      document.querySelector("#prev").style.background = "";
      document.querySelector("#prev").style.color = "";
      document.querySelector("#prev").addEventListener("click", prev);
    }
    if (results.page !== results.total_pages) {
      document.querySelector("#next").addEventListener("click", next);
    } else {
      document.querySelector("#next").style.background = "#666";
      document.querySelector("#next").style.color = "#999";
      document.querySelector("#next").removeEventListener("click", next);
    }
    document.querySelector("#search-term").value = `${searchTerm}`;
    document.querySelector(
      ".page-counter"
    ).innerHTML = `Page ${results.page} of ${results.total_pages}`;
  }
}

// ******************************************************************
// Fetch data from TMDB API /////SEARCH/////
async function fetchAPIDataSearch(endpoint, query, page) {
  const API_KEY = "ba443e63c90864d5dffb2a2255267b7e";
  const API_URL = "https://api.themoviedb.org/3/";
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`
  );
  const data = await response.json();
  return data;
}

// INITS
function init() {
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
  if (global[1] === `tv-details.html`) {
    displayTvShowsDetails();
  }
}
init();
