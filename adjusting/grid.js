
class GridGenerator extends HTMLElement { 
	narrow = 500;
	medium = 1030;
	wide = 1500;

	cell_height = 0;
	cell_width = 0;

	constructor() {
		super();
	}

	connectedCallback() {
		this.cell_width = this.children[0].offsetWidth;
		this.cell_height = this.children[0].offsetHeight;
		const parent_width = this.parentElement.offsetWidth;
		const columns = Math.floor(parent_width / this.cell_width);
		const rows = Math.floor(this.children.length / columns);

		this.style = 
		`
			grid-template-rows: repeat(${rows}, ${this.cell_height}px);
			grid-template-columns: repeat(${columns}, ${this.cell_width}px);
		`;

		window.addEventListener("resize", () => {
			this.cell_width = this.children[0].offsetWidth;
			this.cell_height = this.children[0].offsetHeight;
			const parent_width = this.parentElement.offsetWidth;
			const columns = Math.floor(parent_width / this.cell_width);
			const rows = Math.floor(this.children.length / columns);

			this.style = 
			`
				grid-template-rows: repeat(${rows}, ${this.cell_height}px);
				grid-template-columns: repeat(${columns}, ${this.cell_width}px);
			`;
			//this.AdjustForScreenWidth(width, height);
		});
	}

	AdjustForScreenWidth(width, height) {
		const window_width = window.innerWidth;
		
		if(window_width <= this.medium && window_width > this.narrow) {
			const cell_width = this.children[0].offsetWidth;
			if(cell_width < window_width / 2) {

			}
		}
	}
}

customElements.define("grid-generator", GridGenerator);