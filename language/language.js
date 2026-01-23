
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
		let temp = this.previousSibling;
		let temp_text = "";
		let safe = 0;
		//Loop through white spaces and texts
		while(temp.nodeName == "#text") {
			temp = temp.previousSibling;
			safe++;
			if(safe >= 100) {
				console.log("safe triggered");
				break;
			}
		}
		
		temp_text = temp.innerHTML;
		temp.innerText = this.text;
		this.text = temp_text;
	}

}

customElements.define("language-changer", Language);