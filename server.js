import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
// console.log("file name 경로 입니다 : " + __filename);
const __dirname = dirname(__filename);
// console.log("dirname 경로 입니다 : " + __dirname);
// json()메서드로 요청의 body 파싱
app.use(express.json());
// 정적 파일 서빙????
app.use(express.static(__dirname));
// get 요청
app.get("/", (req, res)=> {
    // res.send("Hello Get World");
    res.sendFile((__dirname, "index.html"));
});
// test라는 요청 들어왔을 때 요청으로 들어온 데이터 응답
app.post("/test", (req, res)=> {
    const inputData = req.body;
    res.send(inputData);
})
// post 요청
app.post("/", (req, res)=> {
    res.send("Hello Post World");
});
app.listen(8080, ()=> {
console.log("express server is started");
})