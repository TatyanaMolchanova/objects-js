(function(){
	'use strict'

	//variant 1

	// var marks = [6,9,2,12,12,10,8];

	// // marks.forEach(function(mark){
	// // 	document.write(mark);
	// // 	document.write('<br>');

	// // });

	// let sum = 0;


	// marks.forEach(function(mark){
	// 	sum += mark;
	// 	// sum = sum + mark;
	// });

	// document.write(sum);
	// document.write('<br>');
	// document.write((sum / marks.length).toFixed(2));

	// var max = 0;

	// marks.forEach(function(mark){
	// 	if (max < mark) {
	// 		max = mark;
	// 	}
	// });
	
	// document.write('<br>');
	// document.write(max);

	// var min = max;

	// marks.forEach(function(mark){
	// 	if (min > mark) {
	// 		min = mark;
	// 	}
	// });
	
	// document.write('<br>');
	// document.write(min);

	// var delta = max - min;

	// document.write('<br>');
	// document.write(delta);


// //variatn 2

// var marks = [6,9,2,12,12,10,8];

// 	// marks.forEach(function(mark){
// 	// 	document.write(mark);
// 	// 	document.write('<br>');

// 	// });

// 	let sum = 0;


// 	marks.forEach(function(mark){
// 		sum += mark;
// 		// sum = sum + mark;
// 	});

// 	document.write(sum);
// 	document.write('<br>');
// 	document.write((sum / marks.length).toFixed(2));

// 	var max = marks[0],
// 		min = max;

// 	marks.forEach(function(mark){
// 		if (max < mark) {
// 			max = mark;
// 		}
// 		if (min > mark) {
// 			min = mark;
// 		}

// 	});
	
// 	document.write('<br>');
// 	document.write(max - min);

// //variatn 3

// var marks = [6,9,2,12,12,10,8];

// 	// marks.forEach(function(mark){
// 	// 	document.write(mark);
// 	// 	document.write('<br>');

// 	// });

// 	let sum = 0;


// 	marks.forEach(function(mark){
// 		sum += mark;
// 		// sum = sum + mark;
// 	});

// 	document.write(sum);
// 	document.write('<br>');
// 	document.write((sum / marks.length).toFixed(2));

// 	var max = marks[0],
// 		min = max;

// 	marks.forEach(function(mark){
// 		// if (max < mark) {
// 		// 	max = mark;
// 		// }

// 		max = max < mark ? mark : max; 


// 		// if (min > mark) {
// 		// 	min = mark;
// 		// }
		
// 		min = min > mark ? mark : min;
// 	});
	
// 	document.write('<br>');
// 	document.write(max - min);


//task 2

var marks = [6,9,2,12,5,7,8];


	let sum = 0;


	marks.forEach(function(mark){
		sum += mark;
		// sum = sum + mark;
	});

	document.write(sum);
	document.write('<br>');
	document.write((sum / marks.length).toFixed(2));

	var max = marks[0],
		min = max;

	marks.forEach(function(mark){
		// if (max < mark) {
		// 	max = mark;
		// }

		max = max < mark ? mark : max; 


		// if (min > mark) {
		// 	min = mark;
		// }
		
		min = min > mark ? mark : min;
	});
	
	document.write('<br>');
	document.write(max - min);

// не четные
	marks.forEach(function(mark){
		if (mark % 2){

			document.write('<br>');
			document.write(mark);
		}
	});
// четные
	marks.forEach(function(mark){
		if (!(mark % 2)){
			
			document.write('<br>');
			document.write(mark);
		}
	});


	var prices  = [34.50, 78.15, 12.70],
		discont = 10,
		discontLimit = 20.00;

	prices.forEach(function(price){

		// let newPrice  = (price - (discont *price) / 100).toFixed(2);
		let newPrice  = price;
		if(price >= discontLimit) {
			newPrice = ((1 - discont / 100) * price).toFixed(2);
		}

		

		document.write('<br>');
		document.write(price + ' - ' + newPrice);
	});

	

	
}());