document.addEventListener("DOMContentLoaded", () => {

const circles = document.querySelectorAll(".div-circle");
const ratingScreen = document.getElementById("rating-state-start");
const thankYouScreen = document.getElementById("rating-state-end");
const submitButton = document.querySelector(".submit-btn");
const finalNumber = document.getElementById("final-number");

let selectedRating;


function highlightSelectedRating(selectedElement){
    circles.forEach((item) => {
        item.style.backgroundColor = "";
    });
};




circles.forEach((item) => {
    item.addEventListener("click", (event) => {
        const selectedValue = event.currentTarget.querySelector(".numbers").textContent;
        selectedRating = selectedValue;
        highlightSelectedRating(event.currentTarget);
        event.currentTarget.style.backgroundColor = "var(--orange)";
        console.log(selectedRating);
    });
});


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
