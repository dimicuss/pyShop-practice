window.onload = function () {
	function isEven(number) {
		return !(number % 2);
	}


	if (window.Bug) {
		let bug = Bug( '.testBody' )

		bug.describe( 'isEven' )
			.assert( isEven( 4 ) === true,  'Четное' )
			.assert( isEven( 3 ) === false, 'Нечетное' )
			.assert( isEven( 2 ) === true,  'Четное' )
			.assert( isEven( 1 ) === false, 'Не четное' )
	}
}