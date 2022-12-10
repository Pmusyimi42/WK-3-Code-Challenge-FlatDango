document.addEventListener('DOMContentLoaded',()=>{
    getData();
})
function getData(){
    fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data => data.map(handleResponse))
};
const movieTitle = document.getElementById('movieTitle')
const movieDescription = document.getElementById('movieDescription')
const poster = document.querySelector('div.card img')
function handleResponse(movie){
    movieTitle.innerText = movie.title
    movieDescription.innerText = movie.description
    poster.src = movie.poster

}