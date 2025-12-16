
class MainContainer extends HTMLElement { 

	constructor() {
		super();
	}

	connectedCallback() { 
		this.AdjustTopForHeader();
	}

	AdjustTopForHeader() {
		const headers = document.getElementsByTagName("header");
		const header = headers[0];
		this.style.top = `${header.offsetHeight-1}px`;
	}
}

customElements.define("main-container", MainContainer);