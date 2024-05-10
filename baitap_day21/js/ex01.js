bt1 = () => {
  var numbers = [2, 1, 5, 3, 6, 4, 3, 0];
  var min = numbers[0];
  var index = 0;
  document.getElementById("array-bt1").innerHTML = numbers;
  var buttons = document.getElementById("bt1-button");
  getMinAndIndex = () => {
    for (var i = 0; i < numbers.length; i++) {
      if (min > numbers[i]) {
        min = numbers[i];
        index = i + 1;
      }
    }
    document.getElementById("bt1-min").innerHTML = min;
    document.getElementById("bt1-index").innerHTML = index;
  };
  buttons.addEventListener("click", getMinAndIndex);
};
bt1();
bt2 = () => {
  var numbers = [13, 20, 30, 3, 11];
  var array = document.getElementById("bt2-array");
  array.innerHTML = numbers;
  var sum = 0;
  var count = 0;
  checkPrimeNumbers = (number) => {
    let check = true;
    if (number < 2) {
      check = false;
      return;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        check = false;
        break;
      }
    }
    return check;
  };

  var getAverage = document.getElementById("bt2-button");
  averaged = () => {
    for (var i = 0; i < numbers.length; i++) {
      if (checkPrimeNumbers(numbers[i])) {
        sum += numbers[i];
        count++;
      }
    }
    if (count === 0) {
      return (document.getElementById("bt2-result").innerHTML =
        "Không có số nguyên tố");
    }
    return (document.getElementById("bt2-result").innerHTML = (
      sum / count
    ).toFixed(2));
  };
  getAverage.addEventListener("click", averaged);
};
bt2();
bt3 = () => {
  var numbers = [2, 2, 3, 4, 4, 5, 5];
  var numbersFilter = [];
  document.getElementById("bt3-array").innerHTML = numbers;
  var check = true;
  // var coincide = numbers[index];

  var string = "";
  // console.log(coincide);
  filter = () => {
    for (var i = 0; i < numbers.length; i++) {
      for (var j = 0; j < numbersFilter.length; j++) {
        check = true;
        if (numbers[i] === numbersFilter[j]) {
          check = false;
        }
      }
      if (check) {
        numbersFilter[numbersFilter.length] = numbers[i];
      }
    }
    document.getElementById("bt3-result").innerHTML = numbersFilter;
  };
  document.getElementById("bt3-filter").addEventListener("click", filter);
};
bt3();
bt4 = () => {
  var temp = 0;
  var numbers = [2, 1, 4, 5, 3, 5];
  var numbersSort = [];

  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        temp = numbers[j];
        numbers[j] = numbers[i];
        numbers[i] = temp;
      }
    }
  }
  for (var i = 0; i < numbers.length; i++) {
    numbersSort[numbersSort.length] = numbers[i];
  }

  console.log(numbersSort);
  document.getElementById("bt4-array").innerHTML = numbers;

  sort = () => {
    var input = document.getElementById("bt4-input").value;
    if (input.trim() === "") {
      alert("Chưa nhập dữ liệu");
      return;
    }
    input = Number(input);
    if (isFinite(input) === false) {
      alert("dữ liệu phải là số");
      return;
    }

    var temp2;
    numbersSort[numbersSort.length] = input;
    for (var i = 0; i < numbersSort.length - 1; i++) {
      for (var j = i + 1; j < numbersSort.length; j++) {
        if (numbersSort[i] > numbersSort[j]) {
          temp2 = numbersSort[j];
          numbersSort[j] = numbersSort[i];
          numbersSort[i] = temp2;
        }
      }
    }
    document.getElementById("bt4-result").innerHTML = numbersSort;
  };
  document.getElementById("bt4-button").addEventListener("click", sort);
};
bt4();
