const displayElement = document.getElementById("display");
const parser = math.parser();

const calculator = {
	screen: '',
	selector: 0,
	history: [],
	get display () {
		return this.screen;
	},
	set display(value) {
		this.screen = value;
		displayElement.innerHTML = `\`${value}\``
		MathJax.typeset();
	}
}

document.querySelectorAll("div.buttons button")
	.forEach((button) => {
		button.addEventListener("click", ({ target }) => {
			input(target.value.length ? target.value : target.innerHTML);
		})
	})

const input = (value) => {
	switch(value) {
		case "DEL": {
			const screen = calculator.display;
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
			const previousAnswer = calculator.history[calculator.history.length - 1];
			parser.evaluate(`Ans = ${previousAnswer}`);
			calculator.display += "Ans";
			break;
		}
		case "=": {
			const answer = parser.evaluate(calculator.screen);
			calculator.history.push(answer);
			calculator.display = answer;
			console.log(parser);
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