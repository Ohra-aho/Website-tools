
class Language extends HTMLElement {
	title = ""
	text = ""
	constructor() {
		super();
	}

	connectedCallback() {
		this.text = this.innerHTML;
		this.innerHTML = "";
		this.title = this.getAttribute("title");
	}

	ChangeLanguage() {
		const temp = this.previousSibling.innerHTML;
		this.previousSibling.innerHTML = this.text;
		this.text = temp;
	}

}

customElements.define("language-changer", Language);