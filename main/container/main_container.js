
class MainContainer extends HTMLElement { 

	constructor() {
		super();
	}

	connectedCallback() { 
		this.AdjustTopForHeader();
	}

	AdjustTopForHeader() {
		const headers = document.getElementsByTagName("header");
		let header = null;
		if(headers.length > 0) {
			header = headers[0];
		}

		if(header != null && header != undefined) {
			if(!header.classList.contains("top")) {
				this.style.top = `${header.offsetHeight-1}px`;
			}
		}
	}
}

customElements.define("main-container", MainContainer);