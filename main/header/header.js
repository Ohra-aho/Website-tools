const sticky_header_template = document.createElement("template");
sticky_header_template.innerHTML = 
`
<header-sticky>
	<button id="header-open">&#8595;</button>
</header-sticky>
`


class StickyHeader extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() { 
		const height = this.offsetHeight;
		//let template = document.getElementById("sticky-header-template");
		this.appendChild(sticky_header_template.content.cloneNode(true));
		let button = this.querySelector("button");
		button.onclick = this.Open;
		this.style.top = `-${height}px`;
		window.addEventListener("resize", (event) => { 
			if(!Array.from(this.classList).includes("open")) {
				const height = this.offsetHeight; 
				this.style.top = `-${height}px`;
			}
			
		})
	}

	Open() {
		const parent = this.parentElement.parentElement;
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