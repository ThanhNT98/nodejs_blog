const path=require('path')
const express = require('express')//vô node module để lấy rồi lưu vô biến express
const morgan = require('morgan')//detail log to catch error
const handlebars  = require('express-handlebars');//nhúng template
const app = express() //toán tử call () gọi express(), dùng để xây dựng xuyên suốt ứng dụng
const port = 3000

app.use(express.static(path.join(__dirname,'public')))//truy cập thư mục public tu thu muc root
app.use(morgan('combined'))

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));//set up duong dan

app.get('/', (req, res) => { //arow function trar veef trinhf duyeejt chuooix hello world
  res.render('home')
})
app.get('/news', (req, res) => { //arow function trar veef trinhf duyeejt chuooix hello world
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)//127.0.0.1: localhost
})

app.use(morgan('combined'))