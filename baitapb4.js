////bai tập 1: sắp xếp theo thứ tự tăng dần
// đầu vào
document.getElementById("nhapSo").onclick = function () {
  var so1 = document.getElementById("so1").value * 1;
  var so2 = document.getElementById("so2").value * 1;
  var so3 = document.getElementById("so3").value * 1;

  var max = "";
  var min = "";
  var giua = "";

  if (so1 > so2 && so1 > so3) {
    max = so1;
  } else if (so2 > so3 && so2 > so1) {
    max = so2;
  } else if (so3 > so1 && so3 > so2) {
    max = so3;
  }

  if (so1 < so2 && so1 < so3) {
    min = so1;
  } else if (so2 < so1 && so2 < so3) {
    min = so2;
  } else if (so3 < so1 && so3 < so2) {
    min = so3;
  }
  if (so1 != max && so1 != min) {
    giua = so1;
  } else if (so2 != max && so2 != min) {
    giua = so2;
  } else if (so3 != max && so3 != min) {
    giua = so3;
  }

  console.log("max " + max);
  console.log("min " + min);
  console.log("giua " + giua);

  var result = "";
  result += "<p>Thừ thấp đến cao  là :" + min + "," + giua + "," + max + "</p>";
  // xuất ra
  document.getElementById("infoSo").innerHTML = result;
};

// bài 2
// viết lời chào
// đầu vào
document.getElementById("submitname").onclick = function () {
  var name = document.getElementById("name").value;
  var b = "Xin chào Bố";
  var m = "Xin chào Mẹ";
  var a = "Xin chào Anh";
  var e = "Xin chào Em";
  var result = "";

  if (name === "Bố") {
    result = b;
  } else if (name === "Mẹ") {
    result = m;
  } else if (name === "Anh") {
    result = a;
  } else if (name === "Em") {
    result = e;
  } else {
    result = "Vui lòng nhập lại";
  }

  document.getElementById("infoName").innerHTML = result;
};

// bài 3 : đếm số chẳn lẻ

// đầu vào
document.getElementById("submitnumberb3").onclick = function () {
  // xử lý

  var so1 = document.getElementById("number1").value * 1;
  var so2 = document.getElementById("number2").value * 1;
  var so3 = document.getElementById("number3").value * 1;
  var count = "";
  if (so1 % 2 === 0) {
    count++;
  }
  if (so2 % 2 === 0) {
    count++;
  }
  if (so3 % 2 === 0) {
    count++;
  }
  sole = 3 - count;
  var result = "";
  result += "<p>Số chẳn có :" + count + "</p>";
  result += "<br />";
  result += "<p>Số lẻ có : " + sole + "</p>";
  // xuất ra
  document.getElementById("infob3").innerHTML = result;
};

// Bài 4: đoán tam giác
// đầu vào
document.getElementById("submitCanh").onclick = function () {
  var canh1 = document.getElementById("canh1").value * 1;
  var canh2 = document.getElementById("canh2").value * 1;
  var canh3 = document.getElementById("canh3").value * 1;
  var result = "";
  if (canh1 === canh2 && canh1 === canh3) {
    result = "Tam Giác Đều";
  } else if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
    result = "Tam Giác Cân";
  } else if (
    canh1 * canh1 === canh2 * canh2 + canh3 * canh3 ||
    canh2 * canh2 === canh1 * canh1 + canh3 * canh3 ||
    canh3 * canh3 === canh2 * canh2 + canh1 * canh1
  ) {
    result = "Tam Giác Vuông";
  } else {
    result = "Chưa xác định";
  }

  //  xuất ra
  document.getElementById("infob4").innerHTML = result;
};
