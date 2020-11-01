const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
app.set('views', './views')
//Khai báo templateEngine sử dụng
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.render('index');
});
app.get('/form_calculator',function(req,res){
    const n1=req.query.n1;
    const n2=req.query.n2;
    const ope=req.query.pheptinh;
    var messages="";
    if (n1==="" || n2===""){
      messages="Vui lòng nhập đủ 2 số";
    }
    var kq=null;
    if (ope=="cong"){
      kq=parseFloat(n1)+parseFloat(n2);
    }else if (ope=="tru"){
      kq=parseFloat(n1)-parseFloat(n2);
    }else if (ope=="nhan"){
      kq=parseFloat(n1)*parseFloat(n2);
    }else if (ope=="chia"){
      kq=parseFloat(n1)/parseFloat(n2);
    }else{
      messages="Chưa chọn phép tính";
    }
    res.render('index',{valOfResult:kq, message:messages});
    console.log('done');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})