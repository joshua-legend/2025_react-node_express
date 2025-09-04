const { menus, staffs, positionType } = require("./data.js");
const { makeReponseGetOK, makeReponsePostOK, makeReponsePutOk, makeReponseError, makeReponseDeleteOk } = require("./format.js");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//menus [get,post, delete, put]
app.get("/menus", (req, res) => {
  res.json(makeReponseGetOK(menus));
});

app.post("/menus", (req, res) => {
  const { name, price, kcal } = req.body;

  if (!name) {
    return res.json(makeReponseError("name이 빈값 입니다."));
  }
  if (isNaN(price) || price < 0 || !price) {
    return res.json(makeReponseError("price의 데이터가 유효하지 않습니다."));
  }
  if (isNaN(kcal) || kcal < 0 || !kcal) {
    return res.json(makeReponseError("kcal의 데이터가 유효하지 않습니다."));
  }

  menus.push({ name, price: +price, kcal: +kcal });
  res.json(makeReponsePostOK(`${name} 메뉴가 등록되었습니다.`));
});

app.delete("/menus/:id", (req, res) => {
  const { id } = req.params; // id 가져오기
  const data = menus[+id - 1]; // id번째 메뉴 가져오고 data에 변수 넣기
  if (!data) {
    return res.json(makeReponseError(`${id}번째의 메뉴는 존재하지 않습니다.`));
  }
  menus.splice(+id - 1, 1);
  res.json(makeReponseDeleteOk(`${data.name}은 삭제되었습니다.`));
});

app.put("/menus/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, kcal } = req.body;
  const data = menus[+id - 1]; // id번째 메뉴 가져오고 data에 변수 넣기
  if (!data) {
    return res.json(makeReponseError(`${id}번째의 메뉴는 존재하지 않습니다.`));
  }
  if (!name) {
    return res.json(makeReponseError("name이 빈값 입니다."));
  }
  if (isNaN(price) || price < 0 || !price) {
    return res.json(makeReponseError("price의 데이터가 유효하지 않습니다."));
  }
  if (isNaN(kcal) || kcal < 0 || !kcal) {
    return res.json(makeReponseError("kcal의 데이터가 유효하지 않습니다."));
  }

  menus[+id - 1].name = name;
  menus[+id - 1].price = price;
  menus[+id - 1].kcal = kcal;
  res.json(makeReponsePutOk(`메뉴 ${name}이 수정되었습니다.`));
});

app.get("/staffs", (req, res) => {
  res.json(makeReponseGetOK(staffs));
});

app.post("/staffs", (req, res) => {
  const { name, age, position } = req.body;
  if (!name) {
    return res.json(makeReponseError("name이 빈값 입니다."));
  }
  if (isNaN(age) || age < 0 || !age) {
    return res.json(makeReponseError("age의 데이터가 유효하지 않습니다."));
  }
  if (!positionType.includes(position)) {
    return res.json(makeReponseError(`그런 ${position}은 없습니다.`));
  }
  staffs.push({ name, age: +age, position });
  res.json(makeReponsePostOK(`${name} 스태프가 등록되었습니다.`));
});

app.delete("/staffs/:id", (req, res) => {
  const { id } = req.params; // id 가져오기
  const data = staffs[+id - 1]; // id번째 메뉴 가져오고 data에 변수 넣기
  if (!data) {
    return res.json(makeReponseError(`${id}번째의 스태프는 존재하지 않습니다.`));
  }
  staffs.splice(+id - 1, 1);
  res.json(makeReponseDeleteOk(`${data.name}은 삭제되었습니다.`));
});

app.put("/staffs/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, position } = req.body;
  const data = staffs[+id - 1]; // id번째 메뉴 가져오고 data에 변수 넣기
  if (!data) {
    return res.json(makeReponseError(`${id}번째의 메뉴는 존재하지 않습니다.`));
  }
  if (!name) {
    return res.json(makeReponseError("name이 빈값 입니다."));
  }
  if (isNaN(age) || age < 0 || !age) {
    return res.json(makeReponseError("age의 데이터가 유효하지 않습니다."));
  }
  if (!positionType.includes(position)) {
    return res.json(makeReponseError(`그런 ${position}은 존재하지 않습니다.`));
  }

  staffs[+id - 1].name = name;
  staffs[+id - 1].age = age;
  staffs[+id - 1].position = position;
  res.json(makeReponsePutOk(`스태프 ${name}이 수정되었습니다.`));
});

app.listen(3000, () => {
  console.log("카페 서버 오픈!");
});
