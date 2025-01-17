// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here

  const price = Number(product.querySelector(".price span").innerText);
  const quantity = Number(product.querySelector(".quantity input").value);
  const subtotal = price * quantity;
  product.querySelector(".subtotal span").innerText = subtotal;
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const dosProductos = document.getElementsByClassName("product");
  let subTotal2 = 0;
  for (let i = 0; i < dosProductos.length; i++) {
    subTotal2 += updateSubtotal(dosProductos[i]);
  
  }

//   // ITERATION 3
//   //... your code goes here

const totalTotal = document.querySelector("#total-value span").innerHTML = subTotal2;
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const btnRemove = target.parentElement;
  const productRemoved = btnRemove.parentElement;
  productRemoved.parentElement.removeChild(productRemoved);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
