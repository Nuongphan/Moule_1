const userLogin = JSON.parse(localStorage.getItem("userLogin"));
if (userLogin?.role !== "admin") {
  window.location = "../index.html";
}
const renderElement = document.getElementById("render-order");
function renderOrder() {
  let orderDataLocal = JSON.parse(localStorage.getItem("orders")) || [];
  let order = "";
  orderDataLocal.forEach((item, index) => {
    order += `<tr>
              <td>${index + 1}</td>
              <td>${item.idOrder}</td>
              <td>${item.idUser}</td>
              <td>${item.date}</td>
              <td>$ ${Number(item.total).toFixed(1)}</td>
              <td>${item.status ? "Processing" : "Completed"}</td>
              <td><button id="change" onclick="handleChangeStatus('${item.idOrder}')">Change</button></td>
            </tr>`;
  });
  renderElement.innerHTML = order;
}
renderOrder();
///////////////////////////////
function handleChangeStatus(id) {
  let orderDataLocal = JSON.parse(localStorage.getItem("orders")) || [];
  for (let i = 0; i < orderDataLocal.length; i++) {
    const order = orderDataLocal[i];
    console.log(order);
    if (order.idOrder == id) {
      order.status = !order.status;
      break;
    }
  }
   localStorage.setItem("orders", JSON.stringify(orderDataLocal));
  renderOrder();
}