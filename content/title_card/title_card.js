const title_card_template = document.createElement("template");
title_card_template.innerHTML = 
`
<button id="back">&#8592;</button>
<content-rack></content-rack>
<button id="forward">&#8594;</button>
<bubbles></bubbles>
`
const bubble_teplate = document.createElement("template");
bubble_teplate.innerHTML = `<bubble></bubble>`

class TitileCard extends HTMLElement { 
	content = [];
	index = 0;
	constructor() {
		super();
	}

	connectedCallback() { 
		//Instanciate template
		for(let i = 0; i < this.children.length; i++) {
			this.content.push(this.children[i]);
		}
		const template = title_card_template.content.cloneNode(true);
		const child_count = this.children.length;

		//Add content
		for(let i = 0; i < this.content.length; i++) {
			template.children[1].appendChild(this.content[i]);
		}
		this.appendChild(template.cloneNode(true));
		if(child_count > 1) this.AddBubbles(child_count);

		let buttons = this.querySelectorAll("button");
		if(child_count > 1) {
			//Give onclickc
			buttons[1].onclick = this.Forward;
			buttons[0].onclick = this.Backward;
		} else {
			buttons[1].remove();
			buttons[0].remove();
		}

		//Adjust to resize
		window.addEventListener("resize", (event) => {
			this.children[1].scrollTo(this.index*this.offsetWidth, 0);
		});

		this.IndicateChosenBubble(0);
	}

	AddBubbles(amount) {
		for(let i = 0; i < amount; i++) {
			const bubble = bubble_teplate.content.cloneNode(true);
			bubble.firstChild.addEventListener("click", function () {
				//this.parentElement.parentElement.index = i;
				this.parentElement.parentElement.SetRack(i);
			});
			this.children[3].appendChild(bubble);
		}
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
		rack.scrollLeft = this.offsetWidth*index;
		this.IndicateChosenBubble(index);
	}

	SetRack(index) {
		const rack = this.children[1];
		this.index = index;
		rack.scrollLeft = this.offsetWidth*index;
		this.IndicateChosenBubble(index);
	}

	IndicateChosenBubble(index) {
		const bubble_rack = this.querySelector("bubbles");
		if(bubble_rack.children.length > 1) {
			for(let i = 0; i < bubble_rack.children.length; i++) {
				if(Array.from(bubble_rack.children[i].classList).includes("chosen")) {
					bubble_rack.children[i].classList.toggle("chosen");
					break;
				}
			}
			bubble_rack.children[index].classList.toggle("chosen");
		}
	}
}

customElements.define("title-card", TitileCard);