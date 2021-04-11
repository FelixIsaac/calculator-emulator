let displayElement = document.getElementById("display");
let calculator = {
	screen: '',
	get display () {
		return this.screen;
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
		default: {
			calculator.display += value;
			break;
		}
	}
}