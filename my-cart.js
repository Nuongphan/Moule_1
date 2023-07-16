
let carts = JSON.parse(localStorage.getItem("cart")) || [];
function renderCart() {
  let productsCart = "";
  let total = "";
  carts.forEach((product) => {
    productsCart += `<div class="render-carts-item">
              <div class="carts-item-1">
                <div class="carts-item-1-img">
                  <img
                    src="${product.img[0]}"
                  />
                </div>
                <div class="carts-item-1-content">
                  <p>${product.name}</p>
                  <p>${product.price}</p>
                </div>
              </div>
              <div class="carts-item-2">
                <input type="number" min="1" value="${product.quantity}" /><br />
                <br />
                <button onclick="handleRemove(${product.id})">REMOVE</button>
              </div>
              <div class="carts-item-3"><p>${product.price}</p></div>
            </div>`;
    total += `<span>${product.price * product.quantity}</span>`;
  });
  console.log("kiểm tra sản phẩm trong cart", productsCart);
  document.querySelector(".render-cartttt").innerHTML = productsCart;
  document.querySelector(".total-number").innerHTML = total;
}
renderCart();
