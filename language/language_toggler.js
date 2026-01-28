const language_toggler_template = document.createElement("template");
language_toggler_template.innerHTML = 
`
<button>
</button>
`

class LanguageToggler extends HTMLElement { 
	current_language = "";
	languages = [];
	constructor() {
		super();
	}

	connectedCallback() {
		const l = window.sessionStorage.getItem("language");
		this.CollectLanguages();
		this.SetDefaultLanguages();
		
		if(l != null && l != undefined) {
			this.current_language = l;
		} else {
			this.current_language = this.languages[0];
			window.sessionStorage.setItem("language", this.current_language);
		}
		let template = language_toggler_template.content.cloneNode(true);
		template.children[0].innerHTML = this.current_language;
		template.children[0].addEventListener("click", () => {
			this.ChangeLanguage();
		});

		//Set button text
		let current_index = this.languages.indexOf(this.current_language);
		current_index++;
		if(current_index >= this.languages.length) {
			current_index = 0;
		}
		template.children[0].innerHTML = this.languages[current_index];
		
		this.appendChild(template);
	}

	ChangeLanguage() {
		
		let current_index = this.languages.indexOf(this.current_language);
		current_index++;
		if(current_index >= this.languages.length) {
			current_index = 0;
		}
		this.current_language = this.languages[current_index];

		if(current_index+1 >= this.languages.length) {
			this.children[0].innerHTML = this.languages[0];
		} else {
			this.children[0].innerHTML = this.languages[current_index+1];
		}

		const l_cs = document.querySelectorAll("language-changer");
		for(let i = 0; i < l_cs.length; i++) {
			l_cs[i].ChangeLanguage(this.current_language);
		}

		window.sessionStorage.setItem("language", this.current_language);
	}

	SetDefaultLanguages() {
		const l_cs = document.querySelectorAll("language-changer");
		for(let i = 0; i < l_cs.length; i++) {
			l_cs[i].setAttribute("default_language", this.languages[0]);
		}
	}

	CollectLanguages() {
		const proto_languages = document.querySelector("languages").getAttribute("languages");
		this.languages = proto_languages.split(" ");
	}

	

}

customElements.define("language-toggler", LanguageToggler);