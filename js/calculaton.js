function priceFloter(priceId) {
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

      const cartPreviousPrice = priceFloter("total-price");

      const totalPrice =( price + cartPreviousPrice).toFixed(2);
      updatePrice("total-price", totalPrice)
      updatePrice('rest-total', totalPrice)
      totalPriceCalculation();

      //   p element create
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

function totalPriceCalculation() {
  const totalPrice = priceFloter("total-price");

  if (totalPrice >= 0) {
    const purchaseBtn = document
      .getElementById("purchase-btn")
      .removeAttribute("disabled");
  }
}

// function discountCalculation() {
//   const couponField = document.getElementById("coupon-value");
//   const couponBtn = document.getElementById("coupon-code-btn");
//   console.log(couponBtn, couponField);

//   couponField.addEventListener("input", function () {
//     if (couponField.value.trim === "SELL200") {
//       couponBtn.removeAttributeNS("disabled");
//     } else {
//       couponBtn.setAttribute("disabled", disabled);
//     }
//   });
// }

document.getElementById("coupon-value").addEventListener('keyup',function(){
    const totalPrice = priceFloter("total-price");

    const couponBtn = document.getElementById("coupon-code-btn");
    const couponField=document.getElementById("coupon-value");
    if (totalPrice>=200 && couponField.value === 'SELL200' ) {
      
            couponBtn.removeAttribute("disabled")
    }
    else{
         couponBtn.setAttribute('disabled',true)
    }
})

document.getElementById('coupon-code-btn').addEventListener('click',function(){
    const totalPrice = priceFloter("total-price")
    const restTotal= priceFloter('rest-total');
  
    const couponField=document.getElementById("coupon-value");
    if (totalPrice>=200 && couponField.value === 'SELL200' ) {
      
         const discount= (totalPrice * 0.2).toFixed(2)
         const restTotal= ( totalPrice- discount).toFixed(2)
         
         updatePrice('rest-total',restTotal);
         updatePrice('discount-price',discount)
        
        
        }
})

document.getElementById('home-btn').addEventListener('click',function(){
  const cartProductParent = document.getElementById("added-items");
  console.log(cartProductParent);

   const value= '00.00';
   updatePrice('total-price', value)
   updatePrice('discount-price' ,value);
   updatePrice('rest-total',value);
   
    for(const item of cartProductParent){
      item.remove();
    }

})