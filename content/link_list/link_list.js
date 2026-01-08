const link_list_template = document.createElement("template");
link_list_template.innerHTML = 
`
<ham-list>
		
</ham-list>
<button>
	<ham-icon></ham-icon>
</button>
`

class LinkList extends HTMLElement { 
	links = [];
	constructor() {
		super();
	}

	connectedCallback() { 
		
		for(let i = 0; i < this.children.length; i++) {
			this.links.push(this.children[i]);
		}
		const template = link_list_template.content.cloneNode(true);
		for(let i = 0; i < this.links.length; i++) {
			template.appendChild(this.links[i]);
			template.children[0].appendChild(this.links[i].cloneNode(true));
		}
		this.appendChild(template.cloneNode(true));
		this.querySelector("button").onclick = this.OpenList;
		this.querySelector("ham-list").style.top = `-${this.querySelector("ham-list").offsetHeight}px`;
	}

	OpenList() {
		this.parentElement.classList.toggle("open")
		if(this.parentElement.classList.contains("open")) {
			this.parentElement.querySelector("ham-list").style.top = `100%`;
		} else {
			this.parentElement.querySelector("ham-list").style.top = `-${this.parentElement.querySelector("ham-list").offsetHeight}px`;
		}
		
	}
}

customElements.define("link-list", LinkList);