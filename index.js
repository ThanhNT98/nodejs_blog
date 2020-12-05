const express = require('express')//vô node module để lấy rồi lưu vô biến express
const app = express() //toán tử call () gọi express(), dùng để xây dựng xuyên suốt ứng dụng
const port = 3000

app.get('/', (req, res) => { //arow function trar veef trinhf duyeejt chuooix hello world
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)//127.0.0.1: localhost
})