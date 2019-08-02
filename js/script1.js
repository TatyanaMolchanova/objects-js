
(function () {
	'use strict';

if (false) {

	function genRand(min, max) {
		return Math.round(Math.random() * (max - min)) + min;
	}

	if (false) {

		// let a = Math.round(Math.random() * (6 - 1)) + 1;
		// let a = genRand(),
		// 	b = genRand();

		// 2 numbers
		// from 1 to 6

		document.write(genRand(1, 6) + ' : ' + genRand(1, 6));
		document.write('<br>');
		document.write('<br>');
		

		
	

		// 1 number
		// 0, 1
		// false, true

		// let a = genRand(0, 1);

		document.write(Boolean(genRand(0, 1)));
		document.write('<br>');
		document.write('<br>');

		// if (genRand(0, 1)) {
		// 	document.write('Орел');
		// } else {
		// 	document.write('Решка');
		// }

		// genRand(0, 1) ? document.write('Орел') : document.write('Решка')

		document.write(genRand(0, 1) ? 'Решка' : 'Орел');
		document.write('<br>');

 	}

	var userMin, userSecondMax;

	do {
		userMin = +prompt('Enter first number: ');
	} while (Number.isNaN(userMin));

	do {
		userSecondMax = +prompt('Enter second number: ');
	} while (Number.isNaN(userSecondMax));


	document.write(genRand(userMin, userSecondMax));
	document.write('<br>');


}










	if (false) {
		alert('Я люблю БОРЩ!');
		console.log('Я люблю БОРЩ!');
		document.write('<h1>Я люблю БОРЩ!</h1>');

		let admin, name;

		name  = 'Василий';
		admin = name; 
		name = admin = 'test';

		console.log(admin);
		alert(admin);

		var planet  = 'Earth',
			visitor = 'Peter'; // user, customer, client


		//  = prompt('Whats your name');
		// alert(nameUser);

		// alert( prompt('Whats your name') );

		var nameUser;
		alert( nameUser = prompt('Whats your name') );
	}

})();
