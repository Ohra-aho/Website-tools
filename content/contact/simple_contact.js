const simple_contact_template = document.createElement("template");
simple_contact_template.innerHTML = 
`
<a href="mailto:">Contact</a>
`

class SimpleContact extends HTMLElement { 
	links = [];
	constructor() {
		super();
	}

	connectedCallback() { 
		const name = this.innerHTML;
		this.innerHTML = "";
		const subject = this.getAttribute("subject");
		const email = this.getAttribute("email");

		const template = simple_contact_template.content.cloneNode(true);
		this.appendChild(template.cloneNode(true));
		
		if(name != null) {
			this.children[0].innerHTML = name;
		}
		if(email != null) {
			let original_href = "mailto:";
			this.children[0].setAttribute("href", `${original_href}${email}`);
		}
		if(subject != null) {
			this.SetSubject(subject)
		}

		this.setAttribute("custom", "Y")
	}

	SetSubject(base_string) {
		let original_href = "mailto:";
		const split_string = base_string.split(" ");
		let complete_string = "";
		for(let i = 0; i < split_string.length; i++) {
			if(i == split_string.length-1) {
				complete_string += split_string[i];
			} else {
				complete_string += split_string[i]+"%20";
			}
		}

		this.children[0].setAttribute("href", `${original_href}?subject=${complete_string}`)
	}

	ChangeLanguage(title, content) {
		this.children[0].innerHTML = content;
		this.SetSubject(title);
	}

	GiveBaseLanguage() {
		return [
			this.getAttribute("subject"),
			this.children[0].innerHTML
		]
	}
}

customElements.define("simple-contact", SimpleContact);