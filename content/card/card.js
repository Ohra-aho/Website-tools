
class Card extends HTMLElement { 

	constructor() {
		super();
		const template = document.getElementById("card-template");
		let card = template.content.cloneNode(true);

		const title = this.getAttribute("title");
		const image = this.getAttribute("image");
		const horizontal = Array.from(this.classList).includes("horizontal");
		const right = Array.from(this.classList).includes("right");

		const content = this.innerText;
		this.innerText = "";

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
			card.querySelector("img").remove();
			let new_img = document.createElement("img");
			new_img.setAttribute("src", image);
			card.firstElementChild.appendChild(new_img);
		}

		this.appendChild(card);
	}

}

customElements.define("card-img", Card);
