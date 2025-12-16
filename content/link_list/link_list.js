
class LinkList extends HTMLElement { 
	links = [];
	constructor() {
		super();
	}

	connectedCallback() { 
		
		for(let i = 0; i < this.children.length; i++) {
			this.links.push(this.children[i]);
		}
		const template = document.getElementById("link-list-template");
		for(let i = 0; i < this.links.length; i++) {
			template.content.appendChild(this.links[i]);
		}
		this.appendChild(template.content.cloneNode(true));
		this.querySelector("button").onclick = this.OpenList;
	}

	OpenList() {
		console.log("toimii");
	}
}

customElements.define("link-list", LinkList);