window.onload = function () {
	let matrixExample = [
		[ 1, 2, 3, 4 ],
		[ 4, 5, 6, 5 ],
		[ 7, 8, 9, 7 ],
		[ 7, 8, 9, 7 ]
	];


	function sumUpDiagonals(matrix) {
		let
			j = 0,
			d1, d2

		d1 = matrix.reduce( (acc, row) => acc + row[ j++ ], 0 );

		j--

		d2 = matrix.reduce( (acc, row) => acc + row[ j-- ], 0 );

		return d1 + d2
	}


	if(window.Bug) {
		let bug = Bug( '.testBody' )

		bug.describe( 'sumUpDiagonals' )
			.assert( sumUpDiagonals( matrixExample ) === 47, 'Равняется 47' )
	}
}