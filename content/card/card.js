const card_template = document.createElement("template");
card_template.innerHTML = 
`
<card>
	<img src="./media/images/header/placeholder_logo.png" alt="image">
	<content>
		<h3>Title</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Nobis soluta pariatur, magni rem laudantium officiis earum incidunt. 
			Sequi veritatis dolorum, libero explicabo nulla itaque officiis. 
			Excepturi quo repellat consequatur nisi.
		</p>
	</content>
</card>
`

class Card extends HTMLElement { 
	constructor() {
		super();
	}

	connectedCallback() { 
		//const template = document.getElementById("card-template");
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
			card.firstElementChild.classList.add("text");
		}

		if(horizontal) {
			card.firstElementChild.classList.add("horizontal");
		}
		
		if(right) {
			card.firstElementChild.appendChild(card.querySelector("img"));
		}

		this.appendChild(card);
	}

}

customElements.define("card-img", Card);
