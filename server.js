import express from "express";
// console.log(express);

const app = express();
const port = 3000;
// get 요청
app.get("/", (req, res)=> {
    res.send("Hello Get World");
});
// post 요청
app.post("/", (req, res)=> {
    res.send("Hello Post World");
});
// 모든 http 요청을 처리 가능한 all()과, 
app.all("/test", (req, res)=> {
    console.log("모든 요청의 처리가 가능합니다.");
    // 다음 핸들러로 제어권을 넘길 때 사용하는 next()메서드
    next();
})
app.listen(8080, ()=> {
console.log("express server is started");
})
// ! 미들 웨어 설정
// json 형식의 요청 바디 파싱
// app.use(express.static("/"));
// 인코딩 된 요청 바디 파싱
// app.use(express.urlencoded({ extended : true }));