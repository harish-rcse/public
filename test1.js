






function validatef()
{ 
    var x=document.forms["gh"]["name"].value;
  
    if(x==""||x==null){
        console.log("invalid");
        return false;
    }
    else{
        alert("ok done");
        document.getElementById("su").innerHTML=x;
        return true;
    }
    
}