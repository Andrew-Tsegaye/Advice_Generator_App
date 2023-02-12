function fetchApi() {
  const api = "https://api.adviceslip.com/advice";
  const adviceId = document.getElementById("advice-id");
  const adviceQuote = document.getElementById("advice-quote");

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const adviceJson = data["slip"];

      adviceId.innerHTML = adviceJson["id"];
      adviceQuote.innerHTML = adviceJson["advice"];
    });
}

function main() {
  const dr = setInterval(function () {
    if (document.readyState === "complete") {
      return;
    }
    // clearInterval(dr);
  }, 100);

  fetchApi();
}

const rolarDado = document.getElementById("dado");

rolarDado.addEventListener("click", function () {
  const imgBotao = rolarDado.getElementsByTagName("img")[0];
  imgBotao.className = "";

  const rowDice = window.setInterval(function () {
    imgBotao.className += "spin-animation";
    clearInterval(rowDice);
  }, 100);

  fetchApi();
});

main();
