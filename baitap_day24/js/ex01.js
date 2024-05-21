bt1 = () => {
  console.log("Bài tập 1");
  var errors = {
    name: {
      required: "Vui lòng nhập họ tên",
      min: "Họ tên phải từ 5 kí tự",
    },
    email: {
      email: "Định dạng email không hợp lệ",
      unique: "Email đã có người sử dụng",
      required: "Vui lòng nhập địa chỉ email",
    },
    password: {
      required: "Vui lòng nhập mật khẩu",
      same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
  };
  //   console.log(errors.name.required);
  getError = (field) => {
    var previous = field.slice(0, field.indexOf("."));
    var latter = field.slice(field.indexOf(".") + 1);
    var result = "";
    field.includes(".") == false
      ? Object.keys(errors).includes(field)
        ? (result = errors[field].required)
        : ""
      : Object.keys(errors).includes(previous)
      ? (result = errors[previous][latter])
      : "";

    return result;
  };
  console.log(getError("email"));
};
bt1();
bt2 = () => {
  console.log("Bài tập 2");

  var customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  ];
  console.log("Mảng ban đầu");
  console.log(customers);

  const result = (createCustomer = (customers) => {
    console.log("Result");
    var json = JSON.stringify(customers);
    var newCustomer = JSON.parse(json);
    //sắp xếp theo tuổi
    newCustomer.sort((a, b) => {
      if (b.age > a.age) {
        return -1;
      }
    });
    for (var index in newCustomer) {
      newCustomer[index]["shortName"] = `${
        newCustomer[index].name.split(" ")[0]
      } ${
        newCustomer[index].name.split(" ")[
          newCustomer[index].name.split(" ").length - 1
        ]
      }`;
    }
    return newCustomer;
  });

  console.log(result(customers));
};
bt2();
bt3 = () => {
  console.log("Bài tập 3");
  const data = [];
  //đăng ký
  function handleRegister(name, password, email) {
    if (name.trim() === "" || password.trim() === "" || email.trim() === "") {
      return console.log("Chưa nhập đủ thông tin");
    } else {
      data.push({
        name: name,
        password: password,
        email: email,
        role: "user",
      });
      console.log("Đăng ký thành công");
      return data;
    }
  }
  handleLogin = (name, password) => {
    var bienDem = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i].name.includes(name) && data[i].password.includes(password)) {
        bienDem = 1;
        console.log("Đăng nhập thành công");
        return data[i];
      }
    }
    if (bienDem == 0) {
      return "Thông tin đăng nhập không hợp lệ";
    }
  };

  handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
  handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");

  console.log(data);
  console.log(handleLogin("Nguyen Van A", "123456"));
};
bt3();
