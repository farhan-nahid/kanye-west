// load data from api

document.getElementById("quote__button").addEventListener("click", () => {
  const spinner = document.getElementById("spinner");
  spinner.removeAttribute("hidden");
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => {
      spinner.setAttribute("hidden", "");
      displayQuote(data.quote);
    });
});

// display data from api

const displayQuote = (quote) => {
  document.getElementById("quote__container").innerHTML = `
        <div class = "quote__image">
            <img src = 'https://i.ibb.co/cTs8PVx/Kanye-West.jpg' alt="Kanye-West" />
        </div>
        <div class="quote__content">
           <blockquote> ${quote} </blockquote>
        </div>
  `;
};
