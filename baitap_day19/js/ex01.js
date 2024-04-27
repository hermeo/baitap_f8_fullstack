baitap1 = () => {
  var n = document.getElementById("bt1-input").value.trim();
  // validate
  if (n === "") {
    alert("Chưa nhập dữ liệu");
    document.getElementById("bt1-result").innerHTML = "";
    return;
  }
  if (isFinite(n) === false) {
    alert("Dữ liệu nhập vào phải là số");
    document.getElementById("bt1-result").innerHTML = "";
    return;
  }
  var show = [];
  fibonaci = (n) => {
    if (n <= 1) {
      return n;
    }
    var x = fibonaci(n - 1) + fibonaci(n - 2);
    return x;
  };
  n = Number(n);
  function showFibonaci(n) {
    if (n === 1) {
      show.push(0);
    } else if (n === 2) {
      show.push(0, 1);
    } else {
      showFibonaci(n - 1);
      show.push(fibonaci(n));
    }
  }
  showFibonaci(n);
  document.getElementById("bt1-result").innerHTML = `f(${n}) = ${show}`;
};
baitap2 = () => {
  number = document.getElementById("bt2-input").value.trim();

  // validate
  if (number === "") {
    alert("Chưa nhập dữ liệu");
    document.getElementById("bt2-result").innerHTML = "";
    return;
  }
  if (isFinite(number) === false) {
    alert("Dữ liệu nhập vào phải là số");
    document.getElementById("bt2-result").innerHTML = "";
    return;
  }
  var reverse = (number) => {
    return Number(number.split("").reverse().join(""));
  };
  document.getElementById("bt2-result").innerHTML = `${number} --> ${reverse(
    number
  )}`;
};
baitap3 = () => {
  var number = document.getElementById("bt3-input").value.trim();
  if (number === "") {
    alert("Không được để trống");
    document.getElementById("bt3-result").innerHTML = "";
    return;
  }

  if (isFinite(number) === false) {
    alert("Dữ liệu phải là số");
    document.getElementById("bt3-result").innerHTML = "";
    return;
  }
  var chain = number.toString().split("");
  if (chain.length > 4) {
    alert("Vui lòng chỉ nhập số từ 0 -> 9999");
    document.getElementById("bt3-result").innerHTML = "";
    return;
  }
  var convert = (a) => {
    var chuyen = "";
    switch (a) {
      case "0":
        chuyen = "không";
        break;
      case "1":
        chuyen = "một";
        break;
      case "2":
        chuyen = "hai";
        break;
      case "3":
        chuyen = "ba";
        break;
      case "4":
        chuyen = "bốn";
        break;
      case "5":
        chuyen = "năm";
        break;
      case "6":
        chuyen = "sáu";
        break;
      case "7":
        chuyen = "bảy";
        break;
      case "8":
        chuyen = "tám";
        break;
      case "9":
        chuyen = "chín";
        break;
      case "10":
        chuyen = "mười";
        break;
    }
    return chuyen;
  };

  if (chain.length === 1) {
    chain[0] = convert(chain[0]);
    document.getElementById("bt3-result").innerHTML = chain.join("");
  }
  if (chain.length === 2) {
    if (chain[0] === "1" && chain[1] === "0") {
      chain[0] = convert("10");
      chain[1] = convert("");
      document.getElementById("bt3-result").innerHTML = chain.join("");
      return;
    }
    if (chain[0] === "1") {
      chain[0] = convert("10") + " ";
      chain[1] = convert(chain[1]);
      document.getElementById("bt3-result").innerHTML = chain.join("");
      return;
    }
    chain[0] = convert(chain[0]) + " mươi ";
    if (chain[1] === "0") {
      chain[1] = "";
    }
    chain[1] = convert(chain[1]);
    document.getElementById("bt3-result").innerHTML = chain.join("");
  }
  if (chain.length === 3) {
    if (chain[1] === "0" && chain[2] === "0") {
      chain[0] = convert(chain[0]) + " ";
      chain[1] = "trăm";
      chain[2] = "";
      document.getElementById("bt3-result").innerHTML = chain.join("");
      return;
    }
    if (chain[1] === "0") {
      chain[0] = convert(chain[0]) + " trăm ";
      chain[1] = "linh ";
      chain[2] = convert(chain[2]);
      document.getElementById("bt3-result").innerHTML = chain.join("");
      return;
    }
    if (chain[2] === "0") {
      chain[0] = convert(chain[0]) + " trăm ";
      chain[1] = convert(chain[1]);
      +" ";
      chain[2] = " mươi ";
      document.getElementById("bt3-result").innerHTML = chain.join("");
      return;
    }
    // if(chain[1] === "0")
    chain[0] = convert(chain[0]) + " trăm ";
    chain[1] = convert(chain[1]) + " mươi ";
    chain[2] = convert(chain[2]);
    document.getElementById("bt3-result").innerHTML = chain.join("");
  }
  if (chain.length === 4) {
    if (chain[2] === "0" && chain[3] === "0") {
      chain[0] = convert(chain[0]) + " nghìn ";
      chain[1] = convert(chain[1]) + " trăm ";
      chain[2] = "";
      chain[3] = "";
      document.getElementById("bt3-result").innerHTML = chain.join("");
      return;
    }
    if (chain[2] === "0") {
      chain[0] = convert(chain[0]) + " nghìn ";
      chain[1] = convert(chain[1]) + " trăm ";
      chain[2] = "linh ";
      chain[3] = convert(chain[3]);
      document.getElementById("bt3-result").innerHTML = chain.join("");
      return;
    }
    if (chain[3] === "0") {
      chain[0] = convert(chain[0]) + " nghìn ";
      chain[1] = convert(chain[1]) + " trăm ";
      chain[2] = convert(chain[2]) + " mươi ";
      chain[3] = "";
      document.getElementById("bt3-result").innerHTML = chain.join("");
      return;
    }
    chain[0] = convert(chain[0]) + " nghìn ";
    chain[1] = convert(chain[1]) + " trăm ";
    chain[2] = convert(chain[2]) + " mươi ";
    chain[3] = convert(chain[3]);
    document.getElementById("bt3-result").innerHTML = chain.join("");
  }
  // console.log(chain.length);
};
