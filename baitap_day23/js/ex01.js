bt1 = (number) => {
  console.log("Bài tập 1");

  let numbers = number;
  checkPrimeNumbers = (n) => {
    if (n < 2) {
      return false;
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  checkSymmetricalNumbers = (n) =>
    n.toString() === n.toString().split("").reverse().join("");

  while (true) {
    if (checkPrimeNumbers(numbers) && checkSymmetricalNumbers(numbers)) {
      return numbers;
    }
    numbers++;
  }
  //   return console.log(checkPrimeNumbers(numbers));
};
console.log(bt1(13));
bt2 = () => {
  console.log("Bài tập 2");
  let nums1 = [1, 2];
  let nums2 = [3, 5];

  for (var index in nums1) {
    if (nums2.includes(nums1[index])) {
      nums1.splice(index, 1);
    }
  }

  nums2.forEach((x) => {
    nums1.push(x);
  });

  nums1.sort((a, b) => a - b);

  console.log(nums1);

  var length = nums1.length;
  var mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    console.log(`Trung vị của mảng là: ${(nums1[mid - 1] + nums1[mid]) / 2}`);
  } else {
    console.log(`Trung vị của mảng là: ${nums1[mid]}`);
  }
};
bt2();
bt3 = () => {
  console.log("Bài tập 3");
  var nums = [7, 8, 9, 11, 12];
  var firstMissingPositive = function (nums) {
    let n = nums.length;

    let positiveNums = nums.filter((num) => num > 0);

    for (let i = 1; i <= n + 1; i++) {
      if (!positiveNums.includes(i)) {
        return i;
      }
    }

    return n + 2;
  };
  console.log("Số nguyên dương nhỏ nhất: " + firstMissingPositive(nums));
};
bt3();
