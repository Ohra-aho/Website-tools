
class MediaDisplayer extends HTMLElement { 
	family = [];
	constructor() {
		super();
	}

	connectedCallback() {
		if(this.family.length == 0) {
			this.CollectFamily();
		}

		const media = this.getAttribute("media");
		const image = this.getAttribute("image"); //If media is image or not

		if(this.children.length > 0) {
			this.children[0].remove();
		}

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
		fc_element.family = this.family;
		document.body.appendChild(fc_element);
	}

	CollectFamily() {
		if(this.getAttribute("family") != null) {
			let proto_family = document.getElementsByTagName("media-displayer");

			for(let i = 0; i < proto_family.length; i++) {
				if(
					proto_family[i].getAttribute("family") != null && 
					proto_family[i].getAttribute("family") == this.getAttribute("family")
				) {
					this.family.push(proto_family[i].getAttribute("media"));
				}
			}
		}
	}
}

class FullScreenMedia extends HTMLElement {
	family = [];
	current_index = 0;
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

		if(this.family.length > 0) {
			this.AdjustForFamily();
		}
	}

	Close() {
		this.parentElement.parentElement.remove();
	}

	AdjustForFamily() {
		const button_1 = document.createElement("button");
		const button_2 = document.createElement("button");
		button_1.innerHTML = "&#8592;";
		button_2.innerHTML = "&#8594;";
		button_1.id = "back";
		button_2.id = "forward";
		button_1.onclick = this.ChangeImage;
		button_2.onclick = this.ChangeImage;
		this.children[0].appendChild(button_1);
		this.children[0].appendChild(button_2);
	}

	ChangeImage() {
		const parent = this.parentElement.parentElement;
		switch(this.id) {
			case "back":
				if(parent.current_index == 0) {
					parent.current_index = parent.family.length-1;
				}
				else {
					parent.current_index--;
				}
				break;
			case "forward":
				if(parent.current_index == parent.family.length-1) {
					parent.current_index = 0;
				} else {
					parent.current_index++;
				}
				break;
		}
		this.parentElement.children[1].children[0].src = parent.family[parent.current_index];
	}
}

customElements.define("media-displayer", MediaDisplayer);
customElements.define("full-screen-media", FullScreenMedia);
