var work=0;
const b0=document.getElementById("no0");
const b1=document.getElementById("no1");
const b2=document.getElementById("no2");
const b3=document.getElementById("no3");
const b4=document.getElementById("no4");
const b5=document.getElementById("no5");
const b6=document.getElementById("no6");
const b7=document.getElementById("no7");
const b8=document.getElementById("no8");
const b9=document.getElementById("no9");
const bD=document.getElementById("point");
const bP=document.getElementById("plus");
const bMi=document.getElementById("mines");
const bMu=document.getElementById("x");
const bDi=document.getElementById("slash");
const bC=document.getElementById("clear");
const bBc=document.getElementById("cback");
const bE=document.getElementById("answer");


b0.style.visibility='hidden';
b1.style.visibility='hidden';
b2.style.visibility='hidden';
b3.style.visibility='hidden';
b4.style.visibility='hidden';
b5.style.visibility='hidden';
b6.style.visibility='hidden';
b7.style.visibility='hidden';
b8.style.visibility='hidden';
b9.style.visibility='hidden';
bD.style.visibility='hidden';
bP.style.visibility='hidden';
bMi.style.visibility='hidden';
bMu.style.visibility='hidden';
bDi.style.visibility='hidden';
bC.style.visibility='hidden';
bBc.style.visibility='hidden';
bE.style.visibility='hidden';

function fo(){
  if(work==0){
    work=1;
    var button = document.getElementById('on');
    button.style.backgroundColor='hsl(135, 100%, 50%)';
    button.style.borderColor='hsl(135, 100%, 50%)';
    button.textContent='On';
    b0.style.visibility='hidden';
    b1.style.visibility='hidden';
    b2.style.visibility='hidden';
    b3.style.visibility='hidden';
    b4.style.visibility='hidden';
    b5.style.visibility='hidden';
    b6.style.visibility='hidden';
    b7.style.visibility='hidden';
    b8.style.visibility='hidden';
    b9.style.visibility='hidden';
    bD.style.visibility='hidden';
    bP.style.visibility='hidden';
    bMi.style.visibility='hidden';
    bMu.style.visibility='hidden';
    bDi.style.visibility='hidden';
    bC.style.visibility='hidden';
    bBc.style.visibility='hidden';
    bE.style.visibility='hidden';
    
    document.getElementById("in").value="";
    document.getElementById("an").value="";
  }else if(work==1){
    
    var button = document.getElementById('on');
    button.style.backgroundColor='hsl(0, 100%, 50%)';
    button.style.borderColor='hsl(0, 100%, 50%)';
    button.textContent='Off';
    work=0;
    b0.style.visibility='visible';
    b1.style.visibility='visible';
    b2.style.visibility='visible';
    b3.style.visibility='visible';
    b4.style.visibility='visible';
    b5.style.visibility='visible';
    b6.style.visibility='visible';
    b7.style.visibility='visible';
    b8.style.visibility='visible';
    b9.style.visibility='visible';
    bD.style.visibility='visible';
    bP.style.visibility='visible';
    bMi.style.visibility='visible';
    bMu.style.visibility='visible';
    bDi.style.visibility='visible';
    bC.style.visibility='visible';
    bBc.style.visibility='visible';
    bE.style.visibility='visible';
  }
}
  /*(work==1){
    document.getElementById("no1").disabled=false;
  }else{
    document.getElementById("no1").disabled=true;
  }*/
var ar=new Array();
var no1=-1;
var no2=-1;
var math;
function btn1(){

  document.getElementById("in").value+=1;
  ar.push(1);
}
function btn2(){
  document.getElementById("in").value+=2;
  ar.push(2);
}
function btn3(){
  document.getElementById("in").value+=3;
  ar.push(3);
}
function btn4(){
  document.getElementById("in").value+=4;
  ar.push(4);
}
function btn5(){
  document.getElementById("in").value+=5;
  ar.push(5);
}
function btn6(){
  document.getElementById("in").value+=6;
  ar.push(6);
}
function btn7(){
  document.getElementById("in").value+=7;
  ar.push(7);
}
function btn8(){
  document.getElementById("in").value+=8;
  ar.push(8);
}
function btn9(){
  document.getElementById("in").value+=9;
  ar.push(9);
}
function btn0(){
  document.getElementById("in").value+=0;
  ar.push(0);
}
function btnDot(){
  document.getElementById("in").value+='.';
  ar.push('.');
}
function btnPlus(){
  document.getElementById("in").value+='+';
  if(no1==-1){
    no1=parseFloat(ar.join(''));
 }
 no2=parseFloat(ar.join(''));
 if(math=='+'){
   no1=no1+no2;
 }else if(math=='-'){
   no1=no1-no2;
 }else if(math=='*'){
   no1=no1*no2;
 }else if(math=='/'){
   no1=no1/no2;
 }
 math='+';
 ar=new Array();
}
function btnSlash(){
  document.getElementById("in").value+= '/';
  if(no1==-1){
    no1=parseFloat(ar.join(''));
 }
 no2=parseFloat(ar.join(''));
 if(math=='+'){
   no1=no1+no2;
 }else if(math=='-'){
   no1=no1-no2;
 }else if(math=='*'){
   no1=no1*no2;
 }else if(math=='/'){
   no1=no1/no2;
 }
 math='/';
 ar=new Array();
}
function btnMines(){
  document.getElementById("in").value+='-';
  if(no1==-1){
    no1=parseFloat(ar.join(''));
 }
 no2=parseFloat(ar.join(''));
 if(math=='+'){
   no1=no1+no2;
 }else if(math=='-'){
   no1=no1-no2;
 }else if(math=='*'){
   no1=no1*no2;
 }else if(math=='/'){
   no1=no1/no2;
 }
 math='-';
 ar=new Array();
}
function btnMul(){
  document.getElementById("in").value+='*';
  if(no1==-1){
     no1=parseFloat(ar.join(''));
  }
  no2=parseFloat(ar.join(''));
  if(math=='+'){
    no1=no1+no2;
  }else if(math=='-'){
    no1=no1-no2;
  }else if(math=='*'){
    no1=no1*no2;
  }else if(math=='/'){
    no1=no1/no2;
  }
  math='*';
  ar=new Array();
}
function btn0(){
  document.getElementById("in").value+=0;
  ar.push(0);
}
function btnClear(){
  document.getElementById("in").value="";
  document.getElementById("an").value="";
  no1=-1;
  no2=-1;
  math='';
  ar=new Array();
}
function btnEq(){
  no2=parseFloat(ar.join(''));
  var answer;
  if(math=='+'){
    answer=no1+no2;
  }else if(math=='-'){
    answer=no1-no2;
  }else if(math=='/'){
    answer=no1/no2;
  }else if(math=='*'){
    answer=no1*no2;
  }
    document.getElementById("an").value=answer;
}

function btnBackC(){

 var inBox= document.getElementById("in").value;
 
 
  
}
