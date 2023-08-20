function priceFloter(priceId) {
    const totalPrice = document.getElementById(priceId).innerText;
    const price = parseFloat(totalPrice);
    return price;
  }

  

function updatePrice(priceSelector, total) {
    let priceElement = document.getElementById(priceSelector);
    console.log(priceElement);
    priceElement.innerText = total;
  }
  
  function totalPriceCalculation() {
    const totalPrice = priceFloter("total-price");
  
    if (totalPrice >= 0) {
      const purchaseBtn = document
        .getElementById("purchase-btn")
        .removeAttribute("disabled");
    }
    
  }




function cartClear() {
    const addedItems= document.getElementById('added-items')
    while (addedItems.nextElementSibling) {
      addedItems.removeChild(addedItems.firstChild);
      
      const purchaseBtn = document.getElementById('purchase-btn');
      purchaseBtn.disabled = true;
      
      
      const applyBtn = document.getElementById('coupon-code-btn');
      applyBtn.disabled = true;
  
    }

   }