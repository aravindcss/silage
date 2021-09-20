
var pwd = document.querySelector('#password');

var submit = document.querySelector('#submit');

var regularExpression  = /^(?=.*[0-9])(?=.*[!@#$&*])[a-zA-Z0-9!@#$&*]{8,}$/;
 var paymentType = document.querySelector('.paymentType');
   paymentType.disabled = true;

// submit.disabled = true;

var passworderror = document.querySelector('.passerror');


pwd.addEventListener('keyup', function(){
	if(!regularExpression.test(pwd.value)){
		pwd.style.borderBottom = '2px solid red';

	}else{pwd.style.borderBottom = '2px solid green';}
});


