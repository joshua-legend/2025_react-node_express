const menu = require("./data.js");
const coffeeMenu = require("./data1.js");
const express = require("express");
const app = express();
app.use(express.json()); // JSON 형식 읽는 로직 추가!
app.use(express.urlencoded({ extended: true })); // HTML form 방식 읽기 허락

app.get("/", (req, res) => {
  // send html 돌려주기
  res.send("오늘 날씨 맑다");
});

app.get("/icecream/:id", (req, res) => {
  const { id } = req.params;
  res.json(menu[+id - 1] || { error: "그런 아이스크림 없습니다!" });
});

// http://localhost:3000/coffee/2?size=l&syrup=50
// 데이터 유효성 검사: 올바르게 데이터줬는지?
// size 있는지? size의 m,l 있는지?
// syrup 있는지? syrup이 0~3 인지?

app.get("/coffee/:id", (req, res) => {
  const { id } = req.params;
  const { size, syrup } = req.query;
  if (!["m", "l"].includes(size)) {
    return res.json({ error: "잘못된 size 입니다." });
  }
  if (0 > syrup || 3 < syrup || isNaN(syrup)) {
    return res.json({ error: "syrup은 0 ~ 3 까지 가능합니다." });
  }
  const coffeeObj = coffeeMenu[+id - 1];
  if (!coffeeObj) {
    return res.json({ error: "없는 커피 리스트입니다" });
  }
  const addPrice = size == "l" ? 1000 : 0;
  coffeeObj.price = +coffeeObj.price + addPrice;
  coffeeObj.kcal = +coffeeObj.kcal + 50 * +syrup;
  res.json(coffeeObj);
});

//데이터 생성
app.post("/coffee", (req, res) => {
  const { name, price, kcal } = req.body;
  if (!name || !price || !kcal) {
    return res.json({ error: "name/price/kcal 데이터가 올바르지 않습니다" });
  }
  coffeeMenu.push({ name, price, kcal });
  res.json({ message: "성공" });
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
