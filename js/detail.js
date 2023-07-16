//Lấy được id từ local
let productsLocal = JSON.parse(localStorage.getItem("products"));
let productDetaill = JSON.parse(localStorage.getItem("productDetail"));
let productFinded = productsLocal.find((item) => item.id === productDetaill.id);
let carts = JSON.parse(localStorage.getItem("cart")) || [];
//// //////////////////////////////////////////////////////////////////
// Thêm vào giỏ hàng

/////////////////////////////////////////////////////////////////////
// render detail sản phẩm
function renderProductDetail() {
  const smallImgProduct = document.getElementById("list-product");
  const largeImgProduct = document.querySelector("#big-img");
  const renderDetails = document.querySelector(".product-item-title");
  let bigImg = "";
  let smallImg = "";
  let productDetail = "";
  let img = productFinded.img;
  img.forEach((element, index) => {
    smallImg += ` <a
                class="list-group-item list-group-item-action"
                href="#product-${index}"
                ><img class="product-image "
                   src=${element}
               /></a>`;
    bigImg += `<h4 id="product-${index}">
                <img class="product-image"
                  src=${element}
                 />
               </h4>`;
  });
  productDetail += ` <p id="product-name">${productFinded.name}</p>
            <p id="product-price">${productFinded.price}</p>
            <hr />
            <p>Buy 3+ Minimalist Candles, Get 15% off plus Free Shipping*</p>
            <input type="number" min="1" value="1" />
            <br />
            <button onclick="handleAddToCart(${productFinded.id})">ADD TO CART</button>`;
  smallImgProduct.innerHTML = smallImg;
  largeImgProduct.innerHTML = bigImg;
  renderDetails.innerHTML = productDetail;
}
renderProductDetail();
/////////////////////////////////////////////////////////////////////////////
// Thêm sản phẩm vào giỏ hàng 
function handleAddToCart(productId) {
  let productToCart = productsLocal.find((item) => item.id == productId);
  let newProduct = productsLocal.map((item) => {
    if (item.id == productId && item.quantity > 0) {
      return { ...item, quantity: --item.quantity };
    } else if (item.id == productId && item.quantity === 0) {
      alert("Hết hàng");
      return { item, quantity };
    } else {
      return item;
    }
  });
  let checkIndex = carts.findIndex((item) => item.id == productToCart.id);
  console.log(checkIndex);
  if (checkIndex >= 0) {
    carts = carts.map((item) => {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    });
  } else {
    carts.push({ ...productToCart, quantity: 1 });
  }

  localStorage.setItem("products", JSON.stringify(newProduct));
  localStorage.setItem("cart", JSON.stringify(carts));
}
/////////////////////////////////////////////////
// render Cart

// function handleAddToCart(productId) {
//   let productToCart = productsLocal.find((item) => item.id == productId);
//   let newProduct = productsLocal.map((item) => {
//     if (item.id == productId && item.quantity >= 1) {
//       return { ...item, quantity: item.quantity-- };
//     } else if (item.id == productId && item.quantity == 0) {
//       alert("Hết hàng");
//       return item;
//     } else {
//       return item;
//     }
//   });
//   let checkIndex = carts.findIndex((item) => item.id == productToCart.id);
//   console.log(checkIndex);
//   if (checkIndex >= 0) {
//     carts = carts.map((item) => {
//       if (item.id == productToCart.id) {
//         return {
//           ...item,
//           quantity: item.quantity + 1,
//         };
//       } else {
//         return item;
//       }
//     });
//   } else {
//     carts.push({ ...productToCart, quantity: 1 });
//     renderCart();
//   }

//   localStorage.setItem("products", JSON.stringify(newProduct));
//   localStorage.setItem("cart", JSON.stringify(carts));
// }
