//Home route
const express = require('express');//Form Node Modules
let router = express.Router();//From Express
let Post = require('../models/Post');
let User = require('../models/User');

router.get('/',function(request,response){
    Post.find({},function(err,posts)
    {
        if(err)
        {
            console.log(err);
        }
        else{
            response.render("index",{
                title:"Hello",
                description:"Desription",
                posts:posts
            });
        }
    })
});
//Home route
router.get('/blog',function(request,response){
    response.render("blog");
});
router.get('/blog/create',function(request,response){
    response.render("addproduct");
});
router.post('/submitPost',function(request,response){
 let post=new Post(request.body);
 console.log(post);
 post.save(function(err)
 {
     if(err)
     {
         console.log('Some error occured');
     }
     else
     {
         console.log('Post saved Successfully');
         response.redirect('/');

     }
 })
});







router.get('/users',function(request,response){
    response.render("adduser");
});
router.post('/adduser',function(request,response){
    let user=new User(request.body);
    console.log(user);
    user.save(function(err)
    {
        if(err)
        {
            console.log('error occured');
        }
        else
        {
            console.log('Post saved Successfully');
            response.redirect('/users');
        }
    })

})

module.exports = router;
