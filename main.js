const exchangeRate = 23216;
const KRWExchangeRate = 19.6376;

currency = prompt("choose your currency 'vnd' or 'usd'?");
amount = prompt("input the amount");
if (isNaN(amount)) {
  finalmessage = "its not number";
} else {
  if (currency.toLowerCase().includes("vnd".toLowerCase())) {
    const amountUSD = vndToUsd(amount);
    finalmessage =
      formatNumber(amount) +
      "VND" +
      "is same as " +
      formatNumber(amountUSD) +
      "USD";
  } else if (currency.toLowerCase().includes("usd".toLowerCase())) {
    const amountVND = usdToVnd(amount);
    finalmessage =
      formatNumber(amount) +
      "USD" +
      "is same as " +
      formatNumber(amountVND) +
      "VND";
  } else {
    finalmessage = "you type the wrong currency " + currency;
  }
}
console.log(finalmessage);

function vndToUsd(amountVnd) {
  exchangeUSD = amountVnd / exchangeRate;
  return exchangeUSD.toFixed(2);
}

function usdToVnd(amountUsd) {
  exchangeVND = amountUsd * exchangeRate;
  return exchangeVND.toFixed(0);
}
function vndToKRW(amountVnd) {
  exchangeKRW = amountVnd / KRWExchangeRate;
  return exchangeKRW.toFixed(0);
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
