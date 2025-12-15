
class GridGenerator extends HTMLElement { 

	constructor() {
		super();
	}

	connectedCallback() {
		const width = this.getAttribute("width") ?? "30%";
		const height = this.getAttribute("height") ?? "30%";
		const rows = this.getAttribute("rows") ?? "3";
		const columns = this.getAttribute("columns") ?? "3";
		this.style = 
		`
			grid-template-rows: repeat(${rows}, auto);
			grid-template-columns: repeat(${columns}, auto);
		`;
		const starting_i = this.children.length;
		for(let i = 0; i < starting_i; i++) {
			let cell = document.createElement("div");
			cell.style = `width: ${width}; height: ${height};`
			const child = this.children[0];
			child.style.height = "100%";
			child.style.width = "auto";
			cell.appendChild(child);
			//this.children[i].remove();
			this.appendChild(cell);
		}
	}
}

customElements.define("grid-generator", GridGenerator);