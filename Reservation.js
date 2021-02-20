var types = document.getElementsByName("energy-type");
var ts = document.getElementById("ts");
var trans = ["Manual","Automatic"];
var result_p = document.getElementById("result_p");
var days = document.getElementById("days");

var Vehicle_value=0;
var Energy_value=0;

function resetting_vv(){
    var cars = document.getElementsByName("vehicle-type");
    for(var i=0;i<cars.length;i++){
        if(cars[i].checked){
            if(cars[i].value=="Moto"){
                Vehicle_value=10;
            }
            else if(cars[i].value=="Citadine"){
                Vehicle_value=12;
            }
            else if(cars[i].value=="Compact"){
                Vehicle_value=14;
            }
            else if(cars[i].value=="Berline"){
                Vehicle_value=20;
            }
            else if(cars[i].value=="Uv"){
                Vehicle_value=16;
            }
            else if(cars[i].value=="Cm"){
                Vehicle_value=900;
            }
            else if(cars[i].value=="Truck"){
                Vehicle_value=250;
            }
            
        }
        
        }
    
}


function calculate(){


    resetting_vv();
    
    
    if(verify_days()==true){
        if( Vehicle_value>0){
            
            if(Energy_type()!=0){
                
                Vehicle_value+=Vehicle_value*Energy_value;
                if(ts.innerHTML==trans[1]){
                    Vehicle_value+=Vehicle_value*0.19;
                }
                Vehicle_value=Vehicle_value*days.value;
                result_p.innerHTML=Vehicle_value+" $";
            }
            else {
                alert("chose energy type");
            }
            
        }
    }
    else{
    
    }
    

}
function Vehicle_type(selected_type){
    if(selected_type=="Moto"){
        Vehicle_value=10;
        ts.innerHTML="";
        types[0].checked=false;
        types[1].checked=false;
        types[2].checked=false;
        types[3].checked=false;
        types[0].disabled = false;
        types[1].disabled = true;
        types[2].disabled = false;
        types[3].disabled = true;

    }
    else if(selected_type=="Citadine"){
        Vehicle_value=12;
        ts.innerHTML=trans[0];
        types[0].checked=false;
        types[1].checked=false;
        types[2].checked=false;
        types[3].checked=false;
        types[0].disabled = false;
        types[1].disabled = false;
        types[2].disabled = false;
        types[3].disabled = false;
    }
    else if(selected_type=="Compact"){
        Vehicle_value=14;
        ts.innerHTML=trans[0];
        types[0].checked=false;
        types[1].checked=false;
        types[2].checked=false;
        types[3].checked=false;
        types[0].disabled = true;
        types[1].disabled = false;
        types[2].disabled = false;
        types[3].disabled = false;
    }
    else if(selected_type=="Berline"){
        Vehicle_value=20;
        ts.innerHTML=trans[1];
        types[0].checked=false;
        types[1].checked=false;
        types[2].checked=false;
        types[3].checked=false;
        types[0].disabled = true;
        types[1].disabled = false;
        types[2].disabled = false;
        types[3].disabled = false;
    }
    else if(selected_type=="Uv"){
        Vehicle_value=16;
        ts.innerHTML=trans[0];
        types[0].checked=false;
        types[1].checked=false;
        types[2].checked=false;
        types[3].checked=false;
        types[0].disabled = true;
        types[1].disabled = true;
        types[2].disabled = true;
        types[3].disabled = false;
    }
    else if(selected_type=="Cm"){
        Vehicle_value=900;
        ts.innerHTML=trans[0];
        types[0].checked=false;
        types[1].checked=false;
        types[2].checked=false;
        types[3].checked=false;
        types[0].disabled = true;
        types[1].disabled = true;
        types[2].disabled = false;
        types[3].disabled = false;
    }
    else if(selected_type=="Truck"){
        Vehicle_value=250;
        ts.innerHTML=trans[1];
        types[0].checked=false;
        types[1].checked=false;
        types[2].checked=false;
        types[3].checked=false;
        types[0].disabled = true;
        types[1].disabled = true;
        types[2].disabled = true;
        types[3].disabled = false;
    }
    return Vehicle_value;
}


function verify_days(){
    if( (isNaN(days.value)) || days.value<0){
        alert("insert a valid days number");
        return false;
       
    }
    else{
        
        return true;
    }
}

function Energy_type(){
    p=0;
    for(var i=0; i<types.length ;i++){
        if(types[i].checked){
            p=1;
            if(types[i].value==types[0].value){
                Energy_value=0.05;
            }
            else if(types[i].value==types[1].value){
                Energy_value=0.09;
            }
            else if(types[i].value==types[2].value){
                Energy_value=0.14;
            }
            else if(types[i].value==types[3].value){
                Energy_value=0.21;
            }

        }
    

    }
    if(p==1){
       
        return Energy_value;
    }
    else{
        
        return p;
    }
    
}




//drop down menu
var close = document.querySelector("#close")
    var open = document.querySelector("#open")
    var navv = document.querySelector("#navv")
    function openn(e){
        navv.style.display = "flex"
        open.style.display = "none"
        close.style.display = "inline"
    }
    function closee(){
        navv.style.display = "none"
        open.style.display = "inline"
        close.style.display = "none"
    }