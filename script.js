const quoteDiv = document.querySelector("#quote-div");
const btn = document.querySelector("#button");

function getQuotes() {
  fetch("https://api.kanye.rest/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showQuotes(data);
    });
}

function showQuotes(data) {
  // create h1
  const h2 = document.createElement("h2");

  // access to quote
  const quote = data.quote;
  console.log(data);

  // append
  h2.append(quote);
  quoteDiv.appendChild(h2);

  h2.id = "h2";
}

function reloadQuote() {
  location.reload();
}

btn.addEventListener("click", reloadQuote);

getQuotes();
