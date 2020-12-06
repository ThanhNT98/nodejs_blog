class NewsController{
    //[GET]/news
    index(req, res){ //arow function trả về trình duyệt nội dung render 
        res.render('news')
    };

    //[GET]/news/:slug
    newsDetail(req, res){ //slug: tham số 
        res.send('News Details')
    };
}
module.exports=new NewsController();//tạo ra thực thể của new controller

