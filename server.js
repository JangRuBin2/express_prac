import express from "express";
// import  path  from "path";
// console.log(path)
// console.log(express);
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = 3000;
// app.use(express.static(__dirname, "public"))
const __filename = fileURLToPath(import.meta.url);
console.log("file name 경로 입니다 : " + __filename);
const __dirname = dirname(__filename);
console.log("dirname 경로 입니다 : " + __dirname);
// json()메서드로 요청의 body 파싱
app.use(express.json());
// 정적 파일 서빙????
// const publicPath = join(__dirname, "public");
app.use(express.static(__dirname));
// get 요청
app.get("/", (req, res)=> {
    // res.send("Hello Get World");
    res.sendFile((publicPath, "index.html"));
});
// test라는 요청 들어왔을 때 요청으로 들어온 데이터 응답
app.post("/test", (req, res)=> {
    // ! req.params는 요청 파라미터를 가져오는 것에 사용
    // res.send(req.params);
    const inputData = req.body;
    res.send(inputData);
})
// post 요청
app.post("/", (req, res)=> {
    res.send("Hello Post World");
});
// 모든 http 요청을 처리 가능한 all()과, 
// app.all("/test", (req, res)=> {
//     console.log("모든 요청의 처리가 가능합니다.");
//     // 다음 핸들러로 제어권을 넘길 때 사용하는 next()메서드
//     next();
// })
app.listen(8080, ()=> {
console.log("express server is started");
})
// ! 미들 웨어 설정
// json 형식의 요청 바디 파싱
// app.use(express.static("/"));
// 인코딩 된 요청 바디 파싱
// app.use(express.urlencoded({ extended : true }));