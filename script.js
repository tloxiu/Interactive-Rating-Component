document.addEventListener("DOMContentLoaded", () => {

const circles = document.querySelectorAll(".div-circle"); //transition // przyciski
const ratingScreen = document.getElementById("rating-state-start"); //evaluation //jeden ekran
const thankYouScreen = document.getElementById("rating-state-end"); //thanks //drugi ekran
const submitButton = document.querySelector(".submit-btn"); //tak samo //przycisk
const finalNumber = document.getElementById("final-number"); //final-message //informacja o wyborze

let selectedRating; //wybrany ocena - wybór diva (przycisku)


//funkcja resetująca w tym samym czasie kolor innych przedtem naciśnietych przycisków aby tylko jeden mógł być koloru pomarańczowego
function highlightSelectedRating(selectedElement){
    circles.forEach((item) => {
        item.style.backgroundColor = "";
    });
};




//nasłuchiwanie na kliknięcie na przyciski
circles.forEach((item) => {
    item.addEventListener("click", (event) => {
        const selectedValue = event.currentTarget.querySelector(".numbers").textContent; //event.currentTarget odnosi się do elementu który obsługuje zdarzenie click (div-circle), querySelector(".numbers") odnosi się do potomka tego elementu czyli (.numbers), który zawiera wartość do pobrania, a textContent zwraca właśnie ten tekst
        selectedRating = selectedValue; //przypisanie wartości do zmiennej aby potem ją wyswietlić
        highlightSelectedRating(event.currentTarget);
        event.currentTarget.style.backgroundColor = "var(--orange)";
        console.log(selectedRating);
    });
});

//sprawdzanie czy w ogóle coś jest zaznaczone (czyli jest true - bo coś tam jest)
submitButton.addEventListener("click", () => {
    if(selectedRating){
        ratingScreen.classList.remove("show")
        ratingScreen.classList.add("hide")
        thankYouScreen.classList.remove("hide")
        thankYouScreen.classList.add("show")

        finalNumber.textContent = `You selected ${selectedRating} out of 5`;
    }
})

});
