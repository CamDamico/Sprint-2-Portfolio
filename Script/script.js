document.querySelector("#btn").addEventListener("click", getCurrentValue);

function getCurrentValue() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://blockchain.info/q/24hrprice");

  xhr.onload = function () {
    if (this.status === 200) {
      let data = this.responseText;

      let output = `Price of BitCoin is ${this.responseText} (USD)`;

      document.querySelector("#output").innerHTML = output;
    }
    setTimeout(function () {
      this.responseText;
    }, 1000);
  };
  xhr.send();
}
