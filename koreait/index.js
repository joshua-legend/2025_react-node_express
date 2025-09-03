const { students, courses } = require("./data.js");
const { makeResponsePostOK, makeResponseGetOK, makeResponseError } = require("./format.js");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/course", (req, res) => {
  res.json(makeResponseGetOK(courses));
});
app.get("/students", (req, res) => {
  res.json(makeResponseGetOK(students));
});
app.post("/students", (req, res) => {
  const { name, age, course } = req.body;
  if (!name) {
    return res.json(makeResponseError(`name이 빈 문자 입니다.`));
  }
  if (isNaN(age) || age < 0) {
    return res.json(makeResponseError(`age가 유효하지 않습니다.`));
  }
  if (!courses.includes(course)) {
    return res.json(makeResponseError(`${course} 수업은 없습니다!`));
  }
  students.push({ name, age, courses: [course] });
  res.json(makeResponsePostOK(`정상적으로 ${name}학생 등록되었습니다.`));
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
