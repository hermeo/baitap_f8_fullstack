bt1 = () => {
  console.log("Bài tập 1");
  function getSum(...rest) {
    var result = 0;
    var error = "";
    var count = 0;
    var number;
    for (var index in rest) {
      number = Number(rest[index]);
      if (!number.constructor.name === "Number" || isNaN(number) === true) {
        error = "dữ liệu phải là số";
        count = 0;
        break;
      } else {
        result += number;
        count = 1;
      }
    }
    if (count !== 0) {
      return result;
    } else {
      return error;
    }
  }
  console.log(getSum(1, 2, 3, 4, 1, 2, "10", 2, "12"));
};
bt1();
bt2 = () => {
  console.log("Bài tập 2");
  Object.prototype.getCurrency = function (currency) {
    if (currency.includes("đ")) {
      if (isNaN(this)) {
        return "Dữ liệu không phải là số";
      } else {
        return Number(this).toLocaleString("En") + ` ${currency}`;
      }
    } else {
      return new Intl.NumberFormat("en", {
        style: "currency",
        currency: currency,
      }).format(this);
    }
  };
  var price = 12000000;
  console.log(price.getCurrency("đ"));
  var price = "12000000";
  console.log(price.getCurrency("đ"));
};
bt2();
bt3 = () => {
  console.log("Bài tập 3");
  Array.prototype.push2 = function () {
    for (var index of arguments) {
      this[this.length] = index;
    }
    return this.length;
  };

  var a = [];
  a.push2(2, 3);
  a.push2(4, 5, 6);
  console.log(a);
};
bt3();
bt4 = () => {
  console.log("Bài tập 4");
  Array.prototype.filter2 = function (callback) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (typeof callback === "function") {
        if (callback(this[i], i)) {
          arr.push(this[i]);
        }
      }
    }
    return arr;
  };
  var a = [1, 2, 3, 4];
  console.log(a.filter2((x) => x < 4));
};
bt4();
bt5 = () => {
  var categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      children: [
        {
          id: 4,
          name: "Chuyên mục 2.1",
        },
        {
          id: 5,
          name: "Chuyên mục 2.2",
          children: [
            {
              id: 10,
              name: "Chuyên mục 2.2.1",
            },
            {
              id: 11,
              name: "Chuyên mục 2.2.2",
            },
            {
              id: 12,
              name: "Chuyên mục 2.2.3",
            },
          ],
        },
        {
          id: 6,
          name: "Chuyên mục 2.3",
        },
      ],
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      children: [
        {
          id: 7,
          name: "Chuyên mục 3.1",
        },
        {
          id: 8,
          name: "Chuyên mục 3.2",
        },
        {
          id: 9,
          name: "Chuyên mục 3.3",
        },
      ],
    },
  ];
  var select = document.getElementById("select-option");
  var option;
  var optionText;
  var regex = /\./g;
  var level = "--|";
  function check(str) {
    var matches = str.match(regex);
    if (!matches) {
      return 0;
    }
    return matches.length;
  }

  function selectOption(arr) {
    arr.forEach((value) => {
      var step = check(value.name);
      var prefix;
      if (step > 0) {
        prefix = level.repeat(step);
      } else {
        prefix = "";
      }
      option = document.createElement("option");
      optionText = document.createTextNode(`${prefix} ${value.name}`);
      option.appendChild(optionText);
      select.appendChild(option);
      if (value.children) {
        selectOption(value.children);
      }
    });
  }

  selectOption(categories);
};
bt5();
