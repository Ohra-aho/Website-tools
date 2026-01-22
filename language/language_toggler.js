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

		this.appendChild(template);
	}

	ChangeLanguage() {
		const l_cs = document.querySelectorAll("language-changer");
		console.log(l_cs.length);
		for(let i = 0; i < l_cs.length; i++) {
			l_cs[i].ChangeLanguage();
		}
		let current_index = this.languages.indexOf(this.current_language);
		current_index++;
		if(current_index >= this.languages.length) {
			current_index = 0;
		}
		this.current_language = this.languages[current_index];
		this.children[0].innerHTML = this.current_language;
	}

	CollectLanguages() {
		const proto_languages = this.getAttribute("languages");
		this.languages = proto_languages.split(" ");
	}

}

customElements.define("language-toggler", LanguageToggler);