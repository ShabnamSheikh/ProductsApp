const express = require('express');
const ProductData = require('./src/model/Productdata.js');
///var ObjectId=require('mongoose').Types.ObjectId;
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json())
app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    ProductData.find()
                  .then(function(products){
                      res.send(products);
                  });
});
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
   console.log(req.body);
   var product = {
       productId : req.body.product.productId,
       productName : req.body.product.productName,
       productCode : req.body.product.productCode,
       releaseDate : req.body.product.releaseDate,
      description : req.body.product.description,
      price: req.body.product.price,
      starRating : req.body.product.starRating,
      imageUrl : req.body.product.imageUrl,

   }
   var product = new ProductData(product);
   product.save();
});
app.get('/edit/:id',function(req,res){
    ProductData.findById(req.params.id,(error,daat)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
    });
    
    app.put('/update/:id',(req,res,next)=>{
        ProductData.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },(error,data)=>{
            if(error){
                return next(error);
                console.log(error)
            }else{
                res.json(data)
                console.log("Data Updated Sucessfully")
            }
        })
    })
    
    app.delete('/delete/:id',function(req,res,next){
        ProductData.findOneAndRemove(req.params.id,(error,data)=>{
            if(error){
                return next(error);
            }else{
                res.status(200).json({
                    msg:data
                })
            }
        })
    });
    
    
app.listen(3000, function(){
  console.log('listening to port 3000');
});