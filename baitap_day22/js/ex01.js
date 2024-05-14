bt1 = () => {
  var arrA = [1, 4, 3, 2];
  var arrB = [5, 2, 6, 7, 1];
  var result = [];
  var array1 = document.getElementById("bt1-array1");
  array1.innerHTML = arrA;
  var array2 = document.getElementById("bt1-array2");
  array2.innerHTML = arrB;

  document.getElementById("bt1-button").addEventListener("click", () => {
    arrA.forEach((value) => {
      if (arrB.includes(value)) {
        result.push(value);
      }
    });

    document.getElementById("bt1-result").innerHTML = result;
  });
};
bt1();
bt2 = () => {
  var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  var arrResult = [];
  console.log("Bài tập 2");
  console.log("Ban đầu");
  console.log(arr);
  for (var index in arr) {
    if (arr[index].length > 1) {
      if (arr[index].length > 1) {
        for (var index1 in arr[index]) {
          if (arr[index][index1].length > 1) {
            for (var index2 in arr[index][index1]) {
              if (arr[index][index1][index2].length > 1) {
                for (var index3 in arr[index][index1][index2]) {
                  arrResult.push(arr[index][index1][index2][index3]);
                }
              } else {
                arrResult.push(arr[index][index1][index2]);
              }
            }
          } else {
            arrResult.push(arr[index][index1]);
          }
        }
      } else {
        arrResult.push(arr[index]);
      }
    } else {
      arrResult.push(arr[index]);
    }
  }
  console.log("Kết quả");
  console.log(arrResult);
};
bt2();
bt3 = () => {
  var arr = [
    ["a", 1, true],
    ["b", 2, false],
  ];
  console.log("Bài tập 3");
  console.log("Ban đầu");
  console.log(arr);
  var arrString = [];
  var arrBoolean = [];
  var arrNumber = [];
  var arrResult = [];

  for (var index in arr) {
    if (arr[index].length > 1) {
      for (var index1 in arr[index]) {
        if (typeof arr[index][index1] === "string") {
          arrString.push(arr[index][index1]);
        }
        if (typeof arr[index][index1] === "number") {
          arrNumber.push(arr[index][index1]);
        }
        if (typeof arr[index][index1] === "boolean") {
          arrBoolean.push(arr[index][index1]);
        }
      }
    } else {
      if (typeof arr[index] === "string") {
        arrString.push(arr[index]);
      }
      if (typeof arr[index] === "number") {
        arrNumber.push(arr[index]);
      }
      if (typeof arr[index] === "boolean") {
        arrBoolean.push(arr[index]);
      }
    }
  }
  arrResult.push(arrString, arrNumber, arrBoolean);
  console.log("Kết quả");
  console.log(arrResult);
};
bt3();

bt4 = () => {
  var para1 = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
  veritatis consequuntur sint laboriosam laborum omnis ipsa ab
  deserunt cum dicta, facilis odit perferendis blanditiis maxime
  recusandae atque suscipit labore harum!`;
  var para2 = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
  molestias repellat aspernatur quia, ullam asperiores veniam
  explicabo maxime quod inventore quis quidem repellendus deleniti
  pariatur animi culpa harum recusandae. Distinctio!`;
  var para3 = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
  dolore, minima nisi corrupti asperiores ea tenetur non cum eveniet
  dolor soluta illo corporis repudiandae inventore sed facere, a minus
  debitis?`;
  var arrContent = [
    {
      title: "Tiêu đề bài viết 1",
      image: "./image/492-200x150.jpg",
      para: para1,
    },
    {
      title: "Tiêu đề bài viết 2",
      image: "./image/492-200x150.jpg",
      para: para2,
    },
    {
      title: "Tiêu đề bài viết 3",
      image: "./image/492-200x150.jpg",
      para: para3,
    },
  ];
  arrContent.forEach((value, index) => {
    document.getElementById(`item${index + 1}-img-src`).src = value.image;
    document.getElementById(`item${index + 1}-title`).innerHTML = value.title;
    document.getElementById(`item${index + 1}-para`).innerHTML = value.para;
  });
  var style = document.createElement("style");
  style.textContent = `
  .item1 {
    width: 800px;
  }
  .item2 {
    width: 800px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 20px 0;
  }
  .item3 {
    width: 800px;
  }
  .item1-content {
    padding: 10px;
  }
  .item1-img {
    float: left;
    padding-right: 20px;
  }
  .item2-img {
    float: right;
    padding-right: 20px;
  }
  .item3-img {
    float: left;
    padding-right: 20px;
  }
  `;
  document.head.appendChild(style);
};
bt4();
