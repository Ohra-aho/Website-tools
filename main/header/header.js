const sticky_header_template = document.createElement("template");
sticky_header_template.innerHTML = 
`

<button id="header-open">&#8595;</button>

`


class StickyHeader extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() { 
		const height = this.offsetHeight;
		this.appendChild(sticky_header_template.content.cloneNode(true));

		let button = this.querySelector("button");
		button.onclick = this.Open;

		this.style.top = `-${height}px`;

		window.addEventListener("resize", () => { 
			if(!Array.from(this.classList).includes("open")) {
				const height = this.offsetHeight; 
				this.style.top = `-${height}px`;
			}
		})
	}

	Open() {
		const parent = this.parentElement;
		if(parent.classList.toggle("open")) {
			parent.style.top = `0`;
			this.innerHTML = "&#8593;";
		} else {
			parent.style.top = `-${parent.offsetHeight}px`;
			this.innerHTML = "&#8595;";
		}
	}
}

customElements.define("sticky-header", StickyHeader);