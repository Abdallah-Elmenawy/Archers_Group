/* ==================================
START SCRIPT BUTTON SCROLL TO TOP
================================== */
let scrollDiv = document.querySelector(".scrollTop");
scrollDiv.onclick = () => {
    window.scrollTo(
        {
            top: 0,
            behavior:"smooth"
        }
    );
};

/* ====================================
    START SCRIPT CREATE COUNTDOWN TIMER
    ==================================== */
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {

    let dateNow = new Date().getTime();

    let dateDifference = countDownDate - dateNow ;

    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    let minutes = Math.floor((dateDifference % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((dateDifference % (1000 * 60 )) / 1000 );

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000 );
/* =======================================
    START SCRIPT FUNCTION WINDOW SCROLLING
    ====================================== */

let startSection = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .number");
let started = false;
function startCount(el) {
    let number = el.dataset.number;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == number) {
            clearInterval(count);
        }
    }, 2000 / number);
}
/* =======================================
    START SCRIPT FUNCTION WINDOW SCROLLING
    ====================================== */
window.onscroll = () => {
    /* -------------------  When Scroll To Top  ------------------- */
    this.scrollY >= 1000 ? scrollDiv.classList.add("active") : scrollDiv.classList.remove("active") ;


    /* ========================================
    START SCRIPT TRANSITION ON THE PROGRESS
    ======================================== */

    let section = document.querySelector(".our-skills");
    let progressSpans = document.querySelectorAll(".the-progress span");
    /* -------------------  When Scroll Offset Top Section Skills  ------------------- */
    if (window.scrollY >= section.offsetTop - 250 ) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    };


    /* -------------------  When Scroll Offset Top Section Stars  ------------------- */
    if (window.scrollY >= startSection.offsetTop - 250 ) {
        if (!started) {
            numbers.forEach((num) => startCount(num));
        };
        started = true;
    };
};