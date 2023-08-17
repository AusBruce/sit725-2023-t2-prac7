
let express= require('express');
let router =express.Router();




router.post('/', function(req,res){
    // ask the controller to perform the db logic
   controller.postCat(req,res);
   
    // let cat = req.body;
    // postCat(cat, (err, result) => {
    //     if (!err) {
    //         res.json({statusCode:201, data:result, message:'success'});
    //     }
    // });
});


router.get('/', (req,res) => {
    controller.getAllCats(req,res);
      // ask the controller to perform the db logic
    
    
      // getAllCats((err,result)=>{
    //     if (!err) {
    //         res.json({statusCode:200, data:result, message:'get all cats successful'});
    //     }
    // });
});

module.exports=router