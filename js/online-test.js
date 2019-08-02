(function(){
	'use strict'

	let data = [
		{
			text : 'У нас есть массив var lottery = [ 1, 44, 32, 55, 12, 17]; Какой код выведет число “1”?',
			variants : [
				'a. console.log( lottery )',
				'b. console.log( lottery[1] )',
				'c. console.log( lottery(0) )',
				'd. console.log( lottery[0] )',
				'e. все перечисленные'
			],
			right : 'd',
			weight : 5
		},
		{
			text : 'Как добавить число 23 в начало массива ages?',
			variants : [
				'a. ages.pop(23)',
				'b. ages.unshift(23)',
				'c. ages.shift(23)',
				'd. ages.push(23)'
			],
			right : 'b',
			weight : 1
		},
		{
			text : 'Можно ли добавлять несколько значений в массив командой push(). напр scores.push( 77, 76, 89 );?',
			variants : [
				'a. да',
				'b. нет'
			],
			right : 'a',
			weight : 3
		}
	];


// my variant

// 	let total = 0,
// 		rightAnswers = '',
// 		wrongAnswers = '';


// 	// 1. Перебираем массив вопросов 
// 	data.forEach(function(question){
// // 1а. Ввыводим вопрос в prompt
// 	// 2. Записываем ответ в переменную  
// 	let answer = prompt(question.text + '\n'+ question.variants.join('\n'));

// 	// 3. Сравниваем ответ с правильным вариантом

// 	if (answer == question.right) {
// 	// 4. Накидываем балл, увеличиваем переменную total
// 		total += question.weight;
// 		rightAnswers += question.text;

// 	} else {
// 		total -= question.weight;
// 		wrongAnswers += question.text;
// 	}



// 	});
// 	// 5. Выводим результат total в виде 
// 	alert(`You got ${total} points 
// 		<br> Your right answers is: ${rightAnswers} 
// 		<br> Your wrong answers is: ${wrongAnswers}`);


//Kate variant


let total = 0,
		rightAnswers = [],
		wrongAnswers = [];
	// 1. перебираем массив вопросов 
	data.forEach(function(question, index){
		// 1a. выводим вопрос в prompt
		// 2. записываем ответ в переменную
		let answer = prompt(question.text + '\n' + question.variants.join('\n'));

		// 3. сравниваем с правильным вариантом
		if (answer == question.right) {
			// 4. увеличиваем переменную total
			total += question.weight;
			rightAnswers.push(index);
		} else {
			total -= question.weight;
			wrongAnswers.push(index);
		}
	});

	// 5. выводим total
	alert(`You got ${total} point`);

	showResult('Right', rightAnswers);
	showResult('Wrong', wrongAnswers);

	function showResult(title, list) {
		document.write(`<h2>${title} Answers:</h2>`);
		document.write('<ul>');
		data.forEach(function(question, index){
			if (list.indexOf(index) != -1) {
				document.write(`<li>${question.text}</li>`);
			}
		})
		document.write('</ul>');
	}




}());