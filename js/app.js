'use strict';

document.addEventListener('DOMContentLoaded', function() {

	// obługa klikania w liczby
	var firstNuber=0;
	var secondNumber;
	var znak;
	var wynik;

	var listNumber = document.querySelectorAll('.num');	
	var inputWork = document.querySelector('.input');
	for (var i = 0 ; i < listNumber.length; i++){
		listNumber[i].addEventListener('click', clickNumber);
	}

	function clickNumber(){		
		for (var i = 0 ; i < listNumber.length; i++){
			if (this==listNumber[i]) {	
				if (inputWork.value==0) {
					inputWork.value='';
				}			
				if (i<9) {
				inputWork.value+=i+1;
				}else{
				inputWork.value+=0;
				}
			}
		}
		console.log(inputWork.value);
	}

	//obługa klikania w rowna
	var znakRowna = document.querySelector('.rowna');
	znakRowna.addEventListener('click', clickRowna);

	function clickRowna(){		
		secondNumber=inputWork.value;
		inputWork.value="";
		if (znak=='/') {
			if (firstNuber<secondNumber) {
				alert('nie mozna dzielic mniejsza przez większa')
			}else if (secondNumber==0) {
				alert('nie mozna dzielic przez 0');
			}else{
			inputWork.value=firstNuber/secondNumber;
			}
		}else if (znak=='*') {
			inputWork.value=firstNuber*secondNumber;
		}else if (znak=='+') {			
			inputWork.value=parseInt(firstNuber)+parseInt(secondNumber);
		}else if (znak=='-') {
			inputWork.value=firstNuber-secondNumber;
			
		}

	}

	//obługa klikniecia w znaki

	var listZnaki = document.querySelectorAll('.zna');
	

	for (var i = 0 ; i < listZnaki.length; i++){
		listZnaki[i].addEventListener('click', clickZnaki);
	}

	function clickZnaki(){
		console.log('działa');		
		firstNuber=inputWork.value;
		inputWork.value="";
		for (var i = 0 ; i < listZnaki.length; i++){
			if (this==listZnaki[0]) {				
				console.log('/')
				znak='/';
			}else if (this==listZnaki[1]) {
				console.log('*')
				znak='*';
			}else if (this==listZnaki[2]) {
				console.log('+')
				znak='+';
			}else if (this==listZnaki[3]) {
				console.log('-')
				znak='-';
			}
		}
	}

});