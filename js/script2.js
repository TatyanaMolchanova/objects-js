(function () {
	'use strict';

	if (false) {
		for (let i = 10; i >= 0; i--) {
			document.write(i);
			document.write("<br>");
		}
	}


	if (false) {
		let a = 6,
			b = 10,
			result;

		// if (a + b < 4) {
		// 	result = 'Мало';
		// } else {
		// 	result = 'Много';
		// }

		// document.write(result);

		result = (a + b < 4) ? 'Мало' : 'Много';

		document.write(result);
	}

	if (false) {

		var numberA, numberB;

			do {
				numberA = +prompt('Enter first number: ');
			} while (Number.isNaN(numberA));
			
			do {
				numberB = +prompt('Enter second number: ');
			} while (Number.isNaN(numberB));

		// 	if (numberA > numberB) {
		// 		alert(numberA);
		// 	} else {
		// 		alert(numberB);
		// 	} 

		numberA > numberB ? alert(numberA) : alert(numberB);
	}


	if (false) {
		var numberA, numberB;

				do {
					numberA = +prompt('Enter first number: ');
				} while (Number.isNaN(numberA));
				
				do {
					numberB = +prompt('Enter second number: ');
				} while (Number.isNaN(numberB));

		switch (true) {
			case (numberA > numberB):
				alert(numberA);
				break;
			case (numberA < numberB):
				alert(numberB);
				break;
			default:
				alert(numberA + " " + numberB);
				break;

		}

	}

	if (false) {
		// вопрос про JS
		let answer = prompt('Каково «официальное» название JavaScript?');

		if (answer && answer.toLowerCase() == 'ECMAScript'.toLowerCase()) {
			alert('You are right!');
		} else {
			alert('You don\'t know  ECMAScript');
		}
	}

	if (false) {
		// вывести большее число
		var numberA, numberB;

		do {
			numberA = +prompt('Enter first number: ');
		} while (Number.isNaN(numberA));
		
		do {
			numberB = +prompt('Enter second number: ');
		} while (Number.isNaN(numberB));

		if (numberA > numberB) {
			alert(numberA);
		} else if (numberA < numberB) {
			alert(numberB);
		} else {
			alert(numberA + " " + numberB);
		}
	}

	if (false) {

		// сумма чисел, которые ввел пользователь

		// var numberA = +prompt('Enter first number: '),
		// 	numberB = +prompt('Enter second number: ');
		
		// document.write(+numberA + +numberB);
		
		
		// var numberA = +prompt('Enter first number: '),
		// 	numberB = +prompt('Enter second number: ');
		
		// document.write(numberA + numberB);
		
		var numberA, numberB;
		
		do {
			numberA = +prompt('Enter first number: ');
		} while (Number.isNaN(numberA));
		
		do {
			numberB = +prompt('Enter second number: ');
		} while (Number.isNaN(numberB));
		
		document.write(numberA + numberB);
	}


})();