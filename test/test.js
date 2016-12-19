window.Bug = (function () {
	const suite = {
		assert: function (assertion, message, cb) {
			let
				elm       = document.createElement( 'li' ),
				classList = [ 'assert' ]

			if (assertion) {
				classList.push( 'success' )
			}
			else {
				classList.push( 'failure' )
			}


			elm.classList = classList.join(' ')
			elm.innerText = message


			if(this.suite) {
				this.suite.appendChild(elm)
				cb && cb(elm)
			}
			else {
				cb && cb(elm)
			}

			return this
		}
	}


	const suiteBody = {
		describe: function (headerText) {
			let
				headerDom = document.createElement('h2'),
				suiteDom  = document.createElement('ul'),
				obj       = Object.create(suite)

			headerDom.innerText = headerText

			suiteDom.appendChild(headerDom)
			this.suiteBodyDom.appendChild(suiteDom)

			obj.suite = suiteDom
			return obj
		}
	}



	return selector => {
		if(selector) {
			let obj = Object.create(suiteBody)

			obj.suiteBodyDom = document.querySelector(selector)

			return obj
		}

		else {
			throw new TypeError(
				'Wrong arguments, parameter "suiteBodySelector" is null or undefined!')
		}
	}
})()