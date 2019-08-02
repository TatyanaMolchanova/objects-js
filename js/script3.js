(function () {
	'use strict';

	if(false) { 

		function ucFirst(str) {

			return str.charAt(0).toUpperCase() + str.slice(1);

		}

		document.write(ucFirst('kate'));

	}


	if(false) { 

		// var num;

		// 	do {
		// 		num = prompt('Enter number more than 100');
		// 	} while (Boolean(num) && Number.isNaN(+num) || (Boolean(num) && (num < 100)));
			

			// do {
			// 	num = prompt('Enter number more than 100');
			// } while (Boolean(num) && Number.isNaN(+num) || num == '' || (Boolean(num) && (num < 100)));
		
			
			var num,
				isNotNumber = true,
				isNotCond = true;

			do {
				num = prompt('Enter number more than 100');

					isNotNumber = Boolean(num) && Number.isNaN(+num),
					isNotCond = Boolean(num) && (num < 100);

			} while (isNotNumber || isNotCond);


			// 	not working:
			// var num;

			// do {
			// 	num = prompt('Enter number more than 100');
			// } while (typeof(num) == 'string' || (typeof(num) =='number' &&  num < 100));
		
	}


	



	

})();