// CÚ PHÁP KHAI BÁO: FUNCTION + FUNCTION NAME + () + {// khối lệnh}
// Function chỉ chạy khi function được gọi
function bai_3() {
  const math = Number(prompt("Nhap vao diem toan: "));
  const phys = Number(prompt("Nhap vao diem ly: "));
  const che = Number(prompt("Nhap vao diem hoa: "));
  const average = ((math + phys + che) / 3).toFixed(0);
  const resultElement = document.querySelector("#result_3");
  resultElement.innerHTML = "diem trung binh cua 3 mon la:" + average;
}
function bai_4() {
  const do_c = Number(prompt("nhap gia tri cua do C: "));
  const do_f = do_c * 1.8 + 32;
  const resultElement = document.querySelector("#result_4");
  resultElement.innerHTML = "Do F bang: " + do_f;
}

function bai_5() {
  const R = Number(prompt("nhap ban kinh duong tron"));
  const C = 3.14 * R * 2;
  const S = 3.14 * R * R;
  const resultElement = document.querySelector("#result_5");
  resultElement.innerHTML =
    "Chu vi cua hinh tron la: " + C + "Dien tich cua hinh tron la:" + S;
}

function bai_8() {
  let a = Number(6);
  let result = ++a + a + a++ + ++a + a;
  const resultElement = document.querySelector("#result_8");
  resultElement.innerHTML = "Tong cua a la: " + result;
}

function bai_9() {
  const year = Number(prompt("Nhập vao nam bat ky: "));
  let r_sodu = year % 4;
  if (r_sodu == 0) {
    if (year % 100 != 0) {
    } else if (year % 100 == 0 && year % 400 == 0) {
    } else if (year % 100 == 0 && year % 400 != 0) {
    }
  } else {
    const resultElement = document.querySelector("#result_9");
    resultElement.innerHTML = "Day khong phai la nam nhuan";
  }
}

function bai_10() {
  const electric_number = Number(prompt("Nhap vao so dien cua thang: "));
  console.log(isNaN(electric_number));
  const bac1 = 1728,
    bac2 = 1786,
    bac3 = 2074,
    bac4 = 2612,
    bac5 = 2919,
    bac6 = 3015;
  let electric_money;
  if (isNaN(electric_number)) {
    return;
  }
  if (electric_number < 0) {
    alert("Khong nhan so am");
    return;
  }
  if (electric_number <= 50) {
    electric_money = electric_number * bac1;
  } else if (electric_number <= 100) {
    electric_money = 50 * bac1 + (electric_number - 50) * bac2;
  } else if (electric_number <= 200) {
    electric_money = 50 * bac1 + 50 * bac2 + (electric_number - 100) * bac3;
  } else if (electric_number <= 300) {
    electric_money =
      50 * bac1 + 50 * bac2 + 100 * bac3 + (electric_number - 200) * bac4;
  } else if (electric_number <= 400) {
    electric_money =
      50 * bac1 +
      50 * bac2 +
      100 * bac3 +
      100 * bac4 +
      (electric_number - 300) * bac5;
  } else {
    electric_money =
      50 * bac1 +
      50 * bac2 +
      100 * bac3 +
      100 * bac4 +
      100 * bac5 +
      (electric_number - 400) * bac6;
    const resultElement = document.querySelector("#result_10");
    resultElement.innerHTML =
      "Gia tien dien la: " + electric_money.toLocaleString("de-de") + "VND";
  }
}
function bai_11() {
  const resultElement = document.querySelector("#result_11");
  //setInterval(khoi lenh thuc thi, thoi gian)
  setInterval(function () {
    resultElement.innerHTML = new Date();
  }, 1000);
  setTimeout(function () {
    console.log("helloo world");
  }, 5000);
}
function bai_12() {
  const minus = Number(prompt("Nhap vao so phut can dem nguoc"));
  const resultElement = document.querySelector("#result_12");
  const millisecond = minus * 60 * 1000;
  setTimeout(renderCountDown, millisecond);
  function renderCountDown() {
    resultElement.innerHTML = "<h1>Het gio</h1>";
  }
}
function bai_13() {
  const minus = Number(prompt("Nhap vao so phut can dem nguoc"));
  const resultElement = document.querySelector("#result_13");
  let totalSecond = minus * 60;
  setInterval(renderCountDown, 1000); 
    function renderCountDown() {
      totalSecond--;
      const minusRender = parseInt(totalSecond / 60);
      const secondRender = totalSecond % 60;
      resultElement.innerHTML = minusRender + ':' + secondRender;
 
  }
}
function bai_14() {
  const minus = Number(prompt("Nhap vao so phut can dem nguoc"));
  const resultElement = document.querySelector("#result_14");
  let totalSecond=minus*60;
  setInterval(renderCountDown, 100); 
  function renderCountDown() {
    totalSecond--;
    const hourRender = parseInt(totalSecond/ 3600);
    const minus = (totalSecond / 3600 - hourRender) * 60;
    const minusRender = parseInt(minus);
    const secondRender = parseInt((minus-minusRender)*60)
    resultElement.innerHTML = hourRender + ':' + minusRender + ':' + secondRender;
  }

}

