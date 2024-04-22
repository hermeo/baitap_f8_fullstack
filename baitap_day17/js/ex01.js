function baitap1() {
  var a = Number(document.getElementById("input-a").value);
  var b = Number(document.getElementById("input-b").value);
  //validate - start
  if (a === "" || b === "") {
    alert("vui lòng nhập giá trị");
    return;
  }
  a = Number(a);
  b = Number(b);
  if (
    (typeof a === "number" && isFinite(a)) === false ||
    (typeof b === "number" && isFinite(b)) === false
  ) {
    alert("Dữ liệu nhập vào phải là số");

    return;
  }
  //validate - End
  document.getElementById("a").innerHTML = a;
  document.getElementById("b").innerHTML = b;

  a = a - b;
  b = a + b;
  a = b - a;
  document.getElementById("a-hv").innerHTML = a;
  document.getElementById("b-hv").innerHTML = b;
}
function baitap2() {
  var kq1 = 5 ** 10;
  var kq2 = kq1 / 2;
  var s = 10 + 20 + kq2;
  document.getElementById("kq-s").innerHTML = s;
}
function baitap3() {
  var a = document.getElementById("input-a-bt3").value;
  var b = document.getElementById("input-b-bt3").value;
  var c = document.getElementById("input-c-bt3").value;
  //validate - start
  if (a === "" || b === "" || c === "") {
    alert("vui lòng nhập giá trị");
    return;
  }
  a = Number(a);
  b = Number(b);
  c = Number(c);
  if (
    (typeof a === "number" && isFinite(a)) === false ||
    (typeof b === "number" && isFinite(b)) === false ||
    (typeof c === "number" && isFinite(c)) === false
  ) {
    alert("Dữ liệu nhập vào phải là số");
    document.getElementById("kq-bt3").innerHTML = "";
    return;
  }
  //validate - End

  var number = [a, b, c];
  max = number[0];
  for (var i = 0; i < number.length; i++) {
    if (max < number[i]) {
      max = number[i];
    }
  }
  document.getElementById("kq-bt3").innerHTML = max;
}

function baitap4() {
  var a = document.getElementById("input-a-bt4").value;
  var b = document.getElementById("input-b-bt4").value;

  if (a === "" || b === "") {
    alert("vui lòng nhập dữ liệu");
    document.getElementById("kq4").innerHTML = "";
    return;
  }
  a = Number(a);
  b = Number(b);
  if (
    (typeof a === "number" && isFinite(a)) === false ||
    (typeof b === "number" && isFinite(b)) === false
  ) {
    alert("Dữ liệu nhập vào phải là số");
    document.getElementById("kq4").innerHTML = "";
    return;
  }

  if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
    document.getElementById("kq4").innerHTML = "a và b cùng dấu";
  } else {
    document.getElementById("kq4").innerHTML = "a và b không cùng dấu";
  }
}
function baitap5() {
  var a = document.getElementById("input-a-bt5").value;
  var b = document.getElementById("input-b-bt5").value;
  var c = document.getElementById("input-c-bt5").value;
  if (a === "" || b === "" || c === "") {
    alert("vui lòng nhập giá trị");
  }
  a = Number(a);
  b = Number(b);
  c = Number(c);
  if (
    (typeof a === "number" && isFinite(a)) === false ||
    (typeof b === "number" && isFinite(b)) === false ||
    (typeof c === "number" && isFinite(c)) === false
  ) {
    alert("Dữ liệu nhập vào phải là số");
    document.getElementById("kq-bt5").innerHTML = "";
    return;
  }

  var number = [a, b, c];
  var temp;

  for (var i = 0; i < number.length - 1; i++) {
    for (var j = i + 1; j < number.length; j++) {
      if (number[i] > number[j]) {
        temp = number[i];
        number[i] = number[j];
        number[j] = temp;
      }
    }
  }

  // Lưu mảng đã sắp xếp vào kq

  document.getElementById("kq-bt5").innerHTML = number.slice();
}
