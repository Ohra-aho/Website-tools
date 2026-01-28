const card_template = document.createElement("template");
card_template.innerHTML = 
`
	<img src="./media/images/header/placeholder_logo.png" alt="image">
	<content>
		<h3></h3>
		<p></p>
	</content>
`

class Card extends HTMLElement { 
	constructor() {
		super();
	}

	connectedCallback() { 
		let card = card_template.content.cloneNode(true);

		//Get content
		const title = this.getAttribute("title");
		const image = this.getAttribute("image");
		const horizontal = Array.from(this.classList).includes("horizontal");
		const right = Array.from(this.classList).includes("right");

		const content = this.innerText;
		this.innerText = "";

		//Place content
		card.querySelector("p").innerText = content ?? "Placeholder text";
		card.querySelector("h3").innerText = title ?? "Title";

		if(image != null) { 
			card.querySelector("img").setAttribute("src", image);
		} else {
			card.querySelector("img").remove();
			this.classList.add("text");
		}

		if(horizontal) {
			this.classList.add("horizontal");
		}
		
		if(right) {
			card.appendChild(card.querySelector("img"));
		}

		this.appendChild(card);
	}


	ChangeLanguage() {

	}

	GiveBaseLanguage() {

	}
}

customElements.define("card-img", Card);
