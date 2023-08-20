const singleProductCards = document.getElementsByClassName("card");
for (const singleProductCard of singleProductCards) {
  const productHandle = singleProductCard.addEventListener(
    "click",
    function (event) {
      const priceText = event.target
        .closest(".card")
        .querySelector(".card-actions")
        .querySelector("small").innerText;
      const price = parseFloat(priceText);

      const cartPreviousPrice = priceFloter("total-price");

      const totalPrice = (price + cartPreviousPrice).toFixed(2);
      updatePrice("total-price", totalPrice);
      updatePrice("rest-total", totalPrice);
      totalPriceCalculation();

    
      const parent = document.getElementById("added-items");
      const productTitle = event.target
        .closest(".card")
        .querySelector(".card-body h2").innerText;

      const p = document.createElement("p");

      p.classList.add("text-2xl", "font-medium", "my-3");

      const numberOfChildElements = parent.querySelectorAll("p").length + 1;
      p.innerText = `${numberOfChildElements}. ${productTitle}`;

      parent.appendChild(p);
    }
  );
}


document.getElementById("coupon-value").addEventListener("keyup", function () {
  const totalPrice = priceFloter("total-price");

  const couponBtn = document.getElementById("coupon-code-btn");
  const couponField = document.getElementById("coupon-value");
  if (totalPrice >= 200 && couponField.value === "SELL200") {
    couponBtn.removeAttribute("disabled");
  } else {
    couponBtn.setAttribute("disabled", true);
  }
});

document
  .getElementById("coupon-code-btn")
  .addEventListener("click", function () {
    const totalPrice = priceFloter("total-price");
    const restTotal = priceFloter("rest-total");

    const couponField = document.getElementById("coupon-value");
    if (totalPrice >= 200 && couponField.value === "SELL200") {
      const discount = (totalPrice * 0.2).toFixed(2);
      const restTotal = (totalPrice - discount).toFixed(2);

      updatePrice("rest-total", restTotal);
      updatePrice("discount-price", discount);
    }
  });



document.getElementById("home-btn").addEventListener("click", function () {
  const value = "00.00";
  updatePrice("total-price", value);
  updatePrice("discount-price", value);
  updatePrice("rest-total", value);

  cartClear();
});
