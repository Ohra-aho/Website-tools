const title_card_template = document.createElement("template");
title_card_template.innerHTML = 
`
<button id="back">&#8592;</button>
<content-rack></content-rack>
<button id="forward">&#8594;</button>
`

class TitileCard extends HTMLElement { 
	content = [];
	index = 0;
	constructor() {
		super();
	}

	connectedCallback() { 
		for(let i = 0; i < this.children.length; i++) {
			this.content.push(this.children[i]);
		}
		const template = title_card_template.content.cloneNode(true);
		for(let i = 0; i < this.content.length; i++) {
			template.children[1].appendChild(this.content[i]);
		}
		this.appendChild(template.cloneNode(true));
		let buttons = this.querySelectorAll("button");
		buttons[1].onclick = this.Forward;
		buttons[0].onclick = this.Backward;
		window.addEventListener("resize", (event) => {
			this.children[1].scrollTo(this.index*this.offsetWidth, 0);
		});
	}

	Forward() {
		this.parentElement.MoveRack(1);
	}

	Backward() {
		this.parentElement.MoveRack(-1);
	}

	MoveRack(x) {
		const rack = this.children[1];
		let index = this.index;
		index += x;
		if(index == rack.children.length) {
			x = -index;
			index = 0;
		}
		if(index < 0) {
			index = rack.children.length-1;
			x = index;
		}
		this.index = index;
		rack.scrollLeft += this.offsetWidth*x;
	}
}

customElements.define("title-card", TitileCard);