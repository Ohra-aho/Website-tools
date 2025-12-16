
class StickyHeader extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() { 
		const height = this.offsetHeight;
		let template = document.getElementById("sticky-header-template");
		this.appendChild(template.content.cloneNode(true));
		let button = this.querySelector("button");
		button.onclick = this.Open;
		this.style.top = `-${height}px`;
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