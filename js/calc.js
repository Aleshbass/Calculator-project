let Myoutput= document.querySelector('.output');

let Myhistory= document.querySelector('.history');

let button= document.querySelectorAll('button');


window.addEventListener('DOMContentLoaded', ()=>{
    InsertOut("0");
})

function formatNum(his){
 let a = Number(his)
 let b= a.toLocaleString("en");
 return b
}


function reverseNum(his){
    return  Number(his.replace(/,/g,''));
    
}

 
function getHis(){
    return Myhistory.innerText
}

function getOut(){
    return Myoutput.innerText
}

function InsertHis(his){ 
 Myhistory.innerText= his
    
}




function InsertOut(his){

    if(his==""){
        Myoutput.innerText= his;
    }

  

    else{
        Myoutput.innerText= formatNum(his)
    }
   
   

};




let Mynumber= document.querySelectorAll('.number');

for( let i=0; i<Mynumber.length; i++){  
    Mynumber[i].addEventListener('click', (e)=>{

     
var output= reverseNum(getOut());
if(output!=NaN)
    output= output + Mynumber[i].value
    InsertOut(output)

    
});

}

var Myoperator= document.querySelectorAll('.operator')

for( let i=0; i<Myoperator.length; i++){  
    Myoperator[i].addEventListener('click', (e)=>{

         if(Myoperator[i].value=="clear"){
     InsertOut("0");
     InsertHis("");

         }



     else if (Myoperator[i].classList.contains('box')){
var inside = Myoperator[i].value
      InsertOut(inside)
     }
         
 

    else if(Myoperator[i].value=="delete"){

        var output= reverseNum(getOut()).toString();
        if(output){
         output= output.substr(0, output.length-1)
        InsertOut(output)
        }
    }

   else { 
       var output= getOut();
       var history= getHis();

     
    if(output!=""){
        output= reverseNum(output); 
        history= history + output;

        if(Myoperator[i].value=="="){
            var result= eval(history);
            InsertOut(result)
            InsertHis("")

            // var percent= reverseNum(getOut()).toString();
            // if(percent[percent.length-1]==="%"){
            //     let percentValue= eval(percent)
            //     InsertOut(percentValue);
            // }
        }

        else{
            history= history+ Myoperator[i].value;
            InsertHis(history);
            InsertOut("")
        }
    }
   }
})
};






// let trial= stringify(his)
// if (trial.indexOf(".") >= 0){}
// Myoutput.innerText= formatNum(his)

