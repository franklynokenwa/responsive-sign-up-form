let firstName =document.getElementById('fName');
let lastName =document.getElementById('lName');
let email =document.getElementById('email');
let password =document.getElementById('password');
let button =document.getElementById('submit');
let error1 =document.getElementById('error1');
let error2 =document.getElementById('error2');
let error3 =document.getElementById('error3');
let error4 =document.getElementById('error4');
let general=document.querySelectorAll('input.general');
let icon =document.getElementById('icon');
let icon1 =document.getElementById('icon1');
let icon2 =document.getElementById('icon2');
let icon3 =document.getElementById('icon3');
let pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);


form.addEventListener('submit', (e) => {
    event.preventDefault();

    if(firstName.value == '' || firstName.value == null)  {
        error1.style = 'visibility:visible';
        
        icon.style = 'visibility:visible';
        general[0].style = 'border: 2px solid red';
                
    }else{
        error1.style = 'visibility:hidden';
           
        icon.style = 'visibility:hidden';      
        general[0].style = 'border: 2px solid green';
                
    }
    if (lastName.value == '' || lastName.value == null) {       
        error2.style = 'visibility:visible';
        
        icon1.style = 'visibility:visible';
        general[1].style = 'border: 2px solid red';
                
    }else{
        error2.style = 'visibility:hidden';
           
        icon1.style = 'visibility:hidden';      
        general[1].style = 'border: 2px solid green';
                
    }

    if (pattern.test(email.value) || email.value=='' || email.value == null) {       
        error3.style = 'visibility:visible';
        
        icon2.style = 'visibility:visible';
        general[2].style = 'border: 2px solid red';
                
    }else{
        error3.style = 'visibility:hidden';
           
        icon2.style = 'visibility:hidden';      
        general[2].style = 'border: 2px solid green';
                
    }
    

    if (password.value.length <= 6) {       
        error4.style = 'visibility:visible';
        
        icon3.style = 'visibility:visible';
        general[3].style = 'border: 2px solid red';
                
    }else{
        error4.style = 'visibility:hidden';
           
        icon3.style = 'visibility:hidden';      
        general[3].style = 'border: 2px solid green';
                
    }
    
   /* if(lastName.value == '' || lastName.value == null){
        error2.style = 'visibility:visible';
        general.style = 'border: 2px solid red';
    }*/
});
