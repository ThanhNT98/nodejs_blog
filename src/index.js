const path=require('path')
const express = require('express')//vô node module để lấy rồi lưu vô biến express
const morgan = require('morgan')//detail log to catch error
const handlebars  = require('express-handlebars');//nhúng template
const route=require('./routes/index')//config routes, k cần /index cũng được-mặc định tự hiểu  

const app = express() //toán tử call () gọi express(), dùng để xây dựng xuyên suốt ứng dụng
const port = 3000

app.use(express.static(path.join(__dirname,'public')))//truy cập thư mục public tu thu muc root
app.use(morgan('combined'))

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));//set up duong dan

//init routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)//127.0.0.1: localhost
})

app.use(morgan('combined'))