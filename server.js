import express from "express";
// console.log(express);

const app = express();
const port = 3000;
app.get("/", (req, res)=> {
    res.send("Hello World");
});
app.listen(8080, ()=> {
console.log("express server is started");
})
// ! 미들 웨어 설정
// json 형식의 요청 바디 파싱
// app.use(express.static("/"));
// 인코딩 된 요청 바디 파싱
// app.use(express.urlencoded({ extended : true }));