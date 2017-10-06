module.exports = function(app){

     app.get('/',function(req,res){
        // set the name property of session.  
        req.session.number = 0
       res.render("index", {number: req.session.number});
       
        //code to add user to db goes here!
        // redirect the user back to the root route. 
        
     })

     app.post('/add',function(req,res){
        // set the name property of session.  
        req.session.number += 2
        console.log(req.session.number);
       res.render("index", {number: req.session.number});
        //code to add user to db goes here!
        // redirect the user back to the root route. 
        
     })
     


} 