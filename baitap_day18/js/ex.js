function baitap1() {
  var soKm = document.getElementById("bt1-input").value;
  //validate
  if (soKm === "") {
    alert("Không được để trống");
    document.getElementById("bt1-result").innerHTML = "";
    return;
  }
  // kiểm tra có phải là số không
  sokm = Number(soKm);
  if (isFinite(soKm) == false) {
    alert("Số km phải là số");
    document.getElementById("bt1-result").innerHTML = "";
    return;
  }
  var tongtien = 0;
  if (soKm <= 1) {
    tongtien = soKm * 15000;
  } else if (soKm <= 5) {
    tongtien = 1 * 15000 + (soKm - 1) * 13500;
  } else {
    tongtien = 1 * 15000 + 5 * 13500 + (soKm - 6) * 11000;
  }
  document.getElementById("bt1-result").innerHTML =
    soKm > 120 ? tongtien - tongtien * 0.1 : tongtien + " vnđ";
}
function baitap2() {
  var soDien = document.getElementById("bt2-input").value;
  var tontien = 0;
  // validate
  if (soDien === "") {
    alert("Không được để trống");
    document.getElementById("bt2-result").innerHTML = "";
  }
  soDien = Number(soDien);
  // kiểm tra có phải là số
  if (isFinite(soDien) == false) {
    alert("Số điện phải là số");
    document.getElementById("bt2-result").innerHTML = "";
  }
  if (soDien >= 1 && soDien <= 50) {
    tongtien = soDien * 1678;
  } else if (soDien <= 100) {
    tongtien = 50 * 1678 + (soDien - 50) * 1734;
  } else if (soDien <= 200) {
    tongtien = 50 * 1678 + 50 * 1734 + (soDien - 50 - 50) * 2014;
  } else if (soDien <= 300) {
    tongtien = 50 * 1678 + 50 * 1734 + 100 * 2014 + (soDien - 200) * 2536;
  } else if (soDien <= 400) {
    tongtien =
      50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (soDien - 300) * 2834;
  } else {
    tongtien =
      50 * 1678 +
      50 * 1734 +
      100 * 2014 +
      100 * 2536 +
      100 * 2834 +
      (soDien - 400) * 2927;
  }
  document.getElementById("bt2-result").innerHTML = `${tongtien} vnđ`;
}
function baitap3() {
  var n = document.getElementById("bt3-input").value;
  // validate
  if (n === "") {
    alert("Không được để trống");
    document.getElementById("bt3-result").innerHTML = "";
  }
  n = Number(n);
  // kiểm tra có phải là số
  if (isFinite(n) == false) {
    alert("n phải là số");
    document.getElementById("bt3-result").innerHTML = "";
  }
  var temp = 0;
  var s = 0;
  for (var i = 1; i <= n; i++) {
    for (var j = i + 1; j <= i + 1; j++) {
      temp = i * j;
      s += temp;
    }
  }
  document.getElementById("bt3-result").innerHTML = s;
}
function baitap4() {
  var n = document.getElementById("bt4-input").value;
  // validate
  if (n === "") {
    alert("Không được để trống");
    document.getElementById("bt4-result").innerHTML = "";
  }
  n = Number(n);
  // kiểm tra có phải là số
  if (isFinite(n) == false) {
    alert("Phải phải là số");
    document.getElementById("bt4-result").innerHTML = "";
  }
  let kq;
  if (n <= 1) {
    kq = false;
  } else if (n === 3) {
    kq = true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    kq = false;
  } else {
    kq = true;
  }

  if (kq) {
    document.getElementById("bt4-result").innerHTML = `${n}  là số nguyên tố`;
  } else {
    document.getElementById(
      "bt4-result"
    ).innerHTML = `${n} không  là số nguyên tố`;
  }
}
function baitap5() {
  var n = document.getElementById("bt5-input").value;
  // validate
  if (n === "") {
    alert("Không được để trống");
    document.getElementById("bt5-result").innerHTML = "";
  }
  n = Number(n);
  // kiểm tra có phải là số
  var v;
  if (isFinite(n) == false) {
    alert("Phải phải là số");
    document.getElementById("bt5-result").innerHTML = "";
  }
  var number = 1;
  const parent = document.getElementById("bt5-result");

  for (var i = 1; i <= n; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line += number + " ";
      number++;
    }

    const p = document.createElement("p");

    const t = document.createTextNode(line);

    p.appendChild(t);

    parent.appendChild(p);
  }
}
function baitap6() {
  var flag = document.querySelector(".flag");

  for (var i = 0; i < 64; i++) {
    var square = document.createElement("div");
    square.classList.add("checkerboard");

    if ((i + Math.floor(i / 8)) % 2 === 0) {
      square.classList.add("white");
    } else {
      square.classList.add("black");
    }

    flag.appendChild(square);
  }
}
function baitap7() {
  var parent = document.getElementById("bt7-result");
  for (var i = 1; i <= 10; i++) {
    var tieude = document.createElement("label");
    var content = document.createTextNode(`bảng cửu chương ${i}`);
    tieude.appendChild(content);
    parent.appendChild(tieude);
    for (var j = 1; j <= 10; j++) {
      var bangcuuchuong = document.createElement("p");
      var cuuchuong = document.createTextNode(`${i} * ${j} = ${i * j}`);
      bangcuuchuong.appendChild(cuuchuong);
      bangcuuchuong.appendChild(cuuchuong);
      parent.appendChild(bangcuuchuong);
    }
  }
}
