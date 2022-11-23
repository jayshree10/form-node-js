const express=require('express');
var app=express();
const fs=require('fs');
const bodyParser=require('body-parser');
app.use(express.static('public'));
//setup middleware function
       //built-in middleware-parses incoming request
       //based on bodyparser

//urlencoded data:form ke data ko fill krne ke baad submit pe click krete hain toh top pe signs ko urlencoded data kehte hain
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/form1',function(request,response){
response.sendFile(__dirname+'/form1.html');

})

app.post('/form',function(request,response){
    var ids=request.body.sid;
    var fnamee=request.body.name;
    var email =request.body.email;
    var addr =request.body.address;
    var English=Number(request.body.english);
    var Physics=Number(request.body.physics);
    var Chemistry=Number(request.body.chemistry);
    var Maths=Number(request.body.maths);
    var Computers=Number(request.body.computers);
    

    var total=Number(English+Computers+Maths+Physics+Chemistry);
    var average=total/5;
    
    var grade = 'A';
    if(average>=90){
        grade='A';
    }else if(average>=80 && average<90){
        grade='B';
    }else if(average>=70 && average<80){
        grade='C';
    }else if(average>=55 && average<70){
        grade='D';
    }else if(average>=40 && average<55){
        grade='E';
    }else{
        grade='F';
    }

    

    let scoreCard = {
        'Student Id' : ids,
        'Student Name' : fnamee,
        'Email':email,
        'Address':addr,
        'English' : English,
        'Physics':Physics,
        'Chemistry':Chemistry,
        'Maths' : Maths,
        'Computers':Computers,
        
        'Total Marks' : total,
        'Average Marks' : average,
        'Grade':grade
    }

    
    
    fs.appendFileSync("abc.txt",JSON.stringify(scoreCard));
    const data = fs.readFileSync("abc.txt","utf-8")
   
    console.log(data);
    response.send(data);
})

app.listen(3000,()=>{
    console.log("Server started at 3000.")
})