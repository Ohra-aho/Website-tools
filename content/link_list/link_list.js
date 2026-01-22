const link_list_template = document.createElement("template");
link_list_template.innerHTML = 
`
<button>
	<ham-icon></ham-icon>
</button>
`

const ham_list_temp = document.createElement("template");
ham_list_temp.innerHTML = 
`
<ham-list>
	<div>
		<button>&#x2715;</button>
	</div>
</ham-list>
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
		}
		this.appendChild(template.cloneNode(true));
		this.querySelector("button").onclick = this.OpenList;
	}

	OpenList() {
		this.parentElement.classList.toggle("open");

		if(this.parentElement.classList.contains("open")) {
			const temp = ham_list_temp.content.cloneNode(true);
			temp.children[0].addEventListener("click", function () {
				this.parentElement.classList.toggle("open");
				this.parentElement.querySelector("ham-list").remove();
			});
			this.parentElement.appendChild(temp);
			for(let i = 0; i < this.parentElement.links.length; i++) {
				this.parentElement.querySelector("ham-list").appendChild(this.parentElement.links[i].cloneNode(true));
			}
		} else {
			this.parentElement.querySelector("ham-list").remove();
		}
	}
}

customElements.define("link-list", LinkList);