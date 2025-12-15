
class MediaDisplayer extends HTMLElement { 

	constructor() {
		super();
		
	}

	connectedCallback() {
		const media = this.getAttribute("media");
		const image = this.getAttribute("image"); //If media is image or not
		if(image) {
			let content = document.createElement("img");
			content.setAttribute("src", media);
			content.setAttribute("alt", "media");
			this.appendChild(content);
			this.onclick = this.OnClick;
		}
	}

	OnClick() {
		let fc_element = document.createElement("full-screen-media");
		fc_element.setAttribute("media", this.getAttribute("media"));
		fc_element.setAttribute("image", this.getAttribute("image"));
		document.body.appendChild(fc_element);
	}
}

class FullScreenMedia extends HTMLElement {
	constructor() {
		super();
		
	}

	connectedCallback() {
		const template = document.getElementById("sc-media-template");
		this.appendChild(template.content.cloneNode(true));
		const media = this.getAttribute("media");
		const image = this.getAttribute("image"); //If media is image or not
		if(image) {
			let content = document.createElement("img");
			content.setAttribute("src", media);
			content.setAttribute("alt", "media");
			this.children[0].children[1].appendChild(content);
			this.children[0].children[0].onclick = this.Close;
		}
	}

	Close() {
		this.parentElement.parentElement.remove();
	}
}

customElements.define("media-displayer", MediaDisplayer);
customElements.define("full-screen-media", FullScreenMedia);
