(function(){
	'use strict';

	//variant 1 for

	// let students = [
	// 	'Maxim Shevchenko',
	// 	'Andrey Rubtsov',
	// 	'Denis Vasyliev',
	// 	'Valeriya Kolomiiets',
	// 	'Tatyana Molchanova',
	// 	'Darya Posuh',
	// 	'Olga Podoprigora'
	// ];

	// document.write('<ul>');

	// for (var i = 0; i < students.length; i++) {
	// 	students[i]
	// 	document.write(`<li>${students[i]}</li>`); 
	// }

	// document.write('</ul>');

	//variant 1 forEach

	// let students = [
	// 	'Maxim Shevchenko',
	// 	'Andrey Rubtsov',
	// 	'Denis Vasyliev',
	// 	'Valeriya Kolomiiets',
	// 	'Tatyana Molchanova',
	// 	'Darya Posuh',
	// 	'Olga Podoprigora'
	// ];

	// document.write('<ul>');

	// students.forEach(function(student, index, array){
	// 	document.write(`<li>${++index} ${student}</li>`); 
	// 	// document.write(`<li>${index}</li>`); 
	// 	// document.write(`<li>${array}</li>`); 

	// });
	// document.write('</ul>');

	
	// document.write(`<em>${students.join(' -- ')}</em>`); 
	// document.write('<br>');
	// document.write(`<em>${students.join(' -- ')}</em>`); 

	//variant 3

	// let students = [
	// 	'Maxim Shevchenko',
	// 	'Andrey Rubtsov',
	// 	'Denis Vasyliev',
	// 	'Valeriya Kolomiiets',
	// 	'Tatyana Molchanova',
	// 	'Darya Posuh',
	// 	'Olga Podoprigora'
	// ];

	// document.write('<ul>');

	// students.forEach(function(student, index){

	// 	document.write(`<li>
	// 		<b>${++index} </b>
	// 		<em>${student.split(' ')[0]} </em>
	// 		<b><em>${student.split(' ')[1]}</em></b>
	// 	</li>`); 
	

	// });
	// document.write('</ul>');

	
	// document.write(`<em>${students.join(' -- ')}</em>`); 

	//variant 4

	let students = [
		'Maxim Shevchenko',
		'Andrey Rubtsov',
		'Denis Vasyliev',
		'Valeriya Kolomiiets',
		'Molchanova',
		'Darya Posuh',
		'Olga'
	];

	let workers = [
		'Kate Kharchenko',
		'Ivan Ivanov'
	];

	let groups = [
		['Maxim Shevchenko', 'Andrey Rubtsov'],
		['Denis Vasyliev', 'Valeriya Kolomiiets'],
		['Tatyana Molchanova', 'Darya Posuh', 'Olga Podoprigora']
	];

	groups.forEach(function(group, index){
		document.write(`<h2>Group # ${++index} </h2>`);
		document.write(`<ul class = "some-class">`);
		group.forEach(function(person){
			document.write(`<li>${person}</li>`)
		});
		document.write('</ul>');
	});

	document.write('<ul>');

	students.concat(workers).forEach(function(student, index){

		let parts = student.split(' ');
		delete students[0];

		students.splice(2, 3, 'John Snow', 'Elton John');

		document.write(`<li>
			<b>${++index} </b>
			<em>${parts[0] ? parts[0] : ''} </em>
			<b><em>${parts[1] ? parts[1] : ''}</em></b>
		</li>`); 
	

	});
	document.write('</ul>');

	
	document.write(`<em>${students.join(' -- ')}</em>`); 


 	document.write('<br>');
	document.write(`<em>${students.indexOf('Valeriya Kolomiiets')}</em>`); 	
	document.write('<br>');
	document.write(`<em>${students.indexOf('Valeriya')}</em>`); 



})();