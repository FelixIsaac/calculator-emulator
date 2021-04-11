let displayElement = document.getElementById("display");
let calculator = {
	screen: '',
	get display () {
		return this.screen;
	},
	set display(value) {
		this.screen = value;
		displayElement.innerHTML = `\`${value}\``
		console.log(value);
		MathJax.typeset();
	}
}

document.querySelectorAll("div.buttons button")
	.forEach((button) => {
		button.addEventListener("click", ({ target }) => {
			input(target.innerHTML);
		})
	})

const input = (value) => {
	switch(value) {
		case "DEL": {
			calculator.display = screen.substring(0, screen.length - 1);
			break;
		}
		case "AC": {
			calculator.display = "";
			break;
		}
		case "x10^x": {
			break;
		}
		case "Ans": {
			break;
		}
		case "=": {
			calculator.display = math.evaluate(calculator.screen);
			break;
		}
		default: {
			calculator.display += value;
			break;
		}
	}
}

window.MathJax = {
  loader: {
    load: ['input/asciimath']
  },
  asciimath: {
    delimiters: [['$','$'], ['`','`']]
  }
};