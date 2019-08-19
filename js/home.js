(function(){
	'use strict';

	//1 task:

	var salaries = {
		"Вася": 100,
		"Петя": 300,
		"Даша": 250
	};

	function sumSalary(salaries) {
		var sum = 0;
		for (var salary in salaries) {

				sum += (salaries[salary]);

		};
		return sum;
	};

	var summed = sumSalary(salaries);
	document.write('Суммa всех зарплат: ' + summed);

	// 2 task

	function maxSalary(salaries) {
		var max = 0;
		for (var salary in salaries) {

			if (max < salaries[salary]) {
				max = salaries[salary];
			}
		};
		
		return max;
	};

	let sum = 0;
	function isEmpty(salaries) {
	    for (var salary in salaries) {
	    	return sum += salaries-[salary];	
	    }
	    return true;
	}

	if(isEmpty(salaries)) {
		document.write('<br>');
		document.write('<br>');
    	document.write('Нет сотрудников');
	} 

	var maximum = maxSalary(salaries);
	document.write('<br>');
	document.write('<br>');
	document.write('Самая большая зарплата: ' + maximum);

	// 3 task

	var arr = [1, 2, 3, 4];

	function map(fn, arr) {

		var abc = [];
		for(var i = 0; i < arr.length; i++) {
			abc.push(fn(arr[i]))
		}
		return abc;
	};

	function square(x) {
		return x * x;
	}

	document.write('<br>');
	document.write('<br>');
	document.write(map(square, arr));



}());