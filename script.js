const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

/*Almacenar pelicula seleccionada y precio
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}*/


//Actualizar conteo y pago

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

   /* const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));*/

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//Seleccionar asientos

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

//Seleccionar pelicula

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    //setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

