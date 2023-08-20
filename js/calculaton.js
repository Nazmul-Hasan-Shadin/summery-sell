function cartPriceValue(priceId) {
  const totalPrice = document.getElementById(priceId).innerText;

  const price = parseFloat(totalPrice);

  return price;
}

//  update price
function updatePrice(priceSelector, total) {
  let priceElement = document.getElementById(priceSelector);
  console.log(priceElement);
  priceElement.innerText = total;
}



const singleProductCards = document.getElementsByClassName("card");
for (const singleProductCard of singleProductCards) {
  const productHandle = singleProductCard.addEventListener(
    "click",
    function (event) {
      console.log(event);

      const priceText = event.target
        .closest(".card")
        .querySelector(".card-actions")
        .querySelector("small").innerText;
      const price = parseFloat(priceText);

      const cartPreviousPrice = cartPriceValue("total-price");

      const totalPrice = price + cartPreviousPrice;
      const parent = document.getElementById("added-items");
      const productTitle = event.target
        .closest(".card")
        .querySelector(".card-body h2").innerText;

      const p = document.createElement("p");
      p.classList.add('text-2xl')
      p.innerText = productTitle;
      parent.appendChild(p);
      updatePrice("total-price", totalPrice);
    }
  );
}
