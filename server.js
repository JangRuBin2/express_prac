import express from "express";
// console.log(express);

const app = express();
const port = 3000;

// ! 미들 웨어 설정
// json 형식의 요청 바디 파싱
app.use(express.json());
// 인코딩 된 요청 바디 파싱
app.use(express.urlencoded({ extended : true }));