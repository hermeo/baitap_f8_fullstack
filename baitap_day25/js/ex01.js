import Categories from "./categories.js";

function bt1() {
  console.log("Bài 1");
  var users = [
    new Categories(1, "Chuyên mục 1", 0),
    new Categories(2, "Chuyên mục 2", 0),
    new Categories(3, "Chuyên mục 3", 0),
    new Categories(4, "Chuyên mục 2.1", 2),
    new Categories(5, "Chuyên mục 2.2", 2),
    new Categories(6, "Chuyên mục 2.3", 2),
    new Categories(7, "Chuyên mục 3.1", 3),
    new Categories(8, "Chuyên mục 3.2", 3),
    new Categories(9, "Chuyên mục 3.3", 3),
    new Categories(10, "Chuyên mục 2.2.1", 5),
    new Categories(11, "Chuyên mục 2.2.2", 5),
  ];
  var categories = [];
  var categories1 = [];
  var categories2 = [];
  var categories3 = [];
  console.log("Mảng 1 chiều ban đầu");
  console.log(users);
  var json = JSON.stringify(users);
  var usersCopy = JSON.parse(json);
  categories = usersCopy.reduce((prev, user) => {
    if (!user.name.includes(".")) {
      prev.push(user);
    }
    return prev;
  }, []);
  categories1 = usersCopy.reduce((prev, user) => {
    if (user.name.includes("1.")) {
      prev.push(user);
    }

    return prev;
  }, []);
  categories2 = usersCopy.reduce((prev, user) => {
    if (user.name.includes("2.")) {
      prev.push(user);
    }
    return prev;
  }, []);
  categories3 = usersCopy.reduce((prev, user) => {
    if (user.name.includes("3.")) {
      prev.push(user);
    }
    return prev;
  }, []);
  categories1.forEach((x) => {
    delete x.parent;
  });
  categories2.forEach((x) => {
    delete x.parent;
  });
  categories3.forEach((x) => {
    delete x.parent;
  });
  for (var key in categories) {
    if (categories[key].name.includes("1")) {
      if (categories1.length === 0) {
        delete categories[key].parent;
      } else {
        categories[key].parent = [categories1];
      }
    }
    if (categories[key].name.includes("2")) {
      if (categories2.length === 0) {
        delete categories[key].parent;
      } else {
        categories[key].parent = [categories2];
      }
    }
    if (categories[key].name.includes("3")) {
      if (categories3.length === 0) {
        delete categories[key].parent;
      } else {
        categories[key].parent = [categories3];
      }
    }
  }
  console.log("Chuyển đổi mảng 1 chiều thành dạng lồng");
  console.log(categories);
}
bt1();

function bt2() {
  console.log("Bài tập 2");
  Array.prototype.reduce2 = function (callback, init) {
    if (typeof callback === "function") {
      if (init === undefined) {
        init = this[0];
        for (var i = 1; i < this.length; i++) {
          init = callback(init, this[i], i, this);
        }
      } else {
        for (var i = 0; i < this.length; i++) {
          init = callback(init, this[i], i, this);
        }
      }

      return init;
    }
  };
  var numbers = [2, 2, 4];
  var result = numbers.reduce2((prev, x) => {
    return (prev += x);
  });
  console.log(result);
}
bt2();
