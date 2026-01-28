class LanguageOption {
	name;
	text;
	title;

	constructor(name, text, title) {
		this.name = name;
		this.text = text;
		if(title != null) this.title = title;
	}
}

class Language extends HTMLElement {
	text = [];
	current_language = "";
	target_element;
	constructor() {
		super();
	}

	connectedCallback() {
		this.FindTargetElement();
		this.current_language = this.getAttribute("default_language");

		if(!this.target_element.getAttribute("custom", "Y")) {
			this.text.push(
				new LanguageOption(
					this.getAttribute("default_language"), 
					this.target_element.innerHTML, 
					this.target_element.getAttribute("title")
				)
			);
		} else {
			//GiveBaseLanguage needs to exist in all custom elements
			const target_content = this.target_element.GiveBaseLanguage();
			this.text.push(
				new LanguageOption(
					this.getAttribute("default_language"),
					target_content[1] ?? "",
					target_content[0] ?? ""
				)

			) 
		}

		for(let i = 0; i < this.children.length; i++) {
			this.text.push(
				new LanguageOption(
					this.children[i].getAttribute("name"), 
					this.children[i].innerHTML, 
					this.children[i].getAttribute("title")
				)
			);
		}
		this.innerHTML = "";
		this.GetCurrentLanguage();
	}

	ChangeLanguage(language) {
		this.current_language = language;

		if(this.target_element.getAttribute("custom") != "Y") {
			for(let i = 0; i < this.text.length; i++) {
				if(this.current_language == this.text[i].name) {
					
					/* I believe this part if useless
					if(this.target_element.getAttribute("title") && this.text[i].title != null) { 
						this.target_element.setAttribute("title", this.text[i].title)
					}
					*/

					this.target_element.innerText = this.text[i].text;
					break;
				}
			}
		} else {
			for(let i = 0; i < this.text.length; i++) {
				if(this.current_language == this.text[i].name) {
					this.target_element.ChangeLanguage(this.text[i].title, this.text[i].text)
					break;
				}
			}
		}
	}

	GetCurrentLanguage() {
		const l = window.sessionStorage.getItem("language");
		if(l != this.current_language) {
			this.ChangeLanguage(l);
		}
	}

	FindTargetElement() {
		let temp = this.previousSibling;
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
		this.target_element = temp;
	}

}

customElements.define("language-changer", Language);