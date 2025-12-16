
class Hamburger extends HTMLElement { 

	constructor() {
		super();
	}

	connectedCallback() { 
		const template = document.getElementById("ham-icon-template");
		this.appendChild(template.content.cloneNode(true));
	}
}

customElements.define("ham-icon", Hamburger);