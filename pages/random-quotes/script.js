const quoteText = document.querySelector(".quote");
quoteBtn = document.querySelector("button");

function randomQuote() {
    fetch ("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
      console.log(result)
    });
}

quoteBtn.addEventListener("click", randomQuote);