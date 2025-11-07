const BASE_URL = "https://open.er-api.com/v6/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".primary-btn");
const swapBtn = document.querySelector(".swap");
const fromCurr = document.querySelector("select[name='from']");
const toCurr = document.querySelector("select[name='to']");
const msg = document.querySelector(".msg");
const amountInput = document.querySelector("#amount");

// Assuming countryList is already defined like:
// const countryList = { USD: "US", INR: "IN", ... }

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amtVal = parseFloat(amountInput.value);
  if (!amtVal || amtVal < 1) {
    amtVal = 1;
    amountInput.value = "1";
  }

  const from = fromCurr.value.toUpperCase();
  const to = toCurr.value.toUpperCase();

  const URL = `${BASE_URL}/${from}`;
  msg.innerText = "Fetching exchange rate...";

  try {
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.rates[to];

    if (!rate) {
      msg.innerText = "Currency not supported.";
      return;
    }

    let finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${from} = ${finalAmount} ${to}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rate.";
    console.error(error);
  }
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

if (swapBtn) {
  swapBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    const fromValue = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = fromValue;
    updateFlag(fromCurr);
    updateFlag(toCurr);
    updateExchangeRate();
  });
}

window.addEventListener("load", () => {
  updateExchangeRate();
});
