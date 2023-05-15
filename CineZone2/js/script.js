const pageLocation = window.location.pathname.split("/");
const popularMovies = document.querySelector("#popular-movies");
const swiper = document.querySelector("#now-playing");

async function displayPopularMovies() {
  popularMovies.innerHTML = "";
  const results = await fetchAPIData("movie/popular");

  results.forEach((movie) => {
    console.log(movie);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<a href="movie-details.html?id=${movie.id}">
                <img
                src="https:image.tmdb.org/t/p/w500${movie.poster_path}"
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

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = "ba443e63c90864d5dffb2a2255267b7e";
  const API_URL = "https://api.themoviedb.org/3/";
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data.results;
}
fetchAPIData(`movie/now_playing`);
displayPopularMovies();

const populartv = document.querySelector("#popular-shows");
async function PopularTVShow() {
  populartv.innerHTML = "";
  const results = await fetchAPIData("tv/popular");

  results.forEach((TVShow) => {
    console.log(TVShow);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<a href="tv-details.html?id=1=${TVShow.id}">
                  <img
                  src="https:image.tmdb.org/t/p/w500${TVShow.poster_path}"
                    class="card-img-top"
                    alt="${TVShow.name}"
                  />
                </a>
                <div class="card-body">
                  <h5 class="card-title">${TVShow.name}</h5>
                  <p class="card-text">
                    <small class="text-muted">Release: ${TVShow.first_air_date}</small>
                  </p>
                </div>`;
    populartv.appendChild(div);
  });
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = "ba443e63c90864d5dffb2a2255267b7e";
  const API_URL = "https://api.themoviedb.org/3/";
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data.results;
}
PopularTVShow();

// const movieDetails = document.querySelector("#movie-details");
// async function newmovieDetails() {
//   movieDetails.innerHTML = "";
//   const results = await fetchAPIData("movie/details");

//   results.forEach((movie) => {
//     console.log(movie);
//     const div = document.createElement("div");
//     div.classList.add("card");
//     div.innerHTML = `<a href="tv-details.html?id=1=${TVShow.id}">
//                   <img
//                   src="https:image.tmdb.org/t/p/w500${TVShow.poster_path}"
//                     class="card-img-top"
//                     alt="${TVShow.name}"
//                   />
//                 </a>
//                 <div class="card-body">
//                   <h5 class="card-title">${TVShow.name}</h5>
//                   <p class="card-text">
//                     <small class="text-muted">Release: ${TVShow.first_air_date}</small>
//                   </p>
//                 </div>`;
//     populartv.appendChild(div);
//   });
// }

// // Fetch data from TMDB API
// async function fetchAPIData(endpoint) {
//   const API_KEY = "ba443e63c90864d5dffb2a2255267b7e";
//   const API_URL = "https://api.themoviedb.org/3/";
//   const response = await fetch(
//     `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
//   );
//   const data = await response.json();
//   return data.results;
// }
// newmovieDetails();

const movieDetails = document.querySelector("#movie-details");
async function movDetails() {
  movieDetails.innerHTML = "";
  const results = await fetchAPIData("movie/details");

  results.forEach((movie) => {
    console.log(movie);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img
    src="https:image.tmdb.org/t/p/w500${movie.poster_path}"
    class="card-img-top"
    alt="${movie.title}"
  />
</div>
<div>
  <h2>${movie.title}</h2>
  <p>
    <i class="fas fa-star text-primary"></i>
    8 / 10
  </p>
  <p class="text-muted">Release Date: </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
    atque molestiae error debitis provident dolore hic odit, impedit
    sint, voluptatum consectetur assumenda expedita perferendis
    obcaecati veritatis voluptatibus. Voluptatum repellat suscipit,
    quae molestiae cupiditate modi libero dolorem commodi obcaecati!
    Ratione quia corporis recusandae delectus perspiciatis consequatur
    ipsam. Cumque omnis ad recusandae.${movie.overview}
  </p>
  <h5>${movie.genre_ids}</h5>
  <ul class="list-group">
    <li>Genre 1</li>
    <li>Genre 2</li>
    <li>Genre 3</li>
  </ul>
  <a href="#" target="_blank" class="btn">Visit Movie Homepage</a>
</div>
</div>
<div class="details-bottom">
<h2>Movie Info</h2>
<ul>
  <li><span class="text-secondary">Budget:</span> $1,000,000</li>
  <li><span class="text-secondary">Revenue:</span> $2,000,000</li>
  <li><span class="text-secondary">Runtime:</span> 90 minutes</li>
  <li><span class="text-secondary">Status:</span> Released</li>
</ul>`;
    movieDetails.appendChild(div);
  });
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = "ba443e63c90864d5dffb2a2255267b7e";
  const API_URL = "https://api.themoviedb.org/3/";
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data.results;
}
movDetails();

// async function displayPopularMovies() {
//   popularMovies.innerHTML = "";
//   const results = await fetchAPIData("movie/popular");

//   results.forEach((movie) => {
//     const div = document.createElement("div");
//     div.classList.add("card");
//     div.innerHTML = `<a href="movie-details.html?id=${movie.id}">
//                 <img
//                 src="https:image.tmdb.org/t/p/w500${movie.poster_path}"
//                   class="card-img-top"
//                   alt="${movie.title}"
//                 />
//               </a>
//               <div class="card-body">
//                 <h5 class="card-title">${movie.title}</h5>
//                 <p class="card-text">
//                   <small class="text-muted">Release: ${movie.release_date}</small>
//                 </p>
//               </div>`;
//     popularMovies.appendChild(div);
//   });
// }

// // Fetch data from TMDB API
// async function fetchAPIData(endpoint) {
//   const API_KEY = "ba443e63c90864d5dffb2a2255267b7e";
//   const API_URL = "https://api.themoviedb.org/3/";
//   const response = await fetch(
//     `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
//   );
//   const data = await response.json();
//   return data.results;
// }
// // fetchAPIData(`movie/now_playing`);
// displayPopularMovies();

// // console.log(window.location.pathname);

const global = {
  currentPage: window.location.pathname,
};

//Highlight active link
function highlightActive() {
  const links = document.querySelectorAll("nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage)
      link.classList.add("active");
  });
}

// // // Init App
// function.init(){
//     switch (global.currentPage){
//         case '/':
//         case '/index.html':
//           console.log('Home');
//           break
//     }
// }
// init()
// // //Display 20 most popular movies
// async function displayPopularmovie(){
//     const { results } = await fetchAPIData('movie/popular');

//     results.forEach((movie) => {
//         const div = document.createElement('div');
//         div.classList.add('card');
//         div.innerHTML = `
//         <a href="movie-detail.html?id=${movie.id}">
//         ${
//             movie.poster_path
//             ?`img
//             src="https://image.tmdb.org/t/p/w500${movie.poster_path}`
//             class="card-img-top"
//             alt="${movie.title}"
//             />
//         }
//     }

// //Fetch data from TMDB API
// async function fetchAPIData(endpoint){
//     //Register your key at https://www.themoviedb.org/settings/api and enter here
//     const API_KEY = 'ba443e63c90864d5dffb2a2255267b7e'
// }
