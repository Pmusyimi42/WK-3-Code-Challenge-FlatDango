let currentId = 0;
let ticketSold = 0;
document.addEventListener('DOMContentLoaded',()=>{
    getData();
    updateMovieTicket();
})
function getData(){
    fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data => data.map(handleResponse))
};

const movieTitle = document.getElementById('movieTitle')
const movieDescription = document.getElementById('movieDescription')
const poster = document.querySelector('div.card img')
const showTime = document.getElementById('showTime')
const runTime = document.getElementById('runTime')
const capacity = document.getElementById('capacity')
const soldTickets = document.getElementById('ticketsSold')
const availableTickets = document.getElementById('availableTickets')
const button = document.getElementById('buyTicket')

function handleClick(){
    ticketSold = ticketSold + 1
    fetch(`http://localhost:3000/films/${currentId}`, {
        method : 'PATCH',
        headers : {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body : JSON.stringify({
            tickets_sold : ticketSold

        })
    })
}

function handleResponse(movie){
    currentId = movie.id
    ticketSold = movie.tickets_sold
    movieTitle.innerText = movie.title
    movieDescription.innerText = movie.description
    poster.src = movie.poster
    showTime.innerText = movie.showtime
    runTime.innerText = movie.runtime
    capacity.innerText = movie.capacity
    soldTickets.innerText = ticketSold
    availableTickets.innerText = movie.capacity - movie.tickets_sold

}



function updateMovieTicket(currentId) {
    button.addEventListener("click", handleClick)

};
