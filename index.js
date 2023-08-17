 
 
  const btn = document.getElementById('btn').addEventListener ('click',function(){
    const price = document.getElementById('price');
    const price1 = price.innerText;
    const price2  = parseFloat(price1);
    const price3 =100- (price2 *30)/100;
    price.innerText = price3;
   

}); 

 
// work 2
 
 const btnn = document.getElementById('btnn').addEventListener('click',function(){
    const inputtwo = document.getElementById('inputone');
    const inputone = inputtwo.value ;
    inputtwo.value = '';



    const secondprice = document.getElementById('secondprice');
    const secondprice1 = secondprice.innerText;
    const price3 = parseFloat(secondprice1);

    if(inputone == 'DISC30'){
        const disc = secondprice1 - (secondprice1*30)/100;
       secondprice.innerText = disc;
    

    }else{
        alert('please enter currect cupon')
    }

});  
 
 document.querySelector('.button').addEventListener('click',function(){
    

    const rs = document.querySelector('.pp');
    rs.classList.add('pr');
   

});
 

let count = 0;
let button = document.querySelector('.button');
let disp = document.querySelector('.pp');
let italic = document.querySelector('.italic');
let underline = document.querySelector('.underline');
let left = document.querySelector('.left');
let center = document.querySelector('.center');
let right = document.querySelector('.right');
let justify = document.querySelector('.justify');


button.addEventListener('click',function(){
    count ++;
    if(count%2!==0){
        
        disp.classList.add('pr');

    }else{
     
        disp.classList.remove('pr');

    }
});
italic.addEventListener('click',function(){
    count ++;
    if(count%2!==0){
        
        disp.classList.add('it');

    }else{
     
        disp.classList.remove('it');

    }
});

underline.addEventListener('click',function(){
    count ++;
    if(count%2!==0){
        
        disp.classList.add('ul');

    }else{
     
        disp.classList.remove('ul');

    }
});
left.addEventListener('click',function(){
    count ++;
    if(count%2!==0){
        
        disp.classList.add('le');

    }else{
     
        disp.classList.remove('le');

    }
});
center.addEventListener('click',function(){
    count ++;
    if(count%2!==0){
        
        disp.classList.add('cr');

    }else{
     
        disp.classList.remove('cr');

    }
});
right.addEventListener('click',function(){
    count ++;
    if(count%2!==0){
        
        disp.classList.add('ri');

    }else{
     
        disp.classList.remove('ri');

    }
});
justify.addEventListener('click',function(){
    count ++;
    if(count%2!==0){
        
        disp.classList.add('jf');

    }else{
     
        disp.classList.remove('jf');

    }
});

const select = document.querySelector('.select').addEventListener('click',function(){
    const rsp = document.querySelector('#fontt').value;
const rrr = document.querySelector('.rrr');
 if(rsp==5){
    rrr.style.fontSize = "10px"
    
 }
 else if(rsp==6){
    rrr.style.fontSize = '15px'
 }
 else if(rsp==7){
    rrr.style.fontSize = '20px'
 }
 else if(rsp==8){
    rrr.style.fontSize = '25px'
 }
 else if(rsp==9){
    rrr.style.fontSize = '30px'
 }
 else if(rsp==6){
    rrr.style.fontSize = '35px'
 }
 else if(rsp==10){
    rrr.style.fontSize = '40px'
 }
 else if(rsp==11){
    rrr.style.fontSize = '45px'
 }
 else if(rsp==12){
    rrr.style.fontSize = '50px'
 }
 else if(rsp==13){
    rrr.style.fontSize = '55px'
 }
 else if(rsp==14){
    rrr.style.fontSize = '50px'
 }
 else if(rsp==15){
    rrr.style.fontSize = '60px'
    
 }

});

const colorPicker = document.getElementById("color-picker");

colorPicker.addEventListener("input",function(){
 /*     image.style.filter = `hue-rotate(${this.value}deg)`;
     rrr.style.filter = `hue-rotate(${this.value}deg)`; */
     const colorcode = document.getElementById("color-code");
    const colorp = colorPicker.value;
    colorcode.innerHTML = colorp;
   
    

    
});








